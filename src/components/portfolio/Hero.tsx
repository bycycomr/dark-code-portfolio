import { motion } from "framer-motion";
import { Download, ArrowDown, MapPin, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-mono text-muted-foreground"
              >
                <span className="text-accent-foreground">const</span> developer <span className="text-accent-foreground">=</span> &#123;
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                Your Name Here
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-accent-foreground"
              >
                Software Engineer & Full-Stack Developer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-muted-foreground max-w-2xl"
              >
                I build fast, scalable and well-tested web applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="text-sm font-mono text-muted-foreground"
              >
                &#125;;
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Button size="lg" className="group">
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download CV
                </Button>
                <Button size="lg" variant="secondary" onClick={scrollToProjects} className="group">
                  View Projects
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-subtle-accent">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-accent-foreground" />
                  <span className="text-muted-foreground">Your Location</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-mono">
                    <Code2 className="h-4 w-4 text-accent-foreground" />
                    <span className="text-foreground font-semibold">Main Stack</span>
                  </div>
                  <div className="pl-6 space-y-1">
                    <p className="text-sm font-mono text-code-text">TypeScript</p>
                    <p className="text-sm font-mono text-code-text">React · Node.js</p>
                    <p className="text-sm font-mono text-code-text">Docker</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Experience</span>
                    <span className="text-lg font-bold font-mono text-foreground">3+ years</span>
                  </div>
                </div>

                <div className="pt-2 text-xs font-mono text-muted-foreground bg-code-bg rounded px-3 py-2">
                  <span className="text-accent-foreground">status:</span> <span className="text-green-400">available</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
