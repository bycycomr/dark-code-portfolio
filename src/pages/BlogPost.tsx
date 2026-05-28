import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/portfolio/Navbar";
import { blogPosts } from "@/data/blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();

  const post = blogPosts.find((p) => p.slug === slug) ?? null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(i18n.language === "tr" ? "tr-TR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-4xl">
              <Card className="p-12 text-center glass border border-border">
                <p className="text-muted-foreground mb-4">Yazı bulunamadı.</p>
                <Link to="/blog" className="text-primary hover:underline inline-flex items-center gap-1">
                  <ArrowLeft className="h-4 w-4" />
                  {t("blog.backToBlog")}
                </Link>
              </Card>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <article className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                {t("blog.backToBlog")}
              </Link>

              <Card className="p-6 sm:p-10 glass border border-border shadow-lg">
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{post.readTime} dakika okuma</span>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold mb-5 text-foreground leading-snug">
                  {post.title}
                </h1>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-border">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-primary/30 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                <div
                  className="prose prose-invert max-w-none
                    prose-headings:text-foreground prose-headings:font-bold
                    prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3
                    prose-h3:text-base prose-h3:mt-5 prose-h3:mb-2
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:my-3
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-foreground
                    prose-ul:text-muted-foreground prose-li:my-1
                    prose-code:text-primary prose-code:bg-secondary/80 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
                    prose-pre:bg-secondary/60 prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </Card>
            </motion.div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;
