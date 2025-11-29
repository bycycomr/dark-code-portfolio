#!/bin/bash
# omerdogan.dev Deployment Script
# VDS: Ubuntu 22.04.5 LTS

echo "==================================="
echo "ADIM 1: Nginx Kurulumu"
echo "==================================="

# Nginx kur
sudo apt update
sudo apt install -y nginx

# Nginx başlat
sudo systemctl start nginx
sudo systemctl enable nginx

# Nginx durumunu kontrol et
sudo systemctl status nginx

echo ""
echo "==================================="
echo "ADIM 2: Web Dizini Oluştur"
echo "==================================="

# omerdogan.dev için dizin oluştur
sudo mkdir -p /var/www/omerdogan.dev
sudo chown -R $USER:$USER /var/www/omerdogan.dev
sudo chmod -R 755 /var/www/omerdogan.dev

echo ""
echo "==================================="
echo "ADIM 3: Nginx Config Dosyası"
echo "==================================="

# Nginx config oluştur
sudo tee /etc/nginx/sites-available/omerdogan.dev > /dev/null <<'EOF'
server {
    listen 80;
    listen [::]:80;
    
    server_name omerdogan.dev www.omerdogan.dev;
    
    root /var/www/omerdogan.dev;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
    
    # SPA routing (React Router için)
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
EOF

# Symlink oluştur
sudo ln -sf /etc/nginx/sites-available/omerdogan.dev /etc/nginx/sites-enabled/

# Default site'ı devre dışı bırak (opsiyonel)
# sudo rm /etc/nginx/sites-enabled/default

# Nginx config'i test et
sudo nginx -t

# Nginx'i reload et
sudo systemctl reload nginx

echo ""
echo "==================================="
echo "ADIM 4: SSL Sertifikası (Let's Encrypt)"
echo "==================================="

# Certbot kur
sudo apt install -y certbot python3-certbot-nginx

# SSL sertifikası al (domain DNS ayarları yapıldıktan sonra)
echo "DNS ayarlarını yaptıktan sonra şu komutu çalıştırın:"
echo "sudo certbot --nginx -d omerdogan.dev -d www.omerdogan.dev"

echo ""
echo "==================================="
echo "Nginx kurulumu tamamlandı!"
echo "==================================="

