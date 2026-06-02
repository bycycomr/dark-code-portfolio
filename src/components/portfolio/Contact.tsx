import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Globe, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";
import { SectionHeading } from "./SectionHeading";

const contactLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:omerr.dogan11@gmail.com",
    label: "omerr.dogan11@gmail.com",
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
    name: "Medium",
    icon: BookOpen,
    href: "https://medium.com/@bycycomr",
    label: "medium.com/@bycycomr",
  },
  {
    name: "Website",
    icon: Globe,
    href: "https://omerdogan.dev",
    label: "omerdogan.dev",
  },
];

export const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoLink = `mailto:omerr.dogan11@gmail.com?subject=Portfolio Contact: ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `İsim: ${formData.name}\nE-posta: ${formData.email}\n\nMesaj:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    toast({
      title: t("contact.success"),
      description: t("contact.successDesc"),
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <SectionHeading number={t("contact.number")} title={t("contact.title")} align="center" className="mb-3" />
          <p className="text-center text-muted-foreground text-sm mb-10 max-w-lg mx-auto">
            {t("contact.description")}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 sm:p-8 border-0 hud-card rounded-none h-full">
                <h3 className="text-lg font-bold mb-5 uppercase tracking-wide">{t("contact.formTitle")}</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-sm">{t("contact.name")}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("contact.namePlaceholder")}
                      required
                      className="bg-secondary/40 border-border focus:border-primary rounded-none h-10"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-sm">{t("contact.email")}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("contact.emailPlaceholder")}
                      required
                      className="bg-secondary/40 border-border focus:border-primary rounded-none h-10"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-sm">{t("contact.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t("contact.messagePlaceholder")}
                      required
                      rows={5}
                      className="bg-secondary/40 border-border focus:border-primary rounded-none resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group gradient-bg text-white hud-btn uppercase tracking-wide font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      t("contact.sending")
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                        {t("contact.sendMessage")}
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 sm:p-8 border-0 hud-card rounded-none h-full">
                <h3 className="text-lg font-bold mb-5 uppercase tracking-wide">{t("contact.connectTitle")}</h3>
                <div className="grid grid-cols-1 gap-2.5">
                  {contactLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 + index * 0.07, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        target={link.href.startsWith("mailto") || link.href.startsWith("tel") ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-none bg-secondary/30 hover:bg-primary/10 border border-border hover:border-primary transition-all duration-200 group"
                      >
                        <link.icon className="h-4 w-4 text-primary flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-foreground">{link.name}</p>
                          <p className="text-xs text-muted-foreground font-mono truncate group-hover:text-primary/70 transition-colors">
                            {link.label}
                          </p>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-xs text-muted-foreground font-mono"
          >
            {t("contact.copyright")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
