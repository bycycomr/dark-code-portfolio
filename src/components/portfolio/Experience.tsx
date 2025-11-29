import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Tech Company Inc.",
    period: "Jun 2023 - Present",
    points: [
      "Developed and maintained React components for customer-facing web applications",
      "Implemented automated testing suites using Cypress, improving code coverage by 40%",
      "Collaborated with cross-functional teams in agile sprints to deliver features on time",
    ],
  },
  {
    role: "QA Engineer Intern",
    company: "Software Solutions Ltd.",
    period: "Jan 2023 - May 2023",
    points: [
      "Executed comprehensive regression and smoke testing for enterprise applications",
      "Created detailed test documentation and bug reports using JIRA",
      "Automated repetitive test cases, reducing manual testing time by 30%",
    ],
  },
  {
    role: "Community Tech Lead",
    company: "University Tech Club",
    period: "Sep 2021 - Dec 2022",
    points: [
      "Led workshops on web development, Git, and software best practices",
      "Mentored junior students in programming and project development",
      "Organized hackathons and tech events with 100+ participants",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            <span className="text-muted-foreground font-mono text-xl">04.</span> Experience
          </h2>

          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-accent/30 hidden sm:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-0 top-6 w-3 h-3 bg-accent rounded-full border-4 border-background hidden sm:block -translate-x-[5px]" />

                <Card className="p-6 bg-card/50 backdrop-blur-sm hover:border-accent transition-all duration-300 sm:ml-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-accent-foreground font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
                      <Briefcase className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent-foreground mt-1.5 font-mono text-xs">▹</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
