import { motion } from "framer-motion";
import { Download, ArrowDown, MapPin, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import cvEnglish from "@/CV/Omer-Dogan-CV-English.pdf";
import cvTurkce from "@/CV/Omer-Dogan-CV-Turkce.pdf";
import profileImage from "@/assets/omer.png";

export const Hero = () => {
  const { t, i18n } = useTranslation();

  const cvFile = useMemo(() => {
    return i18n.language === "tr" ? cvTurkce : cvEnglish;
  }, [i18n.language]);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = `Omer-Dogan-CV-${i18n.language === "tr" ? "Turkce" : "English"}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-mono text-muted-foreground"
              >
                <span className="text-primary">const</span> developer <span className="text-primary">=</span> &#123;
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                <span className="gradient-text">{t("hero.name")}</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary"
              >
                {t("hero.title")}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-muted-foreground max-w-2xl"
              >
                {t("hero.description")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="text-sm font-mono text-muted-foreground"
              >
                &#125;;
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Button size="lg" className="group gradient-bg text-white hover:opacity-90" onClick={downloadCV}>
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  {t("hero.downloadCV")}
                </Button>
                <Button size="lg" variant="outline" onClick={scrollToProjects} className="group">
                  {t("hero.viewProjects")}
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Card className="p-6 glass border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-4">
                {/* Profile Image */}
                <div className="flex justify-center mb-4">
                  <Avatar className="w-32 h-32 border-4 border-primary/30">
                    <AvatarImage src={profileImage} alt="Ömer Doğan" className="object-cover" />
                  </Avatar>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{t("hero.location")}</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-mono">
                    <Code2 className="h-4 w-4 text-primary" />
                    <span className="text-foreground font-semibold">{t("hero.mainStack")}</span>
                  </div>
                  <div className="pl-6 space-y-1">
                    <p className="text-sm font-mono text-primary">Python · JavaScript</p>
                    <p className="text-sm font-mono text-primary">React · Spring Boot</p>
                    <p className="text-sm font-mono text-primary">AWS · Linux</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{t("hero.experience")}</span>
                    <span className="text-lg font-bold font-mono text-primary">3+ {t("hero.years")}</span>
                  </div>
                </div>

                <div className="pt-2 text-xs font-mono text-muted-foreground bg-secondary rounded px-3 py-2">
                  <span className="text-primary">{t("hero.status")}</span> <span className="text-accent">{t("hero.available")}</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
