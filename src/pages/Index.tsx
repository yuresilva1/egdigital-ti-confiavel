import { Link } from "react-router-dom";
import { 
  Zap, Shield, Users, Clock, HeadphonesIcon, Monitor, 
  Network, HardDrive, CheckCircle, ArrowRight, Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import BenefitItem from "@/components/BenefitItem";
import PricingCard from "@/components/PricingCard";

const Index = () => {
  const services = [
    {
      icon: HeadphonesIcon,
      title: "Helpdesk Remoto e Presencial",
      description: "Suporte técnico rápido e eficiente, online ou na sua empresa, quando você precisar.",
    },
    {
      icon: Monitor,
      title: "Manutenção de Computadores",
      description: "Manutenção preventiva e corretiva para manter seus equipamentos funcionando perfeitamente.",
    },
    {
      icon: Network,
      title: "Configuração de Redes",
      description: "Instalação e suporte completo para a rede da sua empresa, com segurança e estabilidade.",
    },
    {
      icon: Shield,
      title: "Segurança e Backup",
      description: "Proteção dos seus dados com backup automático, antivírus e boas práticas de segurança.",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Atendimento Rápido",
      description: "Problemas resolvidos com agilidade, minimizando paradas no seu trabalho.",
    },
    {
      icon: Clock,
      title: "Menos Paradas",
      description: "Manutenção preventiva que evita problemas antes que eles aconteçam.",
    },
    {
      icon: Shield,
      title: "Segurança dos Dados",
      description: "Seus dados protegidos com backup e práticas de segurança atualizadas.",
    },
    {
      icon: Users,
      title: "Suporte Humano",
      description: "Atendimento próximo e personalizado, sem robôs ou filas intermináveis.",
    },
  ];

  const plans = [
    {
      name: "Plano Mensal",
      description: "Flexível e completo",
      features: [
        "Suporte remoto ilimitado",
        "Helpdesk via WhatsApp",
        "Manutenção preventiva",
        "2 visitas presenciais/mês",
      ],
    },
    {
      name: "Plano Anual",
      description: "Melhor custo-benefício",
      features: [
        "Tudo do plano semestral",
        "Visitas preventivas programadas",
        "Monitoramento preventivo",
        "Consultoria básica contínua",
        "Planejamento de TI",
      ],
      highlighted: true,
      badge: "Recomendado",
    },
    {
      name: "Plano Semestral",
      description: "Mais estabilidade e melhor custo",
      features: [
        "Tudo do plano mensal",
        "Prioridade no atendimento",
        "5 visitas presenciais/mês",
        "Relatório simples mensal",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                TI Terceirizada para sua Empresa
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Seu departamento de TI{" "}
                <span className="text-accent">terceirizado</span>, simples e eficiente.
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
                Deixe a tecnologia com quem entende. A EG Digital cuida da TI da sua empresa 
                para você focar no que realmente importa: o seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="whatsapp" size="xl" asChild>
                  <a
                    href="https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre os serviços da EG Digital."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-5 h-5" />
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button variant="outline-light" size="xl" asChild>
                  <Link to="/contato">Solicitar Proposta</Link>
                </Button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center animate-pulse-slow">
                  <div className="w-60 h-60 rounded-full bg-white/10 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full gradient-accent flex items-center justify-center shadow-glow">
                      <Monitor className="w-20 h-20 text-white" />
                    </div>
                  </div>
                </div>
                {/* Floating Icons */}
                <div className="absolute -top-4 right-10 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
                  <Network className="w-6 h-6 text-accent" />
                </div>
                <div className="absolute bottom-10 -left-4 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                  <HardDrive className="w-7 h-7 text-success" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 50L60 45.7C120 41.3 240 32.7 360 36.2C480 39.7 600 55.3 720 60.8C840 66.3 960 61.7 1080 53.3C1200 45 1320 33 1380 27L1440 21V101H1380C1320 101 1200 101 1080 101C960 101 840 101 720 101C600 101 480 101 360 101C240 101 120 101 60 101H0V50Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Por que escolher a EG Digital?"
            title="Benefícios que fazem a diferença"
            subtitle="Sua empresa funcionando sem dor de cabeça com tecnologia."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Nossos Serviços"
            title="Tudo que sua empresa precisa em TI"
            subtitle="Suporte completo para você não se preocupar com tecnologia."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/servicos">
                Ver Todos os Serviços
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TI Terceirizada Banner */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              A EG Digital é o departamento de TI que sua empresa precisa
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Sem custos de contratação, sem dor de cabeça com equipamentos, sem preocupações. 
              Apenas tecnologia funcionando para o seu negócio crescer.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {[
                "Atendimento contínuo",
                "Sem custos de CLT",
                "Equipe especializada",
                "Contratos flexíveis",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Button variant="outline-light" size="xl" asChild>
              <Link to="/ti-terceirizada">
                Saiba Mais sobre TI Terceirizada
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Plans Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Planos"
            title="Escolha o plano ideal para sua empresa"
            subtitle="Opções flexíveis que se adaptam ao seu negócio."
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl p-10 md:p-16 shadow-xl border border-border text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronto para deixar a TI com quem entende?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Fale com a EG Digital e descubra como podemos ajudar sua empresa 
              a funcionar melhor, com menos preocupações e mais produtividade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="whatsapp" size="xl" asChild>
                <a
                  href="https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre os serviços da EG Digital."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contato">Solicitar Proposta</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;