import { motion } from "framer-motion";
import { ExternalLink, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

const projects = [
  {
    name: "DigiCampus - DigiEduHack 2024",
    description: "Local Winner project in the international DigiEduHack 2024 hackathon organized by the European Union. Led the project management for DigiCampus, managing all stages from idea development to web development, content creation, and team coordination.",
    tech: ["Web Development", "Project Management", "Team Leadership"],
    info: "https://digieduhack.com/solutions/digicampus",
    demo: "https://digicampus.doktortaku.com/",
    achievement: "🏆 Local Winner",
  },
  {
    name: "Pink - Ankü Game Jam",
    description: "2nd place winner out of 20 teams. Led the team and managed the project. Developed 'Pink' game in 48 hours, successfully completing game design, software development, level design, and project management processes.",
    tech: ["Game Development", "Game Design", "Project Management"],
    info: "https://comp.eng.ankara.edu.tr/2024/05/14/anku-game-jam-sona-erdi/",
    demo: "https://bycycomr.itch.io/pink",
    achievement: "🥈 2nd Place",
  },
];

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            <span className="text-muted-foreground font-mono text-xl">{t("projects.number")}</span> {t("projects.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full glass border-2 border-primary/10 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
                    {project.achievement && (
                      <span className="text-xs font-bold text-primary whitespace-nowrap">{project.achievement}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-primary/30 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="secondary" size="sm" className="flex-1" asChild>
                      <a href={project.info} target="_blank" rel="noopener noreferrer">
                        <Info className="mr-2 h-4 w-4" />
                        {t("projects.info")}
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 gradient-bg text-white hover:opacity-90" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t("projects.demo")}
                      </a>
                    </Button>
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
