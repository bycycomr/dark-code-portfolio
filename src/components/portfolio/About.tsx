import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import kolnImage from "@/assets/omer-koln.jpg";

const facts = [
  { icon: GraduationCap, key: "fact1" },
  { icon: Briefcase, key: "fact2" },
  { icon: Sparkles, key: "fact3" },
];

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            <span className="text-muted-foreground font-mono text-xl">{t("about.number")}</span>{" "}
            {t("about.title")}
          </h2>

          <Card className="p-6 sm:p-8 glass border border-border shadow-xl">
            <div className="grid md:grid-cols-5 gap-8 mb-8 items-center">
              <div className="md:col-span-3 space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t("about.description")}
                </p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  {t("about.description2")}
                </p>
              </div>
              <div className="md:col-span-2 flex justify-center order-first md:order-last">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-2xl overflow-hidden border-2 border-primary/25 shadow-2xl hover:border-primary/50 transition-all duration-300 group">
                  <img
                    src={kolnImage}
                    alt="Ömer Doğan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: "center 25%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 pt-6 border-t border-border">
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/40 border border-border hover:border-primary/40 hover:bg-secondary/60 transition-all duration-200"
                >
                  <fact.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground leading-snug">{t(`about.${fact.key}`)}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
