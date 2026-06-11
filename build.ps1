$out = "F:\DACTILOGRAFIA\MecaWeb\textos.js"
$content = "const lecciones = [`n"
for ($i=1; $i -le 72; $i++) {
    $num = "{0:D2}" -f $i
    $file = "F:\DACTILOGRAFIA\MECANOGRAFIA10\textos\TEXTO_$num"
    if (Test-Path $file) {
        # Using Default encoding which should match the system's ANSI code page (like Windows-1252 for Spanish)
        $text = Get-Content -Path $file -Encoding Default -Raw
        # Strip carriage returns to prevent double spacing
        $text = $text -replace "`r", ""
        $text = $text.Trim()
        
        # Escape backticks, newlines, and double quotes for JS template literal or string
        # Actually, let's use JSON for safe encoding
        $jsonText = ConvertTo-Json $text
        $content += "  $jsonText,`n"
    }
}
$content += "];`n"
[System.IO.File]::WriteAllText($out, $content, [System.Text.Encoding]::UTF8)
Write-Host "Conversión completada."
