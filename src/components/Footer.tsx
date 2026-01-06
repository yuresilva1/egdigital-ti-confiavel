import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/logo-eg-digital.png" 
                alt="EG Digital Logo" 
                className="h-10"
              />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Seu departamento de TI terceirizado. Cuidamos da tecnologia para você focar no seu negócio.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: "Serviços", href: "/servicos" },
                { name: "TI Terceirizada", href: "/ti-terceirizada" },
                { name: "Planos", href: "/planos" },
                { name: "Diferenciais", href: "/diferenciais" },
                { name: "Sobre Nós", href: "/sobre" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>Helpdesk Remoto</li>
              <li>Suporte Presencial</li>
              <li>Manutenção Preventiva</li>
              <li>Configuração de Redes</li>
              <li>Backup e Segurança</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground/70">Telefone</p>
                  <a href="tel:+5500000000000" className="text-white hover:text-accent transition-colors">
                    (00) 0000-0000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground/70">E-mail</p>
                  <a href="mailto:contato@egdigital.com.br" className="text-white hover:text-accent transition-colors">
                    contato@egdigital.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground/70">Endereço</p>
                  <p className="text-white">Sua Cidade, Estado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} EG Digital. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;