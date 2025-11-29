import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

// Import logos
import nurolLogo from "@/logos/nurol-teknoloji.svg";
import intecroLogo from "@/logos/7-Intecro_dikey_beyaz_turuncu.jpg";
import serebellumLogo from "@/logos/serebellum-logo-beyaz.png";
import yazgitLogo from "@/logos/YAZGIT-Logo.png";
import t3Logo from "@/logos/T3.png";

const experiences = [
  {
    role: "Proje Çalışanı",
    company: "Nurol Teknoloji",
    companyLink: "https://www.nurolteknoloji.com/tr",
    logo: nurolLogo,
    period: "InnovatioNTogether Platform",
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
    period: "IT Support & System Administration",
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
    period: "Frontend Development & DevOps",
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
    period: "AI & Image Processing Community",
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
    period: "AI Education for Middle School",
    points: [
      "Ortaokul öğrencilerine 8 haftalık yapay zeka kursu verdim",
      "Temel yapay zeka kavramları, algoritmalar ve pratik uygulamalar tanıttım",
      "Öğrencilerin yapay zeka projeleri üzerinde çalışmalarını teşvik ettim",
    ],
  },
];

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            <span className="text-muted-foreground font-mono text-xl">{t("experience.number")}</span> {t("experience.title")}
          </h2>

          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/30 hidden sm:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-0 top-6 w-3 h-3 bg-primary rounded-full border-4 border-background hidden sm:block -translate-x-[5px]" />

                <Card className="p-6 glass border-2 border-primary/10 hover:border-primary transition-all duration-300 sm:ml-8">
                  <div className="flex gap-4 mb-4">
                    {/* Company Logo */}
                    <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <img 
                        src={exp.logo} 
                        alt={exp.company}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `<span class="text-2xl font-bold text-primary">${exp.company.charAt(0)}</span>`;
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                          <a 
                            href={exp.companyLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                          >
                            {exp.company}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
                          <Briefcase className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5 font-mono text-xs">▹</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
