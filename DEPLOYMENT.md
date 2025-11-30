# 🚀 omerdogan.dev Deployment Rehberi

## 📋 Önkoşullar
- ✅ VDS: Ubuntu 22.04.5 LTS (8 CPU, 16GB RAM)
- ✅ Node.js v18.20.8
- ✅ Domain: omerdogan.dev

---

## 🎯 Deployment Adımları

### 1️⃣ DNS Ayarları (Domain Sağlayıcınızda)

Domain sağlayıcınıza (GoDaddy, Namecheap, etc.) girin ve şu A kayıtlarını ekleyin:

```
Tip     Host    Değer              TTL
A       @       YOUR_VDS_IP        3600
A       www     YOUR_VDS_IP        3600
```

**YOUR_VDS_IP yerine VDS'nizin IP adresini yazın!**

DNS yayılması 5-30 dakika sürebilir. Kontrol için:
```bash
ping omerdogan.dev
```

---

### 2️⃣ VDS'de Nginx Kurulumu

VDS'ye SSH ile bağlanın:
```bash
ssh root@YOUR_VDS_IP
```

Deployment scriptini çalıştırın:
```bash
# Script dosyasını oluştur
nano deployment-commands.sh

# İçeriği yapıştır (deployment-commands.sh dosyasındaki tüm içeriği)

# Çalıştırılabilir yap
chmod +x deployment-commands.sh

# Çalıştır
./deployment-commands.sh
```

**VEYA** komutları tek tek çalıştırın:

```bash
# Nginx kur
sudo apt update
sudo apt install -y nginx

# Nginx başlat
sudo systemctl start nginx
sudo systemctl enable nginx

# Web dizini oluştur
sudo mkdir -p /var/www/omerdogan.dev
sudo chown -R $USER:$USER /var/www/omerdogan.dev
sudo chmod -R 755 /var/www/omerdogan.dev
```

---

### 3️⃣ Nginx Konfigürasyonu

```bash
# Config dosyası oluştur
sudo nano /etc/nginx/sites-available/omerdogan.dev
```

Şu içeriği yapıştırın:

```nginx
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
```

Kaydet ve çık (CTRL+X, Y, Enter).

```bash
# Symlink oluştur
sudo ln -sf /etc/nginx/sites-available/omerdogan.dev /etc/nginx/sites-enabled/

# Config'i test et
sudo nginx -t

# Nginx'i reload et
sudo systemctl reload nginx
```

---

### 4️⃣ Projeyi Local'de Build Et

Windows'ta (proje dizininde):

```powershell
# Bağımlılıkları yükle
npm install

# Production build
npm run build
```

Build tamamlandığında `dist/` klasörü oluşacak.

---

### 5️⃣ Build Dosyalarını VDS'ye Yükle

#### Yöntem A: SCP ile (Önerilen)

Windows'ta Git Bash veya PowerShell'de:

```bash
scp -r dist/* root@YOUR_VDS_IP:/var/www/omerdogan.dev/
```

#### Yöntem B: WinSCP / FileZilla

1. WinSCP'yi aç
2. Host: YOUR_VDS_IP
3. User: root
4. Password: VDS şifreniz
5. `dist/` içindeki **TÜM** dosyaları `/var/www/omerdogan.dev/` içine sürükle-bırak

---

### 6️⃣ SSL Sertifikası (HTTPS)

VDS'de:

```bash
# Certbot kur
sudo apt install -y certbot python3-certbot-nginx

# SSL sertifikası al (DNS ayarları yayıldıktan sonra!)
sudo certbot --nginx -d omerdogan.dev -d www.omerdogan.dev
```

Sertbot soruları:
- Email: sizin@email.com
- Terms: A (Agree)
- Share email: N (No)
- Redirect HTTP to HTTPS: 2 (Yes)

✅ Artık siteniz **https://omerdogan.dev** adresinde yayında!

---

## 🔄 Güncelleme (Deploy Script)

Her değişiklikten sonra:

**Local'de:**
```bash
npm run build
scp -r dist/* root@YOUR_VDS_IP:/var/www/omerdogan.dev/
```

**VEYA** otomatik script oluşturun:

`deploy.sh` oluşturun:
```bash
#!/bin/bash
npm run build && scp -r dist/* root@YOUR_VDS_IP:/var/www/omerdogan.dev/
```

Kullanım:
```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 🛠️ Sorun Giderme

### Site görünmüyor
```bash
# Nginx çalışıyor mu?
sudo systemctl status nginx

# Dosyalar doğru yerde mi?
ls -la /var/www/omerdogan.dev/

# Nginx log'larına bak
sudo tail -f /var/nginx/access.log
sudo tail -f /var/nginx/error.log
```

### SSL sertifikası alınamıyor
```bash
# DNS yayıldı mı kontrol et
nslookup omerdogan.dev

# Firewall'da 80 ve 443 açık mı?
sudo ufw status
```

### Değişiklikler görünmüyor
```bash
# Browser cache'ini temizle (CTRL+SHIFT+R)
# Veya VDS'de cache'i temizle:
sudo systemctl reload nginx
```

---

## 📊 Performans İyileştirmeleri

### 1. Nginx Caching
```bash
sudo nano /etc/nginx/nginx.conf
```

http bloğuna ekle:
```nginx
# Browser caching
map $sent_http_content_type $expires {
    default                    off;
    text/html                  epoch;
    text/css                   max;
    application/javascript     max;
    ~image/                    max;
}
```

### 2. HTTP/2 Etkinleştir
```bash
sudo nano /etc/nginx/sites-available/omerdogan.dev
```

`listen 443 ssl` satırına `http2` ekle:
```nginx
listen 443 ssl http2;
listen [::]:443 ssl http2;
```

---

## 🔐 Güvenlik

### Firewall Kontrolü
```bash
sudo ufw status
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

### Fail2ban (Brute Force Koruması)
```bash
sudo apt install -y fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

### Otomatik SSL Yenileme
Certbot otomatik yeniler, kontrol için:
```bash
sudo certbot renew --dry-run
```

---

## 📞 Yardım

Sorun yaşarsanız:
1. Nginx log'larını kontrol edin
2. DNS ayarlarını doğrulayın
3. Firewall kurallarını kontrol edin

**Test komutları:**
```bash
curl -I http://omerdogan.dev
curl -I https://omerdogan.dev
```

---

## ✅ Deployment Checklist

- [ ] DNS ayarları yapıldı (A kayıtları eklendi)
- [ ] VDS'de Nginx kuruldu
- [ ] Nginx config dosyası oluşturuldu
- [ ] Proje build edildi (`npm run build`)
- [ ] Build dosyaları VDS'ye yüklendi
- [ ] Nginx reload edildi
- [ ] SSL sertifikası alındı
- [ ] Site https://omerdogan.dev adresinde açılıyor
- [ ] Mobil responsive çalışıyor
- [ ] Tüm sayfalar/linkler çalışıyor

---

🎉 **Tebrikler! Siteniz yayında!**

