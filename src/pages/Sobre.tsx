import { Link } from "react-router-dom";
import { 
  Target, Eye, Heart, Shield, Zap, Users,
  ArrowRight, Phone, Award, Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";

const Sobre = () => {
  const values = [
    {
      icon: Shield,
      title: "Transparência",
      description: "Comunicação clara e honesta em todas as interações. Você sempre sabe o que estamos fazendo e por quê.",
    },
    {
      icon: Zap,
      title: "Agilidade",
      description: "Resolução rápida de problemas porque sabemos que tempo parado é prejuízo para o seu negócio.",
    },
    {
      icon: Heart,
      title: "Segurança",
      description: "Proteção dos seus dados e sistemas como prioridade máxima em tudo que fazemos.",
    },
    {
      icon: Users,
      title: "Confiança",
      description: "Construímos relacionamentos de longo prazo baseados em resultados e comprometimento.",
    },
  ];

  const timeline = [
    {
      year: "Fundação",
      title: "O Início",
      description: "A EG Digital nasceu da necessidade de oferecer suporte de TI humanizado para pequenas e médias empresas.",
    },
    {
      year: "Crescimento",
      title: "Expansão dos Serviços",
      description: "Ampliamos nossa atuação para incluir TI terceirizada completa, não apenas suporte pontual.",
    },
    {
      year: "Hoje",
      title: "Referência Regional",
      description: "Somos parceiros de confiança de dezenas de empresas que contam conosco para sua tecnologia funcionar.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              Sobre a EG Digital
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tecnologia que funciona, pessoas que entendem
            </h1>
            <p className="text-xl text-white/80">
              Conheça a empresa que está transformando a forma como pequenas 
              e médias empresas lidam com TI.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                badge="Quem Somos"
                title="Sua empresa funcionando sem dor de cabeça com TI"
                centered={false}
              />
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  A EG Digital nasceu de uma percepção simples: pequenas e médias empresas 
                  precisam de suporte de TI de qualidade, mas sem a complexidade e os custos 
                  de manter um departamento interno.
                </p>
                <p>
                  Nossa missão é ser o departamento de TI terceirizado que sua empresa precisa 
                  — presente quando você precisa, falando a sua língua, resolvendo problemas 
                  de verdade.
                </p>
                <p>
                  Trabalhamos para que você e sua equipe possam focar no que realmente importa: 
                  fazer seu negócio crescer. A tecnologia deixa com a gente.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border text-center">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Empresas atendidas</div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border text-center">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Equipamentos gerenciados</div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border text-center">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-muted-foreground">Satisfação dos clientes</div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border text-center">
                <div className="text-4xl font-bold text-accent mb-2">24h</div>
                <div className="text-muted-foreground">Suporte disponível</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border text-center">
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Missão</h3>
              <p className="text-muted-foreground">
                Manter empresas funcionando sem dor de cabeça com TI, oferecendo 
                suporte humanizado e eficiente.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card border border-border text-center">
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mx-auto mb-4">
                <Eye className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Visão</h3>
              <p className="text-muted-foreground">
                Ser referência em TI terceirizada na região, reconhecida pela 
                qualidade do atendimento e resultados.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card border border-border text-center">
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Propósito</h3>
              <p className="text-muted-foreground">
                Permitir que empresas foquem em seu negócio enquanto cuidamos 
                de toda a tecnologia.
              </p>
            </div>
          </div>

          <SectionTitle
            badge="Nossos Valores"
            title="O que guia nossas ações"
            subtitle="Princípios que aplicamos em cada atendimento."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-card-hover transition-all hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Nossa Jornada"
            title="Como chegamos até aqui"
            subtitle="Uma história de compromisso com nossos clientes."
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={item.year} className="flex gap-6 items-start">
                    <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center flex-shrink-0 shadow-lg z-10">
                      <Calendar className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div className="bg-card rounded-xl p-6 shadow-card border border-border flex-1">
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Quer fazer parte dessa história?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Entre em contato e descubra como podemos ajudar sua empresa 
              a crescer com tecnologia que funciona.
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
                  Entrar em Contato
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

export default Sobre;
