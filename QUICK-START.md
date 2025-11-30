# ⚡ Hızlı Başlangıç - omerdogan.dev Deployment

## 🚀 3 Adımda Yayına Alma

### 1️⃣ VDS'de Nginx Kur ve Yapılandır

VDS'ye SSH ile bağlan:
```bash
ssh root@VDS_IP_ADRESINIZ
```

Şu komutları çalıştır:
```bash
# Nginx kur
sudo apt update && sudo apt install -y nginx

# Web dizini oluştur
sudo mkdir -p /var/www/omerdogan.dev
sudo chown -R $USER:$USER /var/www/omerdogan.dev

# Nginx config oluştur
sudo cat > /etc/nginx/sites-available/omerdogan.dev << 'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name omerdogan.dev www.omerdogan.dev;
    root /var/www/omerdogan.dev;
    index index.html;
    
    gzip on;
    gzip_types text/plain text/css application/javascript application/json;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
EOF

# Config'i aktif et
sudo ln -sf /etc/nginx/sites-available/omerdogan.dev /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 2️⃣ DNS Ayarları

Domain yönetim panelinde (GoDaddy, Namecheap vs.):

```
A Record    @      VDS_IP_ADRESINIZ
A Record    www    VDS_IP_ADRESINIZ
```

**DNS yayılması için 5-30 dakika bekle!**

### 3️⃣ Projeyi Build Et ve Yükle

Local bilgisayarında:

```powershell
# Build et
npm run build

# VDS'ye yükle (Git Bash veya PowerShell)
scp -r dist/* root@VDS_IP_ADRESINIZ:/var/www/omerdogan.dev/
```

✅ **Bitti!** http://omerdogan.dev adresinden kontrol et

---

## 🔐 HTTPS için SSL (4. Adım - Opsiyonel ama Önerilen)

VDS'de:
```bash
# Certbot kur
sudo apt install -y certbot python3-certbot-nginx

# SSL sertifikası al (DNS yayıldıktan sonra!)
sudo certbot --nginx -d omerdogan.dev -d www.omerdogan.dev
```

✅ **Artık https://omerdogan.dev çalışıyor!**

---

## 🔄 Güncelleme (Her değişiklikte)

```bash
npm run build
scp -r dist/* root@VDS_IP_ADRESINIZ:/var/www/omerdogan.dev/
```

---

## 🛠️ Sorun mu var?

**Site açılmıyor:**
```bash
# VDS'de kontrol et
sudo systemctl status nginx
ls -la /var/www/omerdogan.dev/
```

**SSL alınamıyor:**
```bash
# DNS yayıldı mı?
ping omerdogan.dev
```

**Değişiklikler görünmüyor:**
- Browser cache temizle: CTRL + SHIFT + R

---

📖 **Detaylı rehber için:** `DEPLOYMENT.md` dosyasına bak

