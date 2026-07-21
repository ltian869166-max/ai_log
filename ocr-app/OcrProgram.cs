using System;
using System.IO;
using System.Threading.Tasks;
using Windows.Graphics.Imaging;
using Windows.Media.Ocr;
using Windows.Storage;
using Windows.Storage.Streams;

class OcrProgram
{
    static async Task Main()
    {
        try
        {
            string imagePath = @"C:\Users\admin\Documents\作品集\portfolio-temp\简历.jpg";
            var file = await StorageFile.GetFileFromPathAsync(imagePath);
            using (var stream = await file.OpenReadAsync())
            {
                var decoder = await BitmapDecoder.CreateAsync(stream);
                var softwareBitmap = await decoder.GetSoftwareBitmapAsync();
                var ocrEngine = OcrEngine.TryCreateFromUserProfileLanguages();
                if (ocrEngine == null)
                {
                    ocrEngine = OcrEngine.TryCreateFromLanguage(new Windows.Globalization.Language("zh-CN"));
                }
                var result = await ocrEngine.RecognizeAsync(softwareBitmap);
                Console.WriteLine(result.Text);
            }
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine("ERROR: " + ex.Message);
            Console.Error.WriteLine(ex.StackTrace);
        }
    }
}
