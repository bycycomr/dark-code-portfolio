import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const contactLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:your.email@example.com",
    label: "your.email@example.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/yourprofile",
    label: "linkedin.com/in/yourprofile",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/yourusername",
    label: "github.com/yourusername",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-muted-foreground font-mono text-xl">05.</span> Get In Touch
          </h2>

          <Card className="p-8 sm:p-12 bg-card/50 backdrop-blur-sm mt-12">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm currently open to internships, full-time roles, and exciting collaborations. 
              Whether you have a project in mind, a job opportunity, or just want to connect, 
              I'd love to hear from you!
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {contactLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Button
                    variant="secondary"
                    className="w-full h-auto flex-col gap-3 py-6 hover:border-accent hover:bg-accent/10 transition-all duration-300"
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <link.icon className="h-6 w-6 text-accent-foreground" />
                      <div className="text-center">
                        <p className="font-semibold text-foreground">{link.name}</p>
                        <p className="text-xs text-muted-foreground font-mono mt-1 break-all">
                          {link.label}
                        </p>
                      </div>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button size="lg" className="group" asChild>
                <a href="mailto:your.email@example.com">
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Me a Message
                </a>
              </Button>
            </motion.div>
          </Card>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-sm text-muted-foreground font-mono"
          >
            <p>Designed & Built with React + TypeScript + Tailwind CSS</p>
            <p className="mt-2">© 2024 Your Name. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
