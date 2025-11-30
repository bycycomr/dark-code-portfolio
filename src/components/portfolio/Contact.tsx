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
];

export const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mailto link ile email gönder
    const mailtoLink = `mailto:mail@omerdogan.dev?subject=Portfolio Contact: ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            <span className="text-muted-foreground font-mono text-xl">{t("contact.number")}</span> {t("contact.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 sm:p-8 glass border-2 border-primary/10 shadow-lg h-full">
                <h3 className="text-xl font-bold mb-6">{t("contact.formTitle")}</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contact.name")}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("contact.namePlaceholder")}
                      required
                      className="bg-secondary/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contact.email")}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("contact.emailPlaceholder")}
                      required
                      className="bg-secondary/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t("contact.messagePlaceholder")}
                      required
                      rows={5}
                      className="bg-secondary/50 border-primary/20 focus:border-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group gradient-bg text-white hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      t("contact.sending")
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        {t("contact.sendMessage")}
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 sm:p-8 glass border-2 border-primary/10 shadow-lg h-full">
                <h3 className="text-xl font-bold mb-6">{t("contact.connectTitle")}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t("contact.description")}
                </p>
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  {contactLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-primary/10 hover:border-primary border border-transparent transition-all duration-300"
                      >
                        <link.icon className="h-5 w-5 text-primary flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="font-medium text-foreground text-sm">{link.name}</p>
                          <p className="text-xs text-muted-foreground font-mono truncate">
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-sm text-muted-foreground font-mono"
          >
            <p>{t("contact.copyright")}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
