import https from "https";
import fs from "fs";
import path from "path";
import zlib from "zlib";

const REGISTRY = "https://registry.npmjs.org";
const PKG = "gsap";
const CWD = process.cwd();

async function getPackageMeta() {
  const url = REGISTRY + "/" + PKG + "/latest";
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", (c) => data += c);
      res.on("end", () => resolve(JSON.parse(data)));
      res.on("error", reject);
    }).on("error", reject);
  });
}

function extractTar(tarData, dest) {
  let offset = 0;
  const td = new TextDecoder("utf-8");
  
  function readStr(start, len) {
    let end = start;
    while (end < start + len && tarData[end] !== 0) end++;
    return td.decode(tarData.slice(start, end));
  }
  
  while (offset + 512 <= tarData.length) {
    const name = readStr(offset, 100).trim();
    if (!name) break;
    const sizeStr = readStr(offset + 124, 12).trim();
    const size = parseInt(sizeStr, 8);
    if (isNaN(size)) { offset += 512; continue; }
    const type = tarData[offset + 156];
    const contentStart = offset + 512;
    const paddedSize = Math.ceil(size / 512) * 512;
    
    if (type === 48 || type === 0) {
      let relPath = name;
      if (relPath.startsWith("package/")) relPath = relPath.slice(8);
      if (relPath && !relPath.endsWith("/")) {
        const destPath = path.join(dest, relPath);
        const dir = path.dirname(destPath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(destPath, tarData.subarray(contentStart, contentStart + size));
      }
    }
    offset += 512 + paddedSize;
  }
}

async function main() {
  console.log("Fetching gsap metadata...");
  const meta = await getPackageMeta();
  const version = meta.version;
  const tarballUrl = meta.dist.tarball;
  console.log("Downloading gsap@" + version + " from " + tarballUrl);
  
  const tarData = await new Promise((resolve, reject) => {
    https.get(tarballUrl, (res) => {
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => {
        const buf = Buffer.concat(chunks);
        const gunzip = zlib.createGunzip();
        const out = [];
        gunzip.on("data", (c) => out.push(c));
        gunzip.on("end", () => resolve(Buffer.concat(out)));
        gunzip.on("error", reject);
        gunzip.end(buf);
      });
      res.on("error", reject);
    }).on("error", reject);
  });
  
  const gsapDir = path.join(CWD, "node_modules", PKG);
  if (!fs.existsSync(gsapDir)) fs.mkdirSync(gsapDir, { recursive: true });
  extractTar(tarData, gsapDir);
  console.log("Extracted to", gsapDir);
  
  const pkgPath = path.join(CWD, "package.json");
  const pkgJson = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
  pkgJson.dependencies = pkgJson.dependencies || {};
  pkgJson.dependencies[PKG] = "^" + version;
  fs.writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 2) + "\n");
  console.log("package.json updated with gsap@^" + version);
}

main().catch(console.error);
