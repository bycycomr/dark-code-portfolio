import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const experiences = [
  {
    role: "Bilgisayar Mühendisliği",
    company: "Ankara Üniversitesi",
    period: "4/4 - Devam Ediyor",
    points: [
      "Yazılım geliştirme, algoritmalar, veri yapıları, yapay zeka, işletim sistemleri alanlarında kapsamlı eğitim",
      "Çeşitli projeler ve araştırmalar ile sektöre yönelik deneyim kazanımı",
    ],
    isEducation: true,
  },
  {
    role: "Proje Çalışanı",
    company: "Nurol Teknoloji",
    period: "InnovatioNTogether Platform",
    points: [
      "Nurol Holding'in açık inovasyon platformu InnovatioNTogether kapsamında aktif rol aldım",
      "Yenilikçi proje süreçlerinde Ar-Ge ve teknoloji geliştirme çalışmalarına katkı sağladım",
    ],
  },
  {
    role: "Bilgi İşlem Aday Mühendisi",
    company: "Intecro Robotics",
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
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
                      {exp.isEducation ? <GraduationCap className="h-4 w-4" /> : <Briefcase className="h-4 w-4" />}
                      {exp.period}
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
