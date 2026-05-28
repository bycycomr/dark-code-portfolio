import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { certificates } from "@/data/certificates";

export const Certificates = () => {
  const { t } = useTranslation();

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            <span className="text-muted-foreground font-mono text-xl">{t("certificates.number")}</span>{" "}
            {t("certificates.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <Card className="p-5 h-full glass border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-secondary/60 border border-border flex items-center justify-center overflow-hidden flex-shrink-0">
                      <img
                        src={cert.logo}
                        alt={cert.issuer}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.parentElement!.innerHTML =
                            '<div class="flex items-center justify-center w-full h-full"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>';
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-base font-bold text-foreground leading-tight">{cert.name}</h3>
                        {cert.year && (
                          <Badge variant="outline" className="text-xs border-border text-muted-foreground font-mono shrink-0 flex items-center gap-1">
                            <Calendar className="h-2.5 w-2.5" />
                            {cert.year}
                          </Badge>
                        )}
                      </div>
                      <p className="text-primary text-sm font-medium mb-2">{cert.issuer}</p>
                      {cert.credential && (
                        <p className="text-xs text-muted-foreground font-mono truncate mb-3">
                          ID: {cert.credential}
                        </p>
                      )}
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-primary transition-colors"
                      >
                        <Award className="h-3 w-3" />
                        {t("certificates.view")}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
