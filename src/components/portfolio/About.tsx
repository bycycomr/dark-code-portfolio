import { motion } from "framer-motion";
import { GraduationCap, Briefcase, TestTube } from "lucide-react";
import { Card } from "@/components/ui/card";

const facts = [
  {
    icon: GraduationCap,
    text: "Computer Engineering background",
  },
  {
    icon: Briefcase,
    text: "Experience in QA, DevOps, and full-stack development",
  },
  {
    icon: TestTube,
    text: "Focus on testing, automation, clean code",
  },
];

export const About = () => {
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
            <span className="text-muted-foreground font-mono text-xl">01.</span> About Me
          </h2>

          <div className="space-y-6">
            <Card className="p-6 sm:p-8 bg-card/50 backdrop-blur-sm">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm a passionate software engineer with a strong foundation in full-stack development and quality assurance. 
                My journey in tech has equipped me with diverse skills ranging from building responsive web applications 
                to implementing robust testing frameworks and CI/CD pipelines. I thrive on solving complex problems 
                and delivering high-quality, maintainable code that makes a difference.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                {facts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-start gap-3 p-4 rounded-lg bg-secondary/50 border border-border hover:border-accent transition-colors"
                  >
                    <fact.icon className="h-6 w-6 text-accent-foreground" />
                    <p className="text-sm text-foreground">{fact.text}</p>
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
