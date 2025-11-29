import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", ".NET", "PHP", "REST APIs"],
  },
  {
    category: "DevOps / Tools",
    skills: ["Docker", "Git", "GitHub", "CI/CD"],
  },
  {
    category: "Testing / QA",
    skills: ["Cypress", "Postman", "Regression Testing", "Smoke Testing"],
  },
];

export const Skills = () => {
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
            <span className="text-muted-foreground font-mono text-xl">02.</span> Skills & Technologies
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
                <Card className="p-6 h-full bg-card/50 backdrop-blur-sm hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                  <h3 className="text-lg font-semibold mb-4 text-accent-foreground font-mono">
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
                          className="text-sm py-1.5 px-3 bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
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
