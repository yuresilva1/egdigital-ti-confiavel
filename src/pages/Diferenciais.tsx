import { Link } from "react-router-dom";
import { 
  MessageCircle, Clock, Users, Zap, Shield, Eye,
  ThumbsUp, Headphones, ArrowRight, Phone, CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";

const Diferenciais = () => {
  const diferenciais = [
    {
      icon: MessageCircle,
      title: "Atendimento via WhatsApp",
      description: "Fale conosco pelo canal que você já usa. Nada de sistemas complicados ou e-mails que demoram para responder. É só mandar uma mensagem.",
      highlight: "Resposta rápida e prática",
    },
    {
      icon: Clock,
      title: "SLA Definido e Cumprido",
      description: "Tempo máximo de resposta garantido em contrato. Você sabe exatamente quando será atendido, sem surpresas ou incertezas.",
      highlight: "Compromisso com prazos",
    },
    {
      icon: Users,
      title: "Linguagem Simples",
      description: "Explicamos tudo de forma clara, sem termos técnicos complicados. Você entende o problema e a solução sem precisar ser especialista.",
      highlight: "Sem tecnês desnecessário",
    },
    {
      icon: Eye,
      title: "Proatividade",
      description: "Não esperamos o problema acontecer. Monitoramos e fazemos manutenções preventivas para evitar dor de cabeça antes que ela apareça.",
      highlight: "Prevenção é melhor que correção",
    },
    {
      icon: Headphones,
      title: "Atendimento Humano",
      description: "Nada de robôs ou menus infinitos. Você fala diretamente com uma pessoa de verdade que vai entender e resolver seu problema.",
      highlight: "Gente de verdade",
    },
    {
      icon: Shield,
      title: "Segurança Sempre",
      description: "Seus dados protegidos com backup, antivírus e boas práticas. Trabalhamos para que você nunca perca informações importantes.",
      highlight: "Proteção garantida",
    },
  ];

  // Testimonials and Our Promise sections are removed to maintain honesty about the client base.

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              Por que a EG Digital?
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              O que nos torna diferentes
            </h1>
            <p className="text-xl text-white/80">
              Não somos apenas mais uma empresa de TI. Somos parceiros que 
              entendem seu negócio e falam sua língua.
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciais Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Nossos Diferenciais"
            title="Por que empresas escolhem a EG Digital"
            subtitle="Características que fazem toda a diferença no dia a dia."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diferenciais.map((item) => (
              <div
                key={item.title}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-4">
                  {item.highlight}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New CTA Section (Replacing Our Promise) */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                badge="Nossa Abordagem"
                title="Compromisso com a sua tranquilidade"
                centered={false}
              />
              <div className="space-y-6">
                {[
                  {
                    title: "Transparência Total",
                    desc: "Comunicação clara e honesta em todas as interações. Você sempre sabe o que está acontecendo e por que estamos fazendo cada ação.",
                  },
                  {
                    title: "Agilidade no Atendimento",
                    desc: "Entendemos que tempo parado é prejuízo. Por isso, priorizamos resolver rápido, com SLA definido.",
                  },
                  {
                    title: "Parceria de Longo Prazo",
                    desc: "Atuamos como parte do seu time. Conhecemos sua empresa a fundo para oferecer soluções que realmente funcionam.",
                  },
                  {
                    title: "Melhoria Contínua",
                    desc: "Estamos sempre buscando novas formas de otimizar sua infraestrutura e garantir a máxima produtividade.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative p-8 bg-card rounded-2xl shadow-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Pronto para experimentar a diferença?
              </h3>
              <p className="text-muted-foreground mb-6">
                Fale com nossa equipe e descubra como um suporte de TI transparente e eficiente pode transformar o dia a dia da sua empresa.
              </p>
              <Button variant="hero" size="lg" className="w-full" asChild>
                <Link to="/contato">
                  Solicitar Proposta
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <div className="mt-4 text-center">
                <Button variant="whatsapp" size="sm" asChild>
                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Ou Chame no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final (Existing section kept) */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experimente a diferença EG Digital
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Descubra como é ter um suporte de TI que realmente funciona 
              para a sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="whatsapp" size="xl" asChild>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button variant="outline-light" size="xl" asChild>
                <Link to="/contato">
                  Solicitar Proposta
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Diferenciais;