import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

const Contato = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(00) 0000-0000",
      action: "tel:+5500000000000",
      actionLabel: "Ligar agora",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "(00) 00000-0000",
      action: "https://wa.me/5500000000000",
      actionLabel: "Enviar mensagem",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@egdigital.com.br",
      action: "mailto:contato@egdigital.com.br",
      actionLabel: "Enviar e-mail",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      info: "Segunda a Sexta, 8h às 18h",
      action: null,
      actionLabel: null,
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              Entre em Contato
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Fale com a EG Digital
            </h1>
            <p className="text-xl text-white/80">
              Deixe a TI com quem entende. Entre em contato e receba 
              atendimento rápido e personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <SectionTitle
                badge="Formulário"
                title="Envie sua mensagem"
                subtitle="Preencha o formulário e entraremos em contato em breve."
                centered={false}
              />
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <SectionTitle
                badge="Informações"
                title="Outras formas de contato"
                subtitle="Escolha o canal mais conveniente para você."
                centered={false}
              />

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="bg-card rounded-xl p-6 border border-border shadow-card flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground mb-2">{item.info}</p>
                      {item.action && (
                        <a
                          href={item.action}
                          target={item.action.startsWith("http") ? "_blank" : undefined}
                          rel={item.action.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-accent hover:text-accent/80 font-medium text-sm"
                        >
                          {item.actionLabel} →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 bg-[#25D366]/10 rounded-2xl p-8 border border-[#25D366]/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[#25D366] flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Prefere WhatsApp?</h3>
                    <p className="text-muted-foreground">Resposta rápida e prática</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Clique no botão abaixo e fale diretamente com nossa equipe. 
                  Atendimento humanizado e sem filas.
                </p>
                <Button variant="whatsapp" size="lg" className="w-full" asChild>
                  <a
                    href="https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre os serviços da EG Digital."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-5 h-5" />
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Localização"
            title="Onde estamos"
            subtitle="Atendemos empresas em toda a região."
          />

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">Endereço</h3>
                  <p className="text-muted-foreground">
                    Sua Cidade, Estado<br />
                    Atendimento presencial e remoto para toda a região
                  </p>
                </div>
              </div>

              <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">
                    Mapa da localização<br />
                    <span className="text-sm">(Integração com Google Maps disponível)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Pronto para começar?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Fale com a EG Digital e deixe a TI com quem entende.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
