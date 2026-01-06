import { Link } from "react-router-dom";
import { 
  HeadphonesIcon, Monitor, Network, Shield, HardDrive, 
  Settings, Laptop, Server, ArrowRight, Phone, CheckCircle, Printer, Wrench
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";

const Servicos = () => {
  const services = [
    {
      icon: HeadphonesIcon,
      title: "Helpdesk Remoto e Presencial",
      description: "Suporte técnico completo, disponível online para resolver problemas rapidamente ou presencialmente quando necessário. Sua equipe nunca fica parada esperando.",
    },
    {
      icon: Wrench,
      title: "Reparo e Upgrade de Computadores",
      description: "Diagnóstico, reparo de hardware e software, e upgrades para garantir que seus computadores operem com máxima eficiência e velocidade.",
    },
    {
      icon: Printer,
      title: "Configuração de Impressoras e Periféricos",
      description: "Instalação, configuração e solução de problemas em impressoras (rede ou USB), scanners e outros periféricos essenciais para o escritório.",
    },
    {
      icon: Monitor,
      title: "Manutenção Preventiva e Corretiva",
      description: "Cuidamos dos seus equipamentos com manutenções programadas que evitam problemas, e corrigimos rapidamente quando algo acontece.",
    },
    {
      icon: Network,
      title: "Configuração e Suporte de Rede",
      description: "Instalação, configuração e manutenção completa da rede da sua empresa. Internet estável, compartilhamento seguro de arquivos e impressoras.",
    },
    {
      icon: Shield,
      title: "Backup e Segurança Básica",
      description: "Proteção dos seus dados com backup automático, antivírus atualizado e orientações de segurança para toda a equipe.",
    },
    {
      icon: Laptop,
      title: "Padronização de Computadores",
      description: "Todos os computadores da empresa configurados de forma padronizada, facilitando o suporte e aumentando a produtividade.",
    },
    {
      icon: HardDrive,
      title: "Gestão e Indicação de Hardware",
      description: "Orientação para compra de equipamentos, avaliação do que já existe e recomendações para melhorar o desempenho da sua infraestrutura.",
    },
  ];

  const features = [
    "Atendimento rápido e humanizado",
    "Linguagem simples, sem tecnês",
    "Relatórios claros e objetivos",
    "Proatividade para evitar problemas",
    "Suporte via WhatsApp",
    "SLA definido e cumprido",
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              Serviços de TI Completos
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Soluções de TI que mantêm sua empresa funcionando
            </h1>
            <p className="text-xl text-white/80">
              Da manutenção do computador à segurança dos seus dados, 
              cuidamos de tudo para você focar no seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="O que fazemos"
            title="Serviços especializados para sua empresa"
            subtitle="Cada serviço pensado para resolver problemas reais do dia a dia."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                badge="Como trabalhamos"
                title="Suporte de verdade, do jeito que deveria ser"
                subtitle="Nada de filas, robôs ou linguagem complicada. Aqui você fala com gente de verdade."
                centered={false}
              />
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contato">
                    Fale Conosco
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center">
                    <Settings className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Processo Simplificado</h3>
                    <p className="text-muted-foreground">Em 3 passos</p>
                  </div>
                </div>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Você nos chama", desc: "Via WhatsApp, telefone ou e-mail" },
                    { step: "2", title: "Entendemos o problema", desc: "Sem termos técnicos complicados" },
                    { step: "3", title: "Resolvemos rapidamente", desc: "Remoto ou presencial, o que for melhor" },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl p-10 md:p-16 shadow-xl border border-border text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Precisa de suporte agora?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Entre em contato e receba atendimento rápido e eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="whatsapp" size="xl" asChild>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5" />
                  Chamar no WhatsApp
                </a>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <Link to="/planos">Ver Planos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;