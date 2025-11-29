import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const certificates = [
  {
    name: "Savunma Sanayii 401",
    issuer: "Savunma Sanayii Başkanlığı & YÖK",
    credential: "UN_0414772571526477610",
    link: "https://savunma401.ssa.gov.tr/",
    logo: "https://www.ssa.gov.tr/theme/developer/images/logo.png",
  },
  {
    name: "İstihbarata Karşı Koyma Eğitimi",
    issuer: "Savunma Sanayii Başkanlığı",
    credential: "",
    link: "https://www.ssa.gov.tr/",
    logo: "https://www.ssa.gov.tr/theme/developer/images/logo.png",
  },
];

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
            <span className="text-muted-foreground font-mono text-xl">{t("certificates.number")}</span> {t("certificates.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full glass border-2 border-primary/10 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-secondary/50 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <img 
                        src={cert.logo} 
                        alt={cert.issuer}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = '<svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>';
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-foreground mb-1">{cert.name}</h3>
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
                        className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
                      >
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

