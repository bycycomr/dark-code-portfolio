import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "C", "JavaScript", "Java"],
  },
  {
    category: "Frontend & Backend",
    skills: ["React", "Spring Boot", "MySQL", "REST APIs"],
  },
  {
    category: "DevOps & Tools",
    skills: ["AWS", "Git", "Linux", "Active Directory", "Backup/Recovery"],
  },
  {
    category: "Soft Skills",
    skills: ["Teamwork", "Leadership", "Problem Solving", "Time Management", "Communication"],
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
            <span className="text-muted-foreground font-mono text-xl">{t("skills.number")}</span> {t("skills.title")}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full glass border-2 border-primary/10 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <h3 className="text-lg font-semibold mb-4 text-primary font-mono">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-sm py-1.5 px-3 bg-secondary hover:bg-primary hover:text-white transition-colors cursor-default"
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
