import { motion } from "framer-motion";
import { GraduationCap, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const educations = [
  {
    degree: "Bilgisayar Mühendisliği",
    school: "Ankara Üniversitesi",
    period: "4/4 - Devam Ediyor",
    link: "https://www.ankara.edu.tr/",
    points: [
      "Yazılım geliştirme, algoritmalar, veri yapıları, yapay zeka, işletim sistemleri alanlarında kapsamlı eğitim",
      "Çeşitli projeler ve araştırmalar ile sektöre yönelik deneyim kazanımı",
    ],
  },
  {
    degree: "Lise Eğitimi",
    school: "Cemil Meriç Fen Lisesi",
    period: "Ortalama: 89/100 | YKS Sayısal: 16.134",
    link: "https://cemilmericfenlisesi.meb.k12.tr/",
    points: [
      "Fen ve matematik odaklı güçlü akademik altyapı",
      "Bilimsel düşünme ve problem çözme becerileri",
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            <span className="text-muted-foreground font-mono text-xl">{t("education.number")}</span> {t("education.title")}
          </h2>

          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-accent/30 hidden sm:block" />

            {educations.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-0 top-6 w-3 h-3 bg-accent rounded-full border-4 border-background hidden sm:block -translate-x-[5px]" />

                <Card className="p-6 glass border-2 border-accent/10 hover:border-accent transition-all duration-300 sm:ml-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                      <a 
                        href={edu.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent font-semibold hover:underline inline-flex items-center gap-1"
                      >
                        {edu.school}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
                      <GraduationCap className="h-4 w-4" />
                      {edu.period}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {edu.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1.5 font-mono text-xs">▹</span>
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

