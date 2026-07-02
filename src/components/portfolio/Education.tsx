import { motion } from "framer-motion";
import { GraduationCap, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { SectionHeading } from "./SectionHeading";

// Import logo
import ankaraUniLogo from "@/logos/ankarauni.png";

const educations = [
  {
    degree: "Bilgisayar Mühendisliği",
    school: "Ankara Üniversitesi",
    period: "Eylül 2022 – Haziran 2026 · GPA: 3.23",
    link: "https://www.ankara.edu.tr/",
    logo: ankaraUniLogo,
    points: [
      "Yazılım geliştirme, algoritmalar, veri yapıları, yapay zeka, işletim sistemleri alanlarında kapsamlı eğitim",
      "Çeşitli projeler ve araştırmalar ile sektöre yönelik deneyim kazanımı",
      "Sınav Sonuçları: ALES 70 (2026/1) · YÖKDİL (İngilizce) 71.25 (Mart 2026)",
    ],
  },
  {
    degree: "Lise Eğitimi",
    school: "Cemil Meriç Fen Lisesi",
    period: "2016 – 2020 · Ortalama: 89/100",
    link: "https://cemilmericfenlisesi.meb.k12.tr/",
    logo: null,
    points: [
      "Fen ve matematik odaklı güçlü akademik altyapı",
      "YKS (Sayısal): Türkiye 16.134'üncüsü (2022)",
    ],
  },
];

export const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <SectionHeading number={t("education.number")} title={t("education.title")} />

          <div className="space-y-6 relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent shadow-neon-soft hidden sm:block" />

            {educations.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative sm:pl-14"
              >
                <div className="absolute left-3 top-5 w-5 h-5 bg-background border-2 border-primary rounded-full shadow-neon-soft hidden sm:flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>

                <Card className="p-5 sm:p-6 border-0 hud-card rounded-none">
                  <div className="flex gap-4 mb-4">
                    <div className="w-11 h-11 rounded-none bg-white/5 border border-border flex items-center justify-center overflow-hidden flex-shrink-0">
                      {edu.logo ? (
                        <img
                          src={edu.logo}
                          alt={edu.school}
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">{edu.degree}</h3>
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-sm font-semibold hover:[text-shadow:var(--neon-text)] hover:underline inline-flex items-center gap-1 mt-0.5"
                      >
                        {edu.school}
                        <ExternalLink className="h-3 w-3 flex-shrink-0" />
                      </a>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono mt-1.5">
                        <GraduationCap className="h-3 w-3 flex-shrink-0" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-1.5 border-t border-border pt-3">
                    {edu.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                        <span className="text-accent mt-1 sm:mt-1.5 font-mono text-xs">▹</span>
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

