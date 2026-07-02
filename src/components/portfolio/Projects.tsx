import { motion } from "framer-motion";
import { Code2, ExternalLink, Info, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";
import { projects } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";

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
          <SectionHeading number={t("projects.number")} title={t("projects.title")} />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <Card className="p-5 sm:p-6 h-full border-0 hud-card rounded-none flex flex-col group">
                  <span className="font-mono text-[11px] text-primary/70 tracking-wider block mb-2">
                    // PROJECT_{String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary group-hover:[text-shadow:var(--neon-text)] transition-all">
                      {project.name}
                    </h3>
                    {project.achievement && (
                      <Badge className="bg-primary/10 text-primary border border-primary/40 rounded-none shadow-neon-soft text-xs whitespace-nowrap">
                        {project.achievement}
                      </Badge>
                    )}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs rounded-none font-mono border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.info && (
                      <Button variant="outline" size="sm" className="flex-1 text-xs border-0 hud-clip hud-edge bg-transparent uppercase tracking-wide text-foreground hover:text-primary hover:bg-primary/5" asChild>
                        <a href={project.info} target="_blank" rel="noopener noreferrer">
                          <Info className="mr-1.5 h-3.5 w-3.5" />
                          {t("projects.info")}
                        </a>
                      </Button>
                    )}
                    {project.code && (
                      <Button variant="outline" size="sm" className="flex-1 text-xs border-0 hud-clip hud-edge bg-transparent uppercase tracking-wide text-foreground hover:text-primary hover:bg-primary/5" asChild>
                        <a href={project.code} target="_blank" rel="noopener noreferrer">
                          <Code2 className="mr-1.5 h-3.5 w-3.5" />
                          {t("projects.code")}
                        </a>
                      </Button>
                    )}
                    {project.embed ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" className="flex-1 text-xs gradient-bg text-white hud-btn uppercase tracking-wide">
                            <Play className="mr-1.5 h-3.5 w-3.5" />
                            {t("projects.play")}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="w-[95vw] max-w-6xl h-[88vh] p-0 gap-0 rounded-none border border-primary/40 bg-background shadow-neon-soft flex flex-col overflow-hidden">
                          <div className="flex items-center justify-between gap-3 px-4 py-2.5 pr-12 border-b border-primary/30 shrink-0">
                            <DialogTitle className="font-mono text-xs sm:text-sm font-medium text-primary tracking-wider truncate">
                              {`// ${project.name}`}
                            </DialogTitle>
                            <a
                              href={project.demo ?? project.embed}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                              title={t("projects.demo")}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </div>
                          <iframe
                            src={project.embed}
                            title={project.name}
                            className="w-full flex-1 border-0 bg-background"
                            allow="fullscreen"
                          />
                        </DialogContent>
                      </Dialog>
                    ) : (
                      project.demo && (
                        <Button size="sm" className="flex-1 text-xs gradient-bg text-white hud-btn uppercase tracking-wide" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                            {t("projects.demo")}
                          </a>
                        </Button>
                      )
                    )}
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
