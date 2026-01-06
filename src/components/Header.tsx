import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Serviços", href: "/servicos" },
  { name: "TI Terceirizada", href: "/ti-terceirizada" },
  { name: "Planos", href: "/planos" },
  { name: "Diferenciais", href: "/diferenciais" },
  { name: "Sobre Nós", href: "/sobre" },
  { name: "Contato", href: "/contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo-eg-digital.png" 
              alt="EG Digital Logo" 
              className="h-8 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.href
                    ? isScrolled
                      ? "bg-primary/10 text-primary"
                      : "bg-white/20 text-white"
                    : isScrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="whatsapp"
              size="default"
              asChild
            >
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-foreground hover:bg-secondary"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-card rounded-xl shadow-xl border border-border animate-scale-in">
            <div className="flex flex-col gap-1 px-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-2 pt-3 mt-2 border-t border-border">
                <Button variant="whatsapp" className="w-full" asChild>
                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Fale Conosco
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;