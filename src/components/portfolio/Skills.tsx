import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

const skillCategories = [
  {
    category: "Programlama Dilleri",
    icon: "⌨️",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C"],
  },
  {
    category: "Frontend & Backend",
    icon: "🌐",
    skills: ["React", "Spring Boot", "REST API", "MySQL", "HTML/CSS"],
  },
  {
    category: "DevOps & Sistem",
    icon: "⚙️",
    skills: ["AWS", "Linux", "Git", "Active Directory", "SSH", "Docker"],
  },
  {
    category: "Soft Skills",
    icon: "🤝",
    skills: ["Takım Çalışması", "Liderlik", "Problem Çözme", "Zaman Yönetimi", "İletişim"],
  },
];

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            <span className="text-muted-foreground font-mono text-xl">{t("skills.number")}</span>{" "}
            {t("skills.title")}
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="p-5 h-full glass border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <h3 className="text-sm font-semibold mb-4 text-foreground flex items-center gap-2">
                    <span>{category.icon}</span>
                    <span className="font-mono text-primary">{category.category}</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.04,
                          duration: 0.25,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.08, y: -1 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-sm py-1.5 px-3 bg-secondary/80 border border-border hover:bg-primary/15 hover:border-primary/50 hover:text-foreground transition-all cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
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
