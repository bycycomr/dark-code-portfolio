import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Globe, BookOpen, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const contactLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:mail@omerdogan.dev",
    label: "mail@omerdogan.dev",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/omer-dogan-bycycomr/",
    label: "linkedin.com/in/omer-dogan-bycycomr",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/bycycomr",
    label: "github.com/bycycomr",
  },
  {
    name: "Website",
    icon: Globe,
    href: "https://omerdogan.dev",
    label: "omerdogan.dev",
  },
  {
    name: "Medium",
    icon: BookOpen,
    href: "https://medium.com/@bycycomr",
    label: "medium.com/@bycycomr",
  },
  {
    name: "Phone",
    icon: Phone,
    href: "tel:+905056778544",
    label: "+90 505 677 85 44",
  },
];

export const Contact = () => {
  const { t } = useTranslation();

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
            <span className="text-muted-foreground font-mono text-xl">{t("contact.number")}</span> {t("contact.title")}
          </h2>

          <Card className="p-8 sm:p-12 glass border-2 border-primary/10 shadow-lg mt-12">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t("contact.description")}
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
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
                    className="w-full h-auto flex-col gap-3 py-6 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <link.icon className="h-6 w-6 text-primary" />
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
              <Button size="lg" className="group gradient-bg text-white hover:opacity-90" asChild>
                <a href="mailto:mail@omerdogan.dev">
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  {t("contact.sendMessage")}
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
            <p>{t("contact.footer")}</p>
            <p className="mt-2">{t("contact.copyright")}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
