export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "linux-ile-devopsa-ilk-adim",
    title: "Linux ile DevOps'a İlk Adım: Komut Satırı Rehberi",
    excerpt:
      "Serebellum stajımda Linux ile tanışmam, komut satırını sevmem ve DevOps dünyasına açılan kapıdan geçişim. Başlangıç için bilmeniz gereken temel komutlar ve pratik ipuçları.",
    date: "2025-05-15",
    tags: ["Linux", "DevOps", "Komut Satırı", "Staj"],
    readTime: 6,
    content: `
<p>Bilgisayar mühendisliği öğrencisi olarak Windows'ta büyüdüm. Oyunlarımı, derslerimi, her şeyimi Windows'ta yaptım. Ta ki Serebellum'daki stajıma başlayana kadar.</p>

<p>Stajın ilk haftasında ekip lideri bana bir görev verdi: "Şu sunucuya bağlan ve servisi ayağa kaldır." Elime bir IP adresi ve bir SSH anahtarı tutuşturdu. Ve ilk kez gerçek bir Linux sunucusuna bağlandım. Terminal penceresi açıldı, imleç yanıp söndü. Ne yapacağımı tam bilmiyordum ama bu anın beni değiştireceğini hissettim.</p>

<h2>Neden Linux?</h2>

<p>DevOps, cloud ve backend dünyasının büyük çoğunluğu Linux üzerine kurulu. AWS EC2 instance'larınız, Docker container'larınız, CI/CD pipeline'larınızın çalıştığı sunucular — büyük ihtimalle bir Linux dağıtımı çalıştırıyor. Bu yüzden Linux'u öğrenmek bir seçenek değil, bir zorunluluk.</p>

<p>Ama asıl güzel olan şu: Linux'u öğrenince sistemi gerçekten anlamaya başlıyorsunuz. Bir dosyanın izinleri, süreçlerin nasıl çalıştığı, ağın nasıl yapılandığı — bunlar artık soyut kavramlar değil, somut komutlar.</p>

<h2>Mutlaka Bilmeniz Gereken Temel Komutlar</h2>

<h3>Dosya Sistemi Gezintisi</h3>

<pre><code># Bulunduğunuz dizini göster
pwd

# Dizin içeriğini listele (detaylı + gizli dosyalar)
ls -la

# Dizin değiştir
cd /var/log

# Üst dizine git
cd ..

# Home dizinine git
cd ~</code></pre>

<h3>Dosya İşlemleri</h3>

<pre><code># Dosya içeriğini oku
cat dosya.txt

# Büyük dosyalarda sayfalı okuma
less dosya.log

# Son 100 satırı takip et (canlı log izleme için)
tail -f -n 100 /var/log/syslog

# Dosya veya dizin kopyala
cp kaynak.txt hedef.txt

# Taşı veya yeniden adlandır
mv eski_ad.txt yeni_ad.txt

# Sil (dikkatli kullanın!)
rm dosya.txt
rm -rf klasor/   # Klasör ve içeriğini siler — GERİ ALINAMAZ</code></pre>

<h3>Süreç Yönetimi</h3>

<pre><code># Çalışan süreçleri görüntüle
ps aux

# Süreç ağacını göster
pstop

# Anlık sistem kaynakları
htop

# Bir süreci sonlandır
kill -9 <PID>

# İsme göre bul ve sonlandır
pkill nginx</code></pre>

<h3>Servis Yönetimi (systemd)</h3>

<pre><code># Servis durumunu kontrol et
systemctl status nginx

# Servisi başlat / durdur / yeniden başlat
systemctl start nginx
systemctl stop nginx
systemctl restart nginx

# Sistem başlangıcında otomatik başlat
systemctl enable nginx</code></pre>

<h2>Dosya İzinleri: Kafanızı Karıştırmayın</h2>

<p>Linux'ta her dosyanın izinleri 3 gruba ayrılır: sahip (owner), grup (group), diğerleri (others). Her grup için okuma (r=4), yazma (w=2), çalıştırma (x=1) izinleri vardır.</p>

<pre><code># İzinleri değiştir
chmod 755 script.sh   # rwxr-xr-x

# Sahipliği değiştir
chown kullanici:grup dosya.txt

# Dosyayı çalıştırılabilir yap
chmod +x script.sh</code></pre>

<h2>SSH ile Uzak Sunucuya Bağlanmak</h2>

<pre><code># Şifre ile bağlan
ssh kullanici@192.168.1.100

# SSH anahtarı ile bağlan
ssh -i ~/.ssh/anahtar.pem kullanici@sunucu-ip

# Uzak sunucuya dosya kopyala
scp dosya.txt kullanici@sunucu:/hedef/yol/

# Yerel port yönlendirme
ssh -L 8080:localhost:3000 kullanici@sunucu</code></pre>

<h2>Stajdan Öğrendiklerim</h2>

<p>Serebellum'da geçirdiğim süre boyunca en çok öğrendiğim şey, Linux'un bir araç değil bir düşünce biçimi olduğuydu. Her şeyin bir dosya olduğu, her işlemin birleştirilebileceği, sistemin tamamen şeffaf olduğu bir dünya.</p>

<p>Bugün bir sorunla karşılaştığımda ilk refleksim terminal açmak oluyor. Log dosyasına bakmak, süreç durumunu kontrol etmek, ağ bağlantısını test etmek — bunlar artık doğal hareketler.</p>

<p>Eğer yazılım kariyerinizde ilerlemek istiyorsanız, Linux öğrenmek için daha iyi bir zaman yok. Bir sanal makine kurun, bir sunucu kiralayın ya da WSL2 ile Windows'ta deneyin. Komut satırı korkutucu görünebilir ama bir kez alıştınız mı, bir daha bırakmak istemeyeceksiniz.</p>
    `,
  },
  {
    id: 2,
    slug: "react-proje-gelistirirken-ogrendiklerim",
    title: "React ile Proje Geliştirirken Öğrendiğim 5 Önemli Ders",
    excerpt:
      "İlk React projemden bu yana yaptığım hataları, sürpriz keşifleri ve 'keşke birisi bana bunu anlatsaydı' dediğim 5 dersi paylaşıyorum.",
    date: "2025-04-28",
    tags: ["React", "TypeScript", "Frontend", "Web Development"],
    readTime: 7,
    content: `
<p>React öğrenmeye başladığımda YouTube tutorial'ları ve resmi dokümantasyon arasında kayboldum. Her şey mantıklı görünüyordu — ta ki kendi projemi yazmaya başlayana kadar. O zaman anladım ki tutorial'larda öğretilmeyen bir sürü "gerçek dünya" detayı var.</p>

<p>İşte sizi de benzer hatalardan kurtarabilecek 5 ders:</p>

<h2>1. State'i Mümkün Olduğunca Aşağıda Tutun</h2>

<p>Başlangıçta her şeyi en üst bileşene koyuyordum. "Buradan her yere ulaşabilirim" mantığıyla. Ama bu yol prop drilling cehennemine çıkıyor.</p>

<pre><code>// Kötü: Her şeyi en üstte tut
const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  // 5 bileşen aşağıya kadar prop geç...
  return <Layout modalOpen={modalOpen} setModalOpen={setModalOpen} />;
};

// İyi: State'i ihtiyaç duyduğu yere koy
const ProductCard = () => {
  const [modalOpen, setModalOpen] = useState(false); // Burada yeterli
  return (
    <>
      <button onClick={() => setModalOpen(true)}>Detay</button>
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </>
  );
};</code></pre>

<p>Kural basit: Bir state'e kaç bileşen ihtiyaç duyuyorsa, o bileşenlerin en yakın ortak atası neredeyse orada tutun.</p>

<h2>2. useEffect Bağımlılık Dizisi Bir Yalan Değil</h2>

<p>ESLint sizi uyarıyor ama siz "zaten çalışıyor" diye görmezden geliyorsunuz. Bu beni en çok uğraştıran hatalardan biri oldu.</p>

<pre><code>// Sorunlu: Bağımlılık eksik, stale closure riski
useEffect(() => {
  fetchUser(userId); // userId değişirse çalışmaz
}, []); // ESLint burayı kırmızıya boyar — haklı olarak

// Doğru:
useEffect(() => {
  fetchUser(userId);
}, [userId]); // userId değişince yeniden çalışır</code></pre>

<p>Bağımlılık dizisi React'in "bu efekti ne zaman çalıştır?" sorusuna verdiğiniz cevaptır. Boş bırakırsanız "hiç çalıştırma" demiyorsunuz, "sadece mount'ta çalıştır" diyorsunuz — ve bu çoğu zaman istediğiniz şey değil.</p>

<h2>3. TypeScript ile Başlamak Sonradan Eklemekten Kolaydır</h2>

<p>İlk projelerimde "TypeScript sonra eklerim" dedim. Sonra eklemek zorunda kaldığımda 200 satır <code>any</code> ile boğuştum.</p>

<pre><code>// Arayüzleri hemen tanımlayın
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

interface ApiResponse<T> {
  data: T;
  error: string | null;
  loading: boolean;
}

// Generics ile esnek ama tip-güvenli fonksiyonlar
async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  // ...
}</code></pre>

<p>TypeScript başta ekstra iş gibi görünür ama bir bileşene yanlış prop geçirdiğinizde ya da bir API response'unu yanlış kullandığınızda sizi runtime hatalarından kurtarır. "Compile time'da patlasın, production'da değil."</p>

<h2>4. Component'ları Küçük ve Tek Sorumlu Tutun</h2>

<p>300 satırlık bir bileşen gördüğünüzde büyük ihtimalle yanlış bir şey oluyor. Ben de buna düşüyordum — "form mantığını, validasyonu, API çağrısını ve UI'ı hep buraya koyayım" diye.</p>

<pre><code>// Kötü: Her şeyi yapan dev bileşen
const LoginPage = () => {
  // 50 satır state
  // 100 satır validasyon
  // 80 satır API çağrıları
  // 200 satır JSX
};

// İyi: Sorumlulukları ayır
const LoginPage = () => {
  const { formData, errors, handleChange } = useLoginForm();
  const { login, loading } = useAuth();

  return <LoginForm formData={formData} errors={errors}
                    onChange={handleChange} onSubmit={login}
                    loading={loading} />;
};</code></pre>

<p>Custom hook'lar mantığı bileşenden ayırmak için mükemmel. Hem test edilebilirliği artırır, hem de bileşenlerinizi okunabilir kılar.</p>

<h2>5. Erken Optimizasyon Zamanınızı Çalar</h2>

<p>Her komponenti <code>memo</code> ile sarmak, her callback'i <code>useCallback</code>'e koymak, her değeri <code>useMemo</code>'ya vermek — bunların hepsi gereksiz. React zaten hızlı.</p>

<pre><code>// Çoğu durumda GEREKSİZ:
const Button = React.memo(({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
));

// Gerçekten ağır bir hesaplama varsa kullanın:
const sortedData = useMemo(() =>
  hugeArray.sort((a, b) => b.score - a.score),
  [hugeArray] // 10.000+ elemanlı dizi için mantıklı
);</code></pre>

<p>React DevTools Profiler'ı açın, gerçekten yavaş olan yeri bulun, <strong>sonra</strong> optimize edin. Önce çalışın, sonra hız verin.</p>

<h2>Son Söz</h2>

<p>Bu dersleri öğrenmek için ekstra bir kurs almadım — yanlış yaptım, hata verdim, düzelttim. Kod yazmak öyle bir şey: Her proje yeni bir ders. Önemli olan hataları tekrar etmemek ve öğrendiklerinizi paylaşmak.</p>

<p>Umarım bu yazı size birkaç saatlik hata ayıklama süresini kazandırır.</p>
    `,
  },
  {
    id: 3,
    slug: "ortaokul-ogrencilerine-yapay-zeka-ogretmek",
    title: "Ortaokul Öğrencilerine Yapay Zeka Öğretmek: Deneyap Deneyimim",
    excerpt:
      "T3 Vakfı Deneyap Teknoloji Atölyeleri kapsamında ortaokul öğrencilerine 8 haftalık yapay zeka eğitimi verdim. İşte bu süreçte öğrendiklerim ve en çok neye şaşırdığım.",
    date: "2025-03-10",
    tags: ["Yapay Zeka", "Eğitim", "Deneyap", "T3 Vakfı"],
    readTime: 5,
    content: `
<p>Üniversitenin ilk yıllarında T3 Vakfı'nın Deneyap Teknoloji Atölyeleri programında yapay zeka eğitmeni oldum. Benden beklenen şey basitti: Ortaokul öğrencilerine 8 hafta boyunca yapay zekayı öğretmek.</p>

<p>Basit değildi.</p>

<h2>İlk Dersin Gerçekliği</h2>

<p>İlk derse hazırlanırken makine öğrenmesi algoritmalarını, sinir ağı mimarilerini, gradient descent'i anlatan bir ders planı hazırladım. Tahta başına geçtim, "Bugün yapay zekayı öğreneceğiz" dedim.</p>

<p>Bir öğrenci el kaldırdı: "Hocam, yapay zeka robot mu?"</p>

<p>O an planımın işe yaramayacağını anladım.</p>

<h2>Soyuttan Somuta: Kavramları Yeniden Düşünmek</h2>

<p>Yapay zeka eğitimcilerine verebileceğim en iyi öneri: Her kavramı öğrencinin hayatından bir örnekle açıklayın.</p>

<p><strong>Makine öğrenmesi nedir?</strong> Sınıfta bir öğrenciye 1000 kedi ve köpek fotoğrafı gösterdiğinizde, o öğrenci sonunda yeni bir fotoğrafa bakıp "bu kedi" diyebilir hale gelir. Bilgisayar da aynı şeyi yapıyor — çok fazla örnek görüyor ve kalıpları öğreniyor.</p>

<p><strong>Karar ağacı nedir?</strong> "Ormanda kaybolsam ne yaparım?" sorusuyla başladım. "Güneş görünüyor mu? Evet → doğuya git. Hayır → Nehir sesi duyuyor musun?" Böylece karar ağacını gündelik hayattan bir örnekle anlattım.</p>

<p><strong>Overfitting nedir?</strong> "Bir arkadaşınız sınavda sadece geçen senenin sorularını ezberledi ve asıl konuyu anlamadı. Sınavda yeni sorular gelince başarısız oldu. Modelin de aynı problemi yaşayabileceğini" anlattım.</p>

<h2>En Şaşırdığım An</h2>

<p>4. hafta öğrencilerden biri sınıfa geldi ve elinde küçük bir defter vardı. "Hocam dün evde denedim" dedi. Scratch üzerinde basit bir görüntü sınıflandırıcı yapmıştı. Kendisi.</p>

<p>Ben üniversitede olduğum için hâlâ birçok şeyi öğrenmeye çalışırken, 7. sınıf öğrencisi evde kendi kendine deney yapıyordu.</p>

<p>O gün anladım ki merak, yaşla ölçülmüyor.</p>

<h2>Eğitmenin Öğrendikleri</h2>

<p>8 hafta boyunca öğrencilere yapay zeka öğretirken ben de bir şeyler öğrendim:</p>

<ul>
  <li><strong>Açıklayamıyorsanız anlamamışsınızdır.</strong> Bir kavramı 12 yaşındaki birine açıklamak zorunda kalmak, o kavramı gerçekten anlayıp anlamadığınızı test eder.</li>
  <li><strong>Merak her şeyin önündedir.</strong> Teorik bilgi vermekten çok merak uyandırmaya çalışın. Bir çocuğun aklına düşen "peki neden böyle?" sorusu, yıllar sonra kariyerini şekillendirebilir.</li>
  <li><strong>Hata yapmak öğrenmenin parçasıdır.</strong> Modelin yanlış tahmin etmesi kötü bir şey değil. "Neden yanlış yaptı?" sorusu, doğru tahminden daha öğretici.</li>
</ul>

<h2>Deneyap Hakkında</h2>

<p>T3 Vakfı'nın Deneyap programı, Türkiye genelinde binlerce öğrenciye teknoloji eğitimi veriyor. Gönüllü eğitmenler olarak biz üniversite öğrencileri de bu sürecin parçasıyız. Hem öğretiyor, hem öğreniyoruz.</p>

<p>Eğer yazılım veya mühendislik okuyan bir üniversite öğrencisiyseniz ve bu tür programlara katılma fırsatınız varsa, kesinlikle değerlendirin. CV'nize bir satır eklemenin çok ötesinde bir deneyim.</p>

<p>Çünkü bir çocuğun gözlerinde "anladım" ışığını görmek — buna değer.</p>
    `,
  },
];
