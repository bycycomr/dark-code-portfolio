import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/layout/Navbar";
import { blogPosts } from "@/data/blog";

const Blog = () => {
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-3">
                <span className="text-muted-foreground font-mono text-2xl">{t("blog.number")}</span>{" "}
                {t("blog.title")}
              </h1>
              <p className="text-base text-muted-foreground mb-12 max-w-2xl">
                {t("blog.description")}
              </p>

              {blogPosts.length === 0 ? (
                <Card className="p-12 text-center glass border border-border">
                  <p className="text-muted-foreground">{t("blog.noPosts")}</p>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {blogPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ y: -4 }}
                    >
                      <Link to={`/blog/${post.slug}`}>
                        <Card className="p-5 h-full glass border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col group">
                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5" />
                              <span>{formatDate(post.date)}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5" />
                              <span>{post.readTime} dk</span>
                            </div>
                          </div>

                          <h2 className="text-base font-bold mb-2 text-foreground group-hover:text-primary transition-colors leading-snug">
                            {post.title}
                          </h2>

                          <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>

                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs border-border text-muted-foreground"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center gap-1 text-primary text-sm font-medium">
                            <span>{t("blog.readMore")}</span>
                            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
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
