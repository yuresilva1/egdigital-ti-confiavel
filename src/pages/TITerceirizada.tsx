import { Link } from "react-router-dom";
import { 
  Building2, Users, Clock, Shield, TrendingUp, Wallet,
  CheckCircle, ArrowRight, Phone, Briefcase, HeartHandshake
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";

const TITerceirizada = () => {
  const benefits = [
    {
      icon: Wallet,
      title: "Sem Custos de Contratação",
      description: "Economize com encargos trabalhistas, benefícios e treinamentos. Você paga apenas pelo serviço, não pelo funcionário.",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Acesso a profissionais qualificados e atualizados, sem precisar investir em capacitação constante.",
    },
    {
      icon: Clock,
      title: "Atendimento Contínuo",
      description: "Suporte disponível sempre que você precisar, sem se preocupar com férias, faltas ou rotatividade.",
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Práticas atualizadas de segurança, backup e proteção de dados aplicadas na sua empresa.",
    },
    {
      icon: TrendingUp,
      title: "Foco no Crescimento",
      description: "Enquanto cuidamos da TI, você e sua equipe focam no que realmente importa: fazer o negócio crescer.",
    },
    {
      icon: HeartHandshake,
      title: "Parceria de Longo Prazo",
      description: "Conhecemos sua empresa a fundo e atuamos como parte do seu time, não como fornecedor distante.",
    },
  ];

  const comparisons = [
    {
      item: "Salário e encargos",
      interno: "R$ 5.000+/mês",
      terceirizado: "Incluído no plano",
    },
    {
      item: "Férias e 13º",
      interno: "Custo adicional",
      terceirizado: "Sem custo extra",
    },
    {
      item: "Treinamento",
      interno: "Por sua conta",
      terceirizado: "Incluído",
    },
    {
      item: "Cobertura de faltas",
      interno: "Sem cobertura",
      terceirizado: "Equipe de backup",
    },
    {
      item: "Equipamentos",
      interno: "Você compra",
      terceirizado: "Orientação inclusa",
    },
    {
      item: "Atualização técnica",
      interno: "Custo adicional",
      terceirizado: "Sempre atualizado",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              TI Terceirizada
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seu departamento de TI completo, sem a dor de cabeça
            </h1>
            <p className="text-xl text-white/80">
              A EG Digital atua como o setor de TI da sua empresa, cuidando de tudo 
              relacionado à tecnologia para você focar no seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* What is */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                badge="Infraestrutura & Suporte Técnico de TI"
                title="Essencial para suas operações diárias"
                subtitle="Tenha um departamento de TI completo, sem precisar contratar."
                centered={false}
              />
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  A Infraestrutura e o Suporte Técnico de TI são a espinha dorsal das operações diárias de qualquer empresa moderna. 
                  Com a EG Digital, você garante que seus sistemas funcionem perfeitamente, sem interrupções.
                </p>
                <p>
                  Nós cuidamos de toda a sua infraestrutura tecnológica — desde a manutenção de computadores e redes até a segurança dos dados e o suporte aos usuários. 
                  Tudo o que é necessário para que sua equipe possa trabalhar sem preocupações.
                </p>
                <p>
                  É como ter um departamento de TI completo e proativo, focado em manter suas operações fluidas, 
                  mas com a flexibilidade e a economia da terceirização.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Ideal para</h3>
                  <p className="text-muted-foreground">Empresas que querem</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Reduzir custos com TI interna",
                  "Ter suporte profissional sempre disponível",
                  "Focar no negócio, não na tecnologia",
                  "Evitar problemas antes que aconteçam",
                  "Crescer sem se preocupar com infraestrutura",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Vantagens"
            title="Por que terceirizar a TI?"
            subtitle="Benefícios reais que impactam diretamente no seu dia a dia."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Comparativo"
            title="TI Interna vs TI Terceirizada"
            subtitle="Veja as diferenças e entenda por que terceirizar faz sentido."
          />

          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-primary text-primary-foreground p-4 font-semibold">
                <div>Item</div>
                <div className="text-center">TI Interna</div>
                <div className="text-center">TI Terceirizada</div>
              </div>
              {comparisons.map((row, index) => (
                <div
                  key={row.item}
                  className={`grid grid-cols-3 p-4 ${
                    index % 2 === 0 ? "bg-card" : "bg-secondary/30"
                  }`}
                >
                  <div className="font-medium text-foreground">{row.item}</div>
                  <div className="text-center text-muted-foreground">{row.interno}</div>
                  <div className="text-center text-success font-medium">{row.terceirizado}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contract Info */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              Contratos Flexíveis
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Contratos de longo prazo com benefícios reais
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Oferecemos contratos mensais, semestrais e anuais. Quanto maior o compromisso, 
              maiores os benefícios e menores os custos mensais.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {[
                "Sem surpresas no orçamento",
                "SLA garantido em contrato",
                "Escalabilidade conforme você cresce",
                "Cancelamento simplificado",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline-light" size="xl" asChild>
                <Link to="/planos">
                  Ver Planos
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl p-10 md:p-16 shadow-xl border border-border text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronto para ter seu próprio departamento de TI?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Fale conosco e descubra como a TI Terceirizada pode transformar sua empresa.
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

export default TITerceirizada;