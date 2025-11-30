#!/bin/bash
# VDS Tam Kurulum Script'i
# omerdogan.dev için Ubuntu 22.04

set -e  # Hata durumunda dur

echo "========================================="
echo "  omerdogan.dev VDS Kurulum Script'i"
echo "========================================="
echo ""

# Renk kodları
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Domain bilgileri
DOMAIN="omerdogan.dev"
WWW_DOMAIN="www.omerdogan.dev"
WEB_ROOT="/var/www/${DOMAIN}"

echo -e "${CYAN}▶ ADIM 1: Sistem Güncelleme${NC}"
apt update
apt upgrade -y
echo -e "${GREEN}✓ Sistem güncellendi${NC}"
echo ""

echo -e "${CYAN}▶ ADIM 2: Nginx Kurulumu${NC}"
apt install -y nginx
systemctl enable nginx
systemctl start nginx
echo -e "${GREEN}✓ Nginx kuruldu ve başlatıldı${NC}"
echo ""

echo -e "${CYAN}▶ ADIM 3: Web Dizini Oluşturma${NC}"
mkdir -p ${WEB_ROOT}
chown -R $USER:$USER ${WEB_ROOT}
chmod -R 755 ${WEB_ROOT}
echo -e "${GREEN}✓ Web dizini oluşturuldu: ${WEB_ROOT}${NC}"
echo ""

echo -e "${CYAN}▶ ADIM 4: Nginx Konfigürasyonu${NC}"
cat > /etc/nginx/sites-available/${DOMAIN} << 'NGINXCONF'
server {
    listen 80;
    listen [::]:80;
    
    server_name omerdogan.dev www.omerdogan.dev;
    
    root /var/www/omerdogan.dev;
    index index.html index.htm;
    
    # Logging
    access_log /var/log/nginx/omerdogan.dev.access.log;
    error_log /var/log/nginx/omerdogan.dev.error.log;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/json
        application/xml
        application/xml+rss
        application/x-javascript
        image/svg+xml;
    
    # SPA routing (React Router için)
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets (images, fonts, etc.)
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp|avif)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
    
    # Cache CSS and JavaScript
    location ~* \.(css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Cache fonts
    location ~* \.(woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    # Deny access to hidden files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
}
NGINXCONF

# Symlink oluştur
ln -sf /etc/nginx/sites-available/${DOMAIN} /etc/nginx/sites-enabled/${DOMAIN}

# Default site'ı devre dışı bırak (port çakışmasını önlemek için)
if [ -f /etc/nginx/sites-enabled/default ]; then
    rm /etc/nginx/sites-enabled/default
    echo -e "${YELLOW}! Default Nginx site devre dışı bırakıldı${NC}"
fi

# Config'i test et
nginx -t

# Nginx'i reload et
systemctl reload nginx

echo -e "${GREEN}✓ Nginx konfigürasyonu tamamlandı${NC}"
echo ""

echo -e "${CYAN}▶ ADIM 5: Certbot Kurulumu (SSL için)${NC}"
apt install -y certbot python3-certbot-nginx
echo -e "${GREEN}✓ Certbot kuruldu${NC}"
echo ""

echo -e "${CYAN}▶ ADIM 6: Firewall Ayarları${NC}"
# UFW zaten aktif, sadece kontrol edelim
ufw status | grep -q "Status: active"
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ UFW zaten aktif${NC}"
    ufw allow 80/tcp > /dev/null 2>&1 || true
    ufw allow 443/tcp > /dev/null 2>&1 || true
    echo -e "${GREEN}✓ HTTP (80) ve HTTPS (443) portları açık${NC}"
else
    echo -e "${YELLOW}! UFW aktif değil${NC}"
fi
echo ""

echo "========================================="
echo -e "${GREEN}✓ Kurulum Tamamlandı!${NC}"
echo "========================================="
echo ""
echo -e "${YELLOW}Sonraki Adımlar:${NC}"
echo ""
echo "1. DNS Ayarları:"
echo "   Domain sağlayıcınızda şu A kayıtlarını ekleyin:"
echo "   - A Record: @   -> $(curl -s ifconfig.me)"
echo "   - A Record: www -> $(curl -s ifconfig.me)"
echo ""
echo "2. Build Dosyalarını Yükleyin:"
echo "   Local bilgisayarınızda:"
echo "   npm run build"
echo "   scp -r dist/* root@$(curl -s ifconfig.me):${WEB_ROOT}/"
echo ""
echo "3. SSL Sertifikası Alın (DNS yayıldıktan sonra):"
echo "   certbot --nginx -d ${DOMAIN} -d ${WWW_DOMAIN}"
echo ""
echo "4. Test Edin:"
echo "   http://${DOMAIN}"
echo ""
echo "========================================="
echo ""

# Test HTML sayfası oluştur
cat > ${WEB_ROOT}/index.html << 'TESTHTML'
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>omerdogan.dev - Yakında</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
        .container {
            text-align: center;
            padding: 2rem;
        }
        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            animation: fadeIn 1s ease-in;
        }
        p {
            font-size: 1.5rem;
            opacity: 0.9;
            animation: fadeIn 1.5s ease-in;
        }
        .status {
            margin-top: 2rem;
            padding: 1rem;
            background: rgba(255,255,255,0.1);
            border-radius: 10px;
            animation: fadeIn 2s ease-in;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 omerdogan.dev</h1>
        <p>Web siteniz hazırlanıyor...</p>
        <div class="status">
            <p>✓ Nginx çalışıyor</p>
            <p>✓ Domain yapılandırıldı</p>
            <p>⏳ Build dosyaları yüklenmeyi bekliyor</p>
        </div>
    </div>
</body>
</html>
TESTHTML

echo -e "${GREEN}✓ Test sayfası oluşturuldu${NC}"
echo -e "${CYAN}Tarayıcınızda http://$(curl -s ifconfig.me) adresini açarak test edebilirsiniz${NC}"
echo ""

