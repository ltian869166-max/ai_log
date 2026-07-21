using System;
using System.Threading.Tasks;
using Windows.Graphics.Imaging;
using Windows.Media.Ocr;
using Windows.Storage;
using Windows.Storage.Streams;

public class WinRTOcr
{
    public static string Recognize(string imagePath)
    {
        try
        {
            // Get file synchronously
            var fileOp = StorageFile.GetFileFromPathAsync(imagePath);
            var file = WindowsRuntimeSystemExtensions.AsTask<StorageFile>(fileOp).GetAwaiter().GetResult();

            // Open stream
            var streamOp = file.OpenReadAsync();
            var stream = WindowsRuntimeSystemExtensions.AsTask<IRandomAccessStreamWithContentType>(streamOp).GetAwaiter().GetResult();

            // Create decoder
            var decoderOp = BitmapDecoder.CreateAsync(stream);
            var decoder = WindowsRuntimeSystemExtensions.AsTask<BitmapDecoder>(decoderOp).GetAwaiter().GetResult();

            // Get software bitmap
            var sbOp = decoder.GetSoftwareBitmapAsync();
            var sb = WindowsRuntimeSystemExtensions.AsTask<SoftwareBitmap>(sbOp).GetAwaiter().GetResult();

            // Create language and engine
            var lang = new Windows.Globalization.Language("zh-Hans-CN");
            var engine = OcrEngine.TryCreateFromLanguage(lang);
            if (engine == null)
                engine = OcrEngine.TryCreateFromUserProfileLanguages();

            // OCR
            var ocrOp = engine.RecognizeAsync(sb);
            var result = WindowsRuntimeSystemExtensions.AsTask<OcrResult>(ocrOp).GetAwaiter().GetResult();

            return result.Text;
        }
        catch (Exception ex)
        {
            return "ERROR: " + ex.ToString();
        }
    }

    static void Main()
    {
        var text = WinRTOcr.Recognize(@"C:\Users\admin\Documents\作品集\portfolio-temp\简历.jpg");
        Console.Write(text);
    }
}
