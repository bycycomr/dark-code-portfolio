import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    name: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team workspaces, and deadline tracking.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    name: "DevOps Dashboard",
    description: "Monitoring and deployment dashboard for tracking CI/CD pipelines, server metrics, and automated testing results.",
    tech: ["React", "Docker", "GitHub Actions", "Chart.js"],
    github: "#",
    demo: "#",
  },
  {
    name: "Testing Framework",
    description: "Custom automation testing framework with parallel execution, detailed reporting, and integration with major CI tools.",
    tech: ["Cypress", "Node.js", "TypeScript", "Jest"],
    github: "#",
    demo: "#",
  },
];

export const Projects = () => {
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
            <span className="text-muted-foreground font-mono text-xl">03.</span> Featured Projects
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
                <Card className="p-6 h-full bg-card/50 backdrop-blur-sm hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{project.name}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-accent/30 text-accent-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="secondary" size="sm" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
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
