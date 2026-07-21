using System;
using System.IO;
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
            var task = RecognizeAsync(imagePath);
            task.Wait();
            return task.Result;
        }
        catch (Exception ex)
        {
            return "ERROR: " + ex.ToString();
        }
    }

    private static async Task<string> RecognizeAsync(string imagePath)
    {
        var file = await StorageFile.GetFileFromPathAsync(imagePath);
        using (var stream = await file.OpenReadAsync())
        {
            var decoder = await BitmapDecoder.CreateAsync(stream);
            var softwareBitmap = await decoder.GetSoftwareBitmapAsync(BitmapPixelFormat.Bgra8, BitmapAlphaMode.Premultiplied);
            var lang = new Windows.Globalization.Language("zh-Hans-CN");
            var engine = OcrEngine.TryCreateFromLanguage(lang);
            if (engine == null)
                engine = OcrEngine.TryCreateFromUserProfileLanguages();
            var result = await engine.RecognizeAsync(softwareBitmap);
            return result.Text;
        }
    }
}
