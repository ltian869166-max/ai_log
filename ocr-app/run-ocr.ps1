$imagePath = "C:\Users\admin\Documents\作品集\portfolio-temp\简历.jpg"
$outputFile = "C:\Users\admin\Documents\作品集\portfolio-temp\ocr-result.txt"

try {
    # Load WinRT interop assemblies
    [System.Reflection.Assembly]::LoadFrom("$env:windir\Microsoft.NET\Framework64\v4.0.30319\System.Runtime.InteropServices.WindowsRuntime.dll") | Out-Null

    # Activate WinRT types
    $ocrType = [Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType=WindowsRuntime]
    $storageFileType = [Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime]
    $langType = [Windows.Globalization.Language, Windows.Globalization, ContentType=WindowsRuntime]
    $bitmapDecoderType = [Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType=WindowsRuntime]

    # Create language and engine
    $lang = New-Object Windows.Globalization.Language("zh-Hans-CN")
    $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage($lang)
    if ($null -eq $engine) {
        $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
    }
    if ($null -eq $engine) { "NULL_ENGINE" | Out-File $outputFile -Force -Encoding utf8; exit 1 }
    "ENGINE_OK" | Out-File $outputFile -Force -Encoding utf8

    # Get file
    $fileOp = [Windows.Storage.StorageFile]::GetFileFromPathAsync($imagePath)
    $file = [System.Runtime.InteropServices.WindowsRuntime.WindowsRuntimeSystemExtensions]::AsTask($fileOp).GetAwaiter().GetResult()
    "FILE: $($file.Path)" | Out-File $outputFile -Encoding utf8 -Append
    
    # Open stream  
    $streamOp = $file.OpenReadAsync()
    $stream = [System.Runtime.InteropServices.WindowsRuntime.WindowsRuntimeSystemExtensions]::AsTask($streamOp).GetAwaiter().GetResult()
    "STREAM: $($stream.Size)" | Out-File $outputFile -Encoding utf8 -Append
    
    # Create decoder
    $decoderOp = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
    $decoder = [System.Runtime.InteropServices.WindowsRuntime.WindowsRuntimeSystemExtensions]::AsTask($decoderOp).GetAwaiter().GetResult()
    "DECODER: $($decoder.PixelWidth)x$($decoder.PixelHeight)" | Out-File $outputFile -Encoding utf8 -Append
    
    # Get software bitmap
    $sbOp = $decoder.GetSoftwareBitmapAsync()
    $sb = [System.Runtime.InteropServices.WindowsRuntime.WindowsRuntimeSystemExtensions]::AsTask($sbOp).GetAwaiter().GetResult()
    
    # OCR
    $ocrOp = $engine.RecognizeAsync($sb)
    $result = [System.Runtime.InteropServices.WindowsRuntime.WindowsRuntimeSystemExtensions]::AsTask($ocrOp).GetAwaiter().GetResult()
    
    $result.Text | Out-File $outputFile -Encoding utf8 -Force
    "OCR_DONE" | Out-File $outputFile -Encoding utf8 -Append
}
catch {
    $err = "Error: $($_.Exception.Message)`n$($_.Exception.ToString())"
    $err | Out-File $outputFile -Encoding utf8 -Force
}
