Add-Type -AssemblyName System.Runtime.WindowsRuntime
$null = [Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime]
$null = [Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType=WindowsRuntime]
$null = [Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType=WindowsRuntime]
$null = [Windows.Storage.Streams.RandomAccessStream, Windows.Storage.Streams, ContentType=WindowsRuntime]
$null = [Windows.Globalization.Language, Windows.Globalization, ContentType=WindowsRuntime]

$path = "C:\Users\admin\Documents\作品集\portfolio-temp\简历.jpg"
Write-Host "File exists: $(Test-Path $path)"

# Using a different async approach - direct API call
$getFileOp = [Windows.Storage.StorageFile]::GetFileFromPathAsync($path)
while ($getFileOp.Status -eq 'Started') { Start-Sleep -Milliseconds 100 }
$file = $getFileOp.GetResults()
Write-Host "File: $($file.Path)"

$openOp = $file.OpenReadAsync()
while ($openOp.Status -eq 'Started') { Start-Sleep -Milliseconds 100 }
$stream = $openOp.GetResults()
Write-Host "Stream opened"

$decoderOp = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
while ($decoderOp.Status -eq 'Started') { Start-Sleep -Milliseconds 100 }
$decoder = $decoderOp.GetResults()
Write-Host "Decoder: $($decoder.PixelWidth)x$($decoder.PixelHeight)"

$sbOp = $decoder.GetSoftwareBitmapAsync()
while ($sbOp.Status -eq 'Started') { Start-Sleep -Milliseconds 100 }
$softwareBitmap = $sbOp.GetResults()
Write-Host "SoftwareBitmap: $($softwareBitmap.PixelWidth)x$($softwareBitmap.PixelHeight)"

$lang = [Windows.Globalization.Language]::new("zh-Hans-CN")
$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage($lang)
if ($null -eq $engine) {
    Write-Host "zh-Hans-CN not available, using user profile"
    $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
}
Write-Host "OCR Engine created"

$ocrOp = $engine.RecognizeAsync($softwareBitmap)
while ($ocrOp.Status -eq 'Started') { Start-Sleep -Milliseconds 200 }
$result = $ocrOp.GetResults()
$text = $result.Text
Write-Host "=== OCR RESULT START ==="
$text
Write-Host "=== OCR RESULT END ==="

$stream.Dispose()
