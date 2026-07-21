$fxDir = "$env:windir\Microsoft.NET\Framework64\v4.0.30319"
$asm = [System.Reflection.Assembly]::LoadFrom("$fxDir\System.Runtime.WindowsRuntime.dll")
$type = $asm.GetType("System.WindowsRuntimeSystemExtensions")
$getAwaiterMethods = $type.GetMethods() | Where-Object { $_.Name -eq "GetAwaiter" }
foreach ($m in $getAwaiterMethods) {
    Write-Output "=== GetAwaiter ==="
    Write-Output "Return: $($m.ReturnType.FullName)"
    $pars = $m.GetParameters()
    foreach ($p in $pars) {
        Write-Output "  Param: $($p.Name) : $($p.ParameterType.FullName)"
    }
}
