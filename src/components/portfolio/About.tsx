import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { SectionHeading } from "./SectionHeading";

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
          <SectionHeading number={t("about.number")} title={t("about.title")} className="mb-10" />

          <Card className="p-6 sm:p-8 border-0 hud-card rounded-none">
            <div className="space-y-4 mb-8">
              <p className="text-base text-muted-foreground leading-relaxed">
                {t("about.description")}
              </p>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">
                {t("about.description2")}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 pt-6 border-t border-border">
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 hud-clip hud-edge bg-secondary/40 hover:bg-secondary/60 transition-all duration-200"
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
