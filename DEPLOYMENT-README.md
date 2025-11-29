# 📦 omerdogan.dev Deployment Dosyaları

Bu dizinde omerdogan.dev sitesini VDS'ye deploy etmek için gereken tüm dosyalar bulunmaktadır.

---

## 📂 Dosya Yapısı

### 🚀 Temel Deployment Dosyaları

| Dosya | Açıklama |
|-------|----------|
| `QUICK-START.md` | ⚡ 3 adımda hızlı deployment rehberi |
| `DEPLOYMENT.md` | 📖 Detaylı deployment dokümantasyonu |
| `vds-setup.sh` | 🛠️ VDS'de çalıştırılacak otomatik kurulum scripti |
| `deployment-commands.sh` | 📝 Adım adım VDS kurulum komutları |

### 💻 Local Deployment Script'leri

| Dosya | Açıklama |
|-------|----------|
| `deploy.sh` | 🐧 Linux/Mac için deployment scripti |
| `deploy.ps1` | 🪟 Windows PowerShell deployment scripti |

### 🤖 Otomatik Deployment

| Dosya | Açıklama |
|-------|----------|
| `.github/workflows/deploy.yml` | GitHub Actions workflow dosyası |
| `GITHUB-ACTIONS-SETUP.md` | GitHub Actions kurulum rehberi |

---

## 🎯 Hangi Dosyayı Kullanmalıyım?

### İlk Defa Deploy Ediyorsanız:

1. **`QUICK-START.md`** - Hızlı başlangıç (3 adımda deployment)
2. **`vds-setup.sh`** - VDS'de tek komutla tam kurulum

### Detaylı Rehber İstiyorsanız:

- **`DEPLOYMENT.md`** - Her adımın detaylı açıklaması, sorun giderme

### Elle Deploy Etmek İstiyorsanız:

- **Windows:** `deploy.ps1` scriptini kullanın
- **Linux/Mac:** `deploy.sh` scriptini kullanın

### Otomatik Deploy İstiyorsanız:

- **`GITHUB-ACTIONS-SETUP.md`** - Her git push'ta otomatik deploy

---

## ⚡ Hızlı Kullanım

### Yöntem 1: Tek Script ile (ÖNERİLEN)

#### VDS'de:
```bash
# Script'i VDS'ye yükle
curl -o vds-setup.sh https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/vds-setup.sh

# Veya local'den kopyala
scp vds-setup.sh root@VDS_IP:/root/

# VDS'de çalıştır
chmod +x vds-setup.sh
./vds-setup.sh
```

#### Local'de:
```bash
# Build et ve yükle
npm run build
scp -r dist/* root@VDS_IP:/var/www/omerdogan.dev/
```

### Yöntem 2: Adım Adım

`QUICK-START.md` dosyasını açın ve 3 adımı takip edin.

### Yöntem 3: Otomatik (GitHub Actions)

`GITHUB-ACTIONS-SETUP.md` dosyasını açın ve kurulum yapın. Sonra:

```bash
git add .
git commit -m "Update"
git push
```

Her push otomatik deploy olur! 🎉

---

## 🔄 Güncelleme Workflow'u

Sitenizi her güncellemek istediğinizde:

### Manuel Yöntem:
```bash
npm run build
scp -r dist/* root@VDS_IP:/var/www/omerdogan.dev/
```

### PowerShell Script (Windows):
```powershell
.\deploy.ps1
```

### Bash Script (Linux/Mac):
```bash
./deploy.sh
```

### GitHub Actions (Otomatik):
```bash
git push
# Otomatik deploy olur
```

---

## 🛠️ VDS Gereksinimleri

✅ **Mevcut:**
- Ubuntu 22.04.5 LTS
- 8 CPU, 16GB RAM
- Node.js v18.20.8
- npm 10.8.2
- Docker
- UFW Firewall (80, 443 açık)

❌ **Kurulması Gereken:**
- Nginx (vds-setup.sh otomatik kurar)
- Certbot (SSL için, vds-setup.sh otomatik kurar)

---

## 📋 Deployment Checklist

Deployment yapmadan önce:

- [ ] VDS'de Nginx kuruldu
- [ ] DNS ayarları yapıldı (A kayıtları)
- [ ] `/var/www/omerdogan.dev/` dizini oluşturuldu
- [ ] Nginx config dosyası yapılandırıldı
- [ ] Firewall'da 80 ve 443 portları açık
- [ ] Local'de build testi yapıldı (`npm run build`)

Deployment sonrası:

- [ ] Site http://omerdogan.dev adresinde açılıyor
- [ ] SSL sertifikası alındı (https çalışıyor)
- [ ] Mobil responsive kontrol edildi
- [ ] Tüm linkler çalışıyor
- [ ] İletişim formu çalışıyor (varsa)

---

## 🐛 Sorun Giderme

### Site açılmıyor
```bash
# VDS'de kontrol et
sudo systemctl status nginx
ls -la /var/www/omerdogan.dev/
sudo nginx -t
```

### SSL alınamıyor
```bash
# DNS kontrolü
nslookup omerdogan.dev
ping omerdogan.dev

# Certbot tekrar dene
sudo certbot --nginx -d omerdogan.dev -d www.omerdogan.dev
```

### Build hatası
```bash
# Node modüllerini temizle
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Değişiklikler görünmüyor
```bash
# VDS'de cache temizle
sudo systemctl reload nginx

# Browser'da cache temizle: CTRL + SHIFT + R
```

---

## 📞 Destek Dosyaları

- **Hızlı Başlangıç:** `QUICK-START.md`
- **Detaylı Rehber:** `DEPLOYMENT.md`
- **GitHub Actions:** `GITHUB-ACTIONS-SETUP.md`
- **VDS Kurulum:** `vds-setup.sh`

---

## 🎨 Ek Özellikler

### Docker ile Deploy (Alternatif)

Eğer Docker kullanmak isterseniz:

```bash
# Dockerfile oluştur
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
EXPOSE 80
```

```bash
# Build ve run
docker build -t omerdogan-dev .
docker run -d -p 80:80 omerdogan-dev
```

### PM2 ile Node.js Server (Alternatif)

Static site için gerekli değil ama SSR isterseniz:

```bash
npm install -g pm2
pm2 start npm --name "omerdogan-dev" -- start
pm2 save
pm2 startup
```

---

## 🔐 Güvenlik Notları

- ✅ SSL sertifikası kullanın (Let's Encrypt ücretsiz)
- ✅ Firewall aktif tutun
- ✅ SSH key authentication kullanın (şifre yerine)
- ✅ Düzenli sistem güncellemesi yapın
- ✅ Nginx güvenlik header'larını ekleyin (vds-setup.sh'de var)

---

## 📊 Performans Optimizasyonları

Script'lerde otomatik olarak dahil:

- ✅ Gzip compression
- ✅ Static asset caching (1 yıl)
- ✅ Browser caching headers
- ✅ Nginx optimization

Ek olarak yapabilecekleriniz:

- Image optimization (next-gen formats: WebP, AVIF)
- CDN kullanımı (Cloudflare, etc.)
- HTTP/2 veya HTTP/3
- Lazy loading

---

## 📈 Monitoring (İleriye Dönük)

Production'da monitoring için:

### Uptime Monitoring
- UptimeRobot (ücretsiz)
- Pingdom
- StatusCake

### Analytics
- Google Analytics
- Plausible Analytics
- Umami

### Error Tracking
- Sentry
- Rollbar
- LogRocket

---

## 🎓 Öğrenme Kaynakları

- **Nginx:** https://nginx.org/en/docs/
- **Let's Encrypt:** https://letsencrypt.org/docs/
- **GitHub Actions:** https://docs.github.com/en/actions
- **React Deployment:** https://vitejs.dev/guide/static-deploy.html

---

## ✅ Tamamlandı!

Deployment dosyaları hazır. Başlamak için:

1. `QUICK-START.md` dosyasını açın
2. 3 adımı takip edin
3. Siteniz yayında! 🎉

**İyi çalışmalar!** 🚀

