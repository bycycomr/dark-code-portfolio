# PowerShell Deployment Script for omerdogan.dev
# Windows için otomatik deployment

# Renkli output için
function Write-ColorOutput($ForegroundColor) {
    $fc = $host.UI.RawUI.ForegroundColor
    $host.UI.RawUI.ForegroundColor = $ForegroundColor
    if ($args) {
        Write-Output $args
    }
    $host.UI.RawUI.ForegroundColor = $fc
}

# VDS bilgilerini buraya girin
$VDS_IP = "84.247.20.85"
$VDS_USER = "root"
$VDS_PATH = "/var/www/omerdogan.dev/"

Write-ColorOutput Green "=================================="
Write-ColorOutput Green "omerdogan.dev Deployment Script"
Write-ColorOutput Green "=================================="
Write-Output ""

# VDS IP kontrolü
if ($VDS_IP -eq "VDS_IP_ADRESINIZI_BURAYA_YAZIN") {
    Write-ColorOutput Red "HATA: VDS IP adresini deploy.ps1 dosyasında güncelleyin!"
    Write-ColorOutput Yellow "Deploy.ps1 dosyasını açın ve VDS_IP değişkenine IP adresinizi yazın."
    exit 1
}

# Build işlemi
Write-ColorOutput Cyan "ADIM 1: Proje build ediliyor..."
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-ColorOutput Red "Build hatası! İşlem durduruluyor."
    exit 1
}

Write-ColorOutput Green "✓ Build tamamlandı!"
Write-Output ""

# Upload işlemi
Write-ColorOutput Cyan "ADIM 2: Dosyalar VDS'ye yükleniyor..."
Write-ColorOutput Yellow "SCP ile $VDS_IP adresine bağlanılıyor..."

# SCP komutu (OpenSSH gerekli)
scp -r dist\* ${VDS_USER}@${VDS_IP}:${VDS_PATH}

if ($LASTEXITCODE -ne 0) {
    Write-ColorOutput Red "Upload hatası!"
    Write-ColorOutput Yellow "SSH bağlantısını kontrol edin veya WinSCP kullanın."
    exit 1
}

Write-Output ""
Write-ColorOutput Green "=================================="
Write-ColorOutput Green "✓ Deployment başarılı!"
Write-ColorOutput Green "=================================="
Write-Output ""
Write-ColorOutput Cyan "Siteniz: https://omerdogan.dev"
Write-Output ""

