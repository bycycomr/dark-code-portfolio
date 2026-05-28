import { motion } from "framer-motion";
import { Download, ArrowDown, MapPin, Code2, Circle } from "lucide-react";
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

  const cvFile = useMemo(
    () => (i18n.language === "tr" ? cvTurkce : cvEnglish),
    [i18n.language]
  );

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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,rgba(14,165,233,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_85%,rgba(6,182,212,0.06),transparent_55%)]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="text-sm font-mono text-muted-foreground"
              >
                <span className="text-primary">const</span> developer{" "}
                <span className="text-primary">=</span> &#123;
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              >
                <span className="gradient-text">{t("hero.name")}</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-lg sm:text-xl md:text-2xl font-semibold text-primary/90"
              >
                {t("hero.title")}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="text-base text-muted-foreground max-w-xl leading-relaxed"
              >
                {t("hero.description")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 }}
                className="text-sm font-mono text-muted-foreground"
              >
                &#125;;
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Button
                  size="lg"
                  className="group gradient-bg text-white hover:opacity-90 shadow-lg shadow-primary/20"
                  onClick={downloadCV}
                >
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  {t("hero.downloadCV")}
                </Button>
                <Button size="lg" variant="outline" onClick={scrollToProjects} className="group border-border hover:border-primary">
                  {t("hero.viewProjects")}
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Card className="p-5 glass border border-primary/20 shadow-xl hover:shadow-primary/10 transition-shadow">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <Avatar className="w-24 h-24 sm:w-28 sm:h-28 border-4 border-primary/20 ring-2 ring-primary/10">
                    <AvatarImage src={profileImage} alt="Ömer Doğan" className="object-cover" />
                  </Avatar>
                </div>

                <div className="text-center">
                  <p className="font-semibold text-foreground">{t("hero.name")}</p>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">{t("hero.title")}</p>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                  <span>{t("hero.location")}</span>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <Code2 className="h-3.5 w-3.5 text-primary" />
                    <span className="text-foreground font-semibold">{t("hero.mainStack")}</span>
                  </div>
                  <div className="pl-5 grid grid-cols-2 gap-x-2 gap-y-1">
                    {["Python", "Java/Spring Boot", "C#/.NET", "LangChain", "Docker", "Linux"].map((tech) => (
                      <span key={tech} className="text-xs font-mono text-primary/80">
                        · {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">{t("hero.status")}</span>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <Circle className="h-2 w-2 fill-emerald-400 text-emerald-400 animate-pulse" />
                    {t("hero.available")}
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
