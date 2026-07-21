Add-Type -AssemblyName System.Runtime.WindowsRuntime
$null = [Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime]

$path = "C:\Users\admin\Documents\作品集\portfolio-temp\简历.jpg"
$getFileOp = [Windows.Storage.StorageFile]::GetFileFromPathAsync($path)
"Operation type: " + $getFileOp.GetType().FullName
"Operation methods: " + ($getFileOp | Get-Member | Select-Object -ExpandProperty Name)
