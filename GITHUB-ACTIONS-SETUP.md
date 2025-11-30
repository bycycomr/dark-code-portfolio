# 🤖 GitHub Actions ile Otomatik Deployment

Bu dosya, her `git push` yaptığınızda sitenizin otomatik olarak VDS'ye deploy edilmesini sağlar.

## 🎯 Avantajları

- ✅ Her push'ta otomatik build ve deploy
- ✅ Manuel müdahale gerektirmez
- ✅ Hata durumunda bildirim
- ✅ Deployment geçmişi

---

## 🔧 Kurulum Adımları

### 1️⃣ SSH Key Oluştur (VDS'de)

VDS'ye SSH ile bağlan ve yeni bir key oluştur:

```bash
ssh root@VDS_IP_ADRESINIZ
cd ~/.ssh
ssh-keygen -t ed25519 -C "github-actions" -f github_actions_key
```

**ENTER'a basın (şifre yok).**

Şimdi key'leri görüntüleyin:

```bash
# Public key'i authorized_keys'e ekle
cat github_actions_key.pub >> ~/.ssh/authorized_keys

# Private key'i göster (bunu kopyalayacağız)
cat github_actions_key
```

**Private key'i kopyalayın** (-----BEGIN ... END----- dahil tümünü!)

---

### 2️⃣ GitHub Repository Secrets Ekle

GitHub repository'nize gidin:
1. **Settings** → **Secrets and variables** → **Actions**
2. **New repository secret** butonuna tıklayın

Şu 3 secret'ı ekleyin:

#### Secret 1: `VDS_SSH_KEY`
- **Name:** `VDS_SSH_KEY`
- **Value:** (Yukarıda kopyaladığınız private key'in tamamı)

#### Secret 2: `VDS_HOST`
- **Name:** `VDS_HOST`
- **Value:** `VDS_IP_ADRESINIZ` (örnek: 123.45.67.89)

#### Secret 3: `VDS_USER`
- **Name:** `VDS_USER`
- **Value:** `root`

---

### 3️⃣ Workflow Dosyasını Kontrol Et

`.github/workflows/deploy.yml` dosyası zaten oluşturuldu. İçeriğini kontrol edin:

```yaml
name: Deploy to VDS
on:
  push:
    branches:
      - main
```

Bu, `main` branch'e her push'ta çalışır. Başka bir branch kullanıyorsanız (örn: `master`), değiştirin.

---

### 4️⃣ Git Push Yap

```bash
git add .
git commit -m "Add GitHub Actions deployment"
git push origin main
```

**Actions** sekmesinde deployment'ın çalıştığını göreceksiniz!

---

## 📊 Deployment İzleme

GitHub'da:
1. Repository'ye git
2. **Actions** sekmesine tıkla
3. Son workflow run'ı göreceksin

**Başarılı deployment:** Yeşil ✅  
**Başarısız deployment:** Kırmızı ❌

---

## 🔄 Kullanım

Artık her kod değişikliğinde:

```bash
git add .
git commit -m "Site güncellendi"
git push
```

**GitHub Actions otomatik olarak:**
1. Kodu indirir
2. `npm install` çalıştırır
3. `npm run build` ile build eder
4. Build dosyalarını VDS'ye yükler
5. Nginx'i reload eder

---

## 🛠️ Sorun Giderme

### Deployment başarısız oluyor

**1. SSH Key hatası:**
```
Actions → Failed workflow → Log'lara bak
```

Hata: `Permission denied (publickey)`
- GitHub Secrets'ı kontrol et
- VDS'de `~/.ssh/authorized_keys` dosyasını kontrol et

**2. Build hatası:**
```
npm run build
```
komutu local'de çalışıyor mu? Önce local'de test edin.

**3. VDS path hatası:**
- VDS'de `/var/www/omerdogan.dev/` dizininin var olduğundan emin olun
- Dizin izinlerini kontrol edin: `ls -la /var/www/`

---

## 🔐 Güvenlik

- ✅ Private key'ler GitHub Secrets'ta şifrelenmiş
- ✅ SSH key'e şifre koymadık (automation için)
- ✅ Sadece GitHub Actions erişebilir

**ASLA private key'i repo'ya commitlemeyin!**

---

## 🎨 Manuel Deployment

GitHub Actions kullanmak istemezseniz:

Repository → **Actions** → **Deploy to VDS** → **Run workflow** → **Run workflow**

---

## 📝 Ek Özellikler

### Pull Request'lerde Test Et

`.github/workflows/deploy.yml` dosyasını düzenle:

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```

Şimdi PR açınca da test edilir (ama deploy olmaz).

### Slack/Discord Bildirimi

Deployment sonrası bildirim istiyorsanız:

```yaml
- name: 📢 Notify Slack
  if: success()
  uses: slackapi/slack-github-action@v1
  with:
    webhook-url: ${{ secrets.SLACK_WEBHOOK_URL }}
    payload: |
      {
        "text": "✅ omerdogan.dev deployed successfully!"
      }
```

---

## ✅ Kontrol Listesi

- [ ] VDS'de SSH key oluşturuldu
- [ ] GitHub Secrets eklendi (3 adet)
- [ ] `.github/workflows/deploy.yml` dosyası var
- [ ] Git push yapıldı
- [ ] Actions sekmesinde deployment çalıştı
- [ ] Site https://omerdogan.dev adresinde güncellendi

---

🎉 **Artık her push otomatik deploy olacak!**

