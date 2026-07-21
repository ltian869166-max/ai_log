$fxDir = "$env:windir\Microsoft.NET\Framework64\v4.0.30319"
$asm = [System.Reflection.Assembly]::LoadFrom("$fxDir\System.Runtime.WindowsRuntime.dll")
$types = $asm.GetExportedTypes() | Where-Object { $_.Name -like "*GetAwaiter*" -or $_.Name -like "*WindowsRuntime*" -or $_.Name -like "*TaskAwaiter*" }
foreach ($t in $types) {
    Write-Output "Type: $($t.FullName)"
    foreach ($m in $t.GetMethods()) {
        Write-Output "  Method: $($m.Name)"
    }
}
