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
    role: "Proje Çalışanı",
    company: "Nurol Teknoloji",
    companyLink: "https://www.nurolteknoloji.com/tr",
    logo: nurolLogo,
    subtitle: "InnovatioNTogether Platform",
    dateRange: "2024 – Devam Ediyor",
    points: [
      "Nurol Holding'in açık inovasyon platformu InnovatioNTogether kapsamında aktif rol aldım",
      "Yenilikçi proje süreçlerinde Ar-Ge ve teknoloji geliştirme çalışmalarına katkı sağladım",
    ],
  },
  {
    role: "Bilgi İşlem Aday Mühendisi",
    company: "Intecro Robotics",
    companyLink: "https://intecro.com.tr/tr/",
    logo: intecroLogo,
    subtitle: "IT Support & System Administration",
    dateRange: "2023 – 2024",
    points: [
      "PC ve çevre birimlerinin kurulumu, donanımsal arızaların tespiti ve giderilmesi",
      "Windows ve Linux işletim sistemlerinin kurulumu, yapılandırılması ve bakımı",
      "Ağ topolojisi, IP yapılandırmaları ve temel ağ sorunlarının çözümü",
      "Active Directory ortamında kullanıcı ve grup yönetimi, yetkilendirme işlemleri",
      "Uzaktan teknik destek sağlama ve tüm işlemlerin dokümantasyonu",
    ],
  },
  {
    role: "Front-end & DevOps Stajyeri",
    company: "Serebellum Bilişim Danışmanlık",
    companyLink: "https://serebellum.com/",
    logo: serebellumLogo,
    subtitle: "Frontend Development & DevOps",
    dateRange: "2023",
    points: [
      "React ile front-end uygulamaları geliştirdim ve kullanıcı odaklı arayüzler tasarladım",
      "DevOps süreçleri ile Linux sistem yönetimi konusunda pratik deneyim kazandım",
      "Otomasyon ve süreç iyileştirmeleri gerçekleştirdim",
    ],
  },
  {
    role: "Başkan Yardımcısı",
    company: "Ankara Üniversitesi YAZGİT",
    companyLink: "https://www.yazgit.com.tr/",
    logo: yazgitLogo,
    subtitle: "AI & Image Processing Community",
    dateRange: "2022 – 2024",
    points: [
      "Sektörel etkinlikler, teknik geziler ve konferanslar organize ettim",
      "Yazılım geliştirme ve yapay zeka alanlarında eğitim programları hazırladım",
      "250'den fazla öğrenciye Python programlama eğitimi verdim",
      "yazgit.com kurarak bilgi paylaşımını artırdım",
    ],
  },
  {
    role: "Yapay Zeka Eğitmeni",
    company: "T3 Vakfı Deneyap Teknoloji Atölyeleri",
    companyLink: "https://www.deneyap.org/tr/",
    logo: t3Logo,
    subtitle: "AI Education for Middle School",
    dateRange: "2022",
    points: [
      "Ortaokul öğrencilerine 8 haftalık yapay zeka kursu verdim",
      "Temel yapay zeka kavramları, algoritmalar ve pratik uygulamalar tanıttım",
      "Öğrencilerin yapay zeka projeleri üzerinde çalışmalarını teşvik ettim",
    ],
  },
];
