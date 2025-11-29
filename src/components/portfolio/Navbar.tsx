import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "skills", href: "#skills" },
    { key: "projects", href: "#projects" },
    { key: "experience", href: "#experience" },
    { key: "education", href: "#education" },
    { key: "certificates", href: "#certificates" },
    { key: "blog", href: "/blog" },
    { key: "contact", href: "#contact" },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      
      // If we're on blog page, navigate to home first
      if (location.pathname !== "/") {
        navigate(`/${href}`);
        // Wait for navigation, then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            const offsetTop = (element as HTMLElement).offsetTop - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });
          }
        }, 100);
      } else {
        // We're on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          const offsetTop = (element as HTMLElement).offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass border-b border-border shadow-sm" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#home" 
            onClick={(e) => handleHashClick(e, "#home")}
            className="text-xl font-bold font-mono text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <span className="text-muted-foreground">&lt;</span>
            Portfolio
            <span className="text-muted-foreground">/&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.href.startsWith("/")) {
                return (
                  <Link
                    key={item.key}
                    to={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                );
              }
              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleHashClick(e, item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {t(`nav.${item.key}`)}
                </a>
              );
            })}
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="uppercase">{i18n.language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage("en")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("tr")}>
                  Türkçe
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="uppercase text-xs">{i18n.language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage("en")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("tr")}>
                  Türkçe
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => {
              if (item.href.startsWith("/")) {
                return (
                  <Link
                    key={item.key}
                    to={item.href}
                    className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                );
              }
              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => {
                    handleHashClick(e, item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {t(`nav.${item.key}`)}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};
