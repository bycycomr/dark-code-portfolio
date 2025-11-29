import { motion } from "framer-motion";
import { GraduationCap, Briefcase, TestTube } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useTranslation } from "react-i18next";
import profileImage from "@/assets/omer.png";
import kolnImage from "@/assets/omer-koln.jpg";

export const About = () => {
  const { t } = useTranslation();

  const facts = [
    {
      icon: GraduationCap,
      key: "fact1",
    },
    {
      icon: Briefcase,
      key: "fact2",
    },
    {
      icon: TestTube,
      key: "fact3",
    },
  ];

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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-muted-foreground font-mono text-xl">{t("about.number")}</span> {t("about.title")}
          </h2>

          <div className="space-y-6">
            <Card className="p-6 sm:p-8 glass border-2 border-primary/20 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("about.description")}
                  </p>
                  <p className="text-base text-muted-foreground/80 leading-relaxed">
                    {t("about.description2") || "I'm constantly learning new technologies and best practices to stay at the forefront of software development. When I'm not coding, I enjoy contributing to open-source projects and sharing knowledge with the developer community."}
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <div className="relative w-72 h-72 rounded-xl overflow-hidden border-4 border-primary/30 shadow-2xl hover:border-primary/50 transition-all duration-300">
                    <img 
                      src={kolnImage} 
                      alt="Ömer Doğan" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      style={{ objectPosition: 'center 25%' }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {facts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-start gap-3 p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary hover:shadow-md transition-all"
                  >
                    <fact.icon className="h-6 w-6 text-primary" />
                    <p className="text-sm text-foreground">{t(`about.${fact.key}`)}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
