import nurolLogo from "@/logos/nurol-teknoloji.svg";
import intecroLogo from "@/logos/7-Intecro_dikey_beyaz_turuncu.jpg";
import serebellumLogo from "@/logos/serebellum-logo-beyaz.png";
import yazgitLogo from "@/logos/YAZGIT-Logo.png";
import t3Logo from "@/logos/T3.png";

export interface Experience {
  role: string;
  company: string;
  companyLink: string;
  logo: string;
  subtitle: string;
  dateRange: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    role: "Software Engineer — Mobile & AI",
    company: "Reading Health",
    companyLink: "https://readinghealth.com.tr/",
    logo: "",
    subtitle: "Flutter · .NET · AI Research",
    dateRange: "Mayıs 2026 – Devam Ediyor",
    points: [
      "Gebelik takip mobil uygulaması geliştirme süreçlerinde aktif rol almaktayım",
      "Teratojenite risk tahminine yönelik yapay zeka modellerinin araştırılması alanında Ar-Ge faaliyetleri yürütmekteyim",
    ],
  },
  {
    role: "Ar-Ge Proje Çalışanı",
    company: "Nurol Teknoloji",
    companyLink: "https://www.nurolteknoloji.com/tr",
    logo: nurolLogo,
    subtitle: "AI Backend – NL2SQL (InnovatioNTogether)",
    dateRange: "Ekim 2025 – Nisan 2026",
    points: [
      "InnovatioNTogether platformunda NL2SQL projesinin AI Backend sorumluluğunu üstlendim; teknik fizibilite hazırladım, mimari tasarımını kurguladım ve yapay zeka arka uç sistemlerini uçtan uca geliştirdim",
      "Doğal dil girdilerini yüksek doğrulukla SQL sorgularına dönüştüren sistemi geliştirdim ve bağlam kazandırmak için RAG mimarisini entegre ettim",
      "LLM'lerin karar alma süreçlerini otonom yönetmek için LangGraph, hızlı servis haberleşmesi için FastAPI altyapısını kurdum",
      "İnovasyon süreçlerini takip ederek literatür taramaları yürüttüm, teknik gereksinimleri projelendirip dokümante ettim",
    ],
  },
  {
    role: "Aday Mühendis (Bilgi Teknolojileri & Sistem)",
    company: "Intecro Robotics",
    companyLink: "https://intecro.com.tr/tr/",
    logo: intecroLogo,
    subtitle: "IT Infrastructure & System Administration",
    dateRange: "Nisan 2025 – Ekim 2025",
    points: [
      "Linux/Windows sunucu ortamlarının yönetimini sağlayarak geliştirme süreçlerinin kesintisiz devamlılığını (High Availability) optimize ettim",
      "Kritik verilerin korunması için Bash/Python script'leri yazarak Backup/Recovery süreçlerini tam otomatize hale getirdim",
      "Active Directory üzerinde RBAC ve GPO yapılandırarak kurumsal veri güvenliği ve geliştirici erişim yetkilerini standartlaştırdım",
      "Sistem mimarisi ve bakım prosedürleri için mühendislik standartlarına uygun teknik dokümantasyonlar oluşturdum",
    ],
  },
  {
    role: "Yazılım Geliştirme Stajyeri",
    company: "Serebellum Bilişim Danışmanlık",
    companyLink: "https://serebellum.com/",
    logo: serebellumLogo,
    subtitle: "Frontend Development & DevOps",
    dateRange: "Temmuz 2024 – Ağustos 2024",
    points: [
      "React kullanılarak web tabanlı uygulamaların ön yüz geliştirmeleri yapıldı ve Backend servisleriyle entegrasyon sağlandı",
      "Versiyon kontrol sistemleri (Git) kullanılarak ekip içi kod geliştirme standartlarına uyum sağlandı",
      "DevOps kültürü kapsamında Linux sunucu komutları ve temel deploy süreçleri üzerine pratik yapıldı",
    ],
  },
  {
    role: "Başkan Yardımcısı",
    company: "Ankara Üniversitesi YAZGİT",
    companyLink: "https://www.yazgit.com.tr/",
    logo: yazgitLogo,
    subtitle: "AI & Data Science Community",
    dateRange: "Nisan 2023 – Ağustos 2024",
    points: [
      "250+ öğrenciye Python ile Programlama ve Veri Bilimi giriş eğitimleri düzenlendi, müfredat ve ders içerikleri bizzat oluşturuldu",
      "Topluluğun dijital platformu yazgit.com'un geliştirilmesi ve yönetimi üstlenildi",
      "Sektördeki Yapay Zeka uzmanlarıyla birlikte çeşitli etkinlikler düzenlendi",
    ],
  },
  {
    role: "Yapay Zeka Eğitmeni",
    company: "T3 Vakfı Deneyap Teknoloji Atölyeleri",
    companyLink: "https://www.deneyap.org/tr/",
    logo: t3Logo,
    subtitle: "AI Education for Middle School",
    dateRange: "Ekim 2023 – Ocak 2024",
    points: [
      "Ortaokul öğrencilerine Makine Öğrenmesi temelleri, algoritma mantığı ve Python uygulamaları üzerine 8 haftalık teknik eğitim verildi",
      "Öğrencilerle birlikte geliştirilen yapay zeka projelerinde kod incelemesi ve teknik mentorluk yapıldı",
    ],
  },
];
