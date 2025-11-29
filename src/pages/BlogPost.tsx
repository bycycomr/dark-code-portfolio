import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/portfolio/Navbar";

// Mock blog posts - In a real app, this would come from an API or CMS
const blogPosts: Record<string, any> = {
  "getting-started-with-react-typescript": {
    id: 1,
    title: "Getting Started with React and TypeScript",
    content: `
      <p>React and TypeScript are a powerful combination for building modern web applications. In this guide, we'll explore how to set up a new React project with TypeScript and cover the essential concepts you need to know.</p>
      
      <h2>Why TypeScript with React?</h2>
      <p>TypeScript adds static type checking to JavaScript, which helps catch errors early in development and makes your code more maintainable. When combined with React, you get better IDE support, autocomplete, and refactoring capabilities.</p>
      
      <h2>Setting Up Your Project</h2>
      <p>To create a new React project with TypeScript, you can use Create React App or Vite. Vite is faster and more modern, so we'll use that:</p>
      
      <pre><code>npm create vite@latest my-app -- --template react-ts</code></pre>
      
      <h2>Key Concepts</h2>
      <ul>
        <li>Type definitions for props</li>
        <li>Type-safe hooks</li>
        <li>Generic components</li>
        <li>Type inference</li>
      </ul>
      
      <p>By following these practices, you'll be able to build more robust React applications with TypeScript.</p>
    `,
    date: "2024-01-15",
    tags: ["React", "TypeScript", "Web Development"],
    slug: "getting-started-with-react-typescript",
  },
  "building-scalable-web-applications": {
    id: 2,
    title: "Building Scalable Web Applications",
    content: `
      <p>Scalability is a crucial aspect of modern web development. As your application grows, you need to ensure it can handle increased load and complexity.</p>
      
      <h2>Architecture Patterns</h2>
      <p>Choosing the right architecture pattern is essential for scalability. Consider patterns like microservices, modular monoliths, or serverless architectures based on your needs.</p>
      
      <h2>Performance Optimization</h2>
      <p>Performance is key to scalability. Implement caching strategies, optimize database queries, and use CDNs to serve static assets efficiently.</p>
      
      <h2>Monitoring and Observability</h2>
      <p>Implement comprehensive monitoring to track your application's performance and identify bottlenecks before they become critical issues.</p>
    `,
    date: "2024-01-10",
    tags: ["Architecture", "Scalability", "Best Practices"],
    slug: "building-scalable-web-applications",
  },
  "introduction-to-testing-with-cypress": {
    id: 3,
    title: "Introduction to Testing with Cypress",
    content: `
      <p>Cypress is a powerful end-to-end testing framework that makes it easy to write, run, and debug tests for web applications.</p>
      
      <h2>Why Cypress?</h2>
      <p>Cypress provides a great developer experience with its time-travel debugging, automatic waiting, and real-time reloads. It's built for modern web applications and works seamlessly with React, Vue, and other frameworks.</p>
      
      <h2>Writing Your First Test</h2>
      <p>Let's start with a simple test that visits a page and checks for content:</p>
      
      <pre><code>describe('My First Test', () => {
  it('visits the app', () => {
    cy.visit('/')
    cy.contains('Welcome')
  })
})</code></pre>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Use data-testid attributes for reliable selectors</li>
        <li>Keep tests independent and isolated</li>
        <li>Use custom commands for reusable actions</li>
        <li>Mock API calls for consistent testing</li>
      </ul>
    `,
    date: "2024-01-05",
    tags: ["Testing", "Cypress", "QA"],
    slug: "introduction-to-testing-with-cypress",
  },
};

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();

  const post = slug ? blogPosts[slug] : null;

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
              <Card className="p-12 text-center glass border-2 border-primary/10">
                <p className="text-muted-foreground">Post not found</p>
                <Link to="/blog" className="text-primary hover:underline mt-4 inline-block">
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
        <article className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                {t("blog.backToBlog")}
              </Link>

              <Card className="p-8 sm:p-12 glass border-2 border-primary/10 shadow-lg">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4" />
                      <span>{t("blog.tags")}</span>
                    </div>
                  )}
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold mb-6">{post.title}</h1>

                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map((tag: string) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-primary/30 text-primary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                <div
                  className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-primary prose-pre:bg-secondary prose-pre:border prose-pre:border-primary/20"
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

