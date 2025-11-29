import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/portfolio/Navbar";

// Mock blog posts - In a real app, this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a modern React application with TypeScript and best practices for type safety.",
    date: "2024-01-15",
    tags: ["React", "TypeScript", "Web Development"],
    slug: "getting-started-with-react-typescript",
  },
  {
    id: 2,
    title: "Building Scalable Web Applications",
    excerpt: "Explore strategies for building web applications that can grow with your user base and requirements.",
    date: "2024-01-10",
    tags: ["Architecture", "Scalability", "Best Practices"],
    slug: "building-scalable-web-applications",
  },
  {
    id: 3,
    title: "Introduction to Testing with Cypress",
    excerpt: "A comprehensive guide to end-to-end testing using Cypress for modern web applications.",
    date: "2024-01-05",
    tags: ["Testing", "Cypress", "QA"],
    slug: "introduction-to-testing-with-cypress",
  },
];

export const Blog = () => {
  const { t, i18n } = useTranslation();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(i18n.language === "tr" ? "tr-TR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-muted-foreground font-mono text-2xl">{t("blog.number")}</span> {t("blog.title")}
              </h1>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
                {t("blog.description") || "Thoughts, tutorials, and insights about web development, software engineering, and technology."}
              </p>

              {blogPosts.length === 0 ? (
                <Card className="p-12 text-center glass border-2 border-primary/10">
                  <p className="text-muted-foreground">{t("blog.noPosts")}</p>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <Link to={`/blog/${post.slug}`}>
                        <Card className="p-6 h-full glass border-2 border-primary/10 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col group">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(post.date)}</span>
                          </div>

                          <h2 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                            {post.title}
                          </h2>

                          <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                            {post.excerpt}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs border-primary/30 text-primary"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                            <span>{t("blog.readMore")}</span>
                            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;

