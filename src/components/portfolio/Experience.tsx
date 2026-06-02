import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { experiences } from "@/data/experiences";
import { SectionHeading } from "./SectionHeading";

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
          <SectionHeading number={t("experience.number")} title={t("experience.title")} />

          <div className="space-y-6 relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent shadow-neon-soft hidden sm:block" />

            {experiences.map((exp, index) => (
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
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.parentElement!.innerHTML = `<span class="text-lg font-bold text-primary">${exp.company.charAt(0)}</span>`;
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                        {exp.role}
                      </h3>
                      <a
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-sm font-semibold hover:[text-shadow:var(--neon-text)] hover:underline inline-flex items-center gap-1 mt-0.5"
                      >
                        {exp.company}
                        <ExternalLink className="h-3 w-3 flex-shrink-0" />
                      </a>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
                        <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          {exp.subtitle}
                        </span>
                        <Badge variant="outline" className="text-xs rounded-none border-primary/30 text-muted-foreground font-mono h-5 px-2">
                          <Calendar className="h-2.5 w-2.5 mr-1" />
                          {exp.dateRange}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-1.5 mt-3 border-t border-border pt-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="text-primary mt-1 font-mono text-xs flex-shrink-0">▹</span>
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
