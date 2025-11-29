#!/bin/bash
# Local Build ve VDS'ye Upload Script
# omerdogan.dev deployment

echo "==================================="
echo "LOCAL: Projeyi Build Et"
echo "==================================="

# Node modüllerini yükle (gerekirse)
npm install

# Production build oluştur
npm run build

echo ""
echo "==================================="
echo "Build tamamlandı!"
echo "Dosyalar: dist/ klasöründe"
echo "==================================="
echo ""
echo "Şimdi dist/ klasörünü VDS'ye yükleyin:"
echo ""
echo "Yöntem 1: SCP ile (önerilen)"
echo "----------------------------"
echo "scp -r dist/* root@YOUR_VDS_IP:/var/www/omerdogan.dev/"
echo ""
echo "Yöntem 2: SFTP ile"
echo "----------------------------"
echo "1. FileZilla, WinSCP veya Cyberduck kullanın"
echo "2. VDS'ye bağlanın (root@YOUR_VDS_IP)"
echo "3. dist/ içindeki TÜM dosyaları /var/www/omerdogan.dev/ içine atın"
echo ""
echo "Yöntem 3: rsync ile (gelişmiş)"
echo "----------------------------"
echo "rsync -avz --delete dist/ root@YOUR_VDS_IP:/var/www/omerdogan.dev/"
echo ""

