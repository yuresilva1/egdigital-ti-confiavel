import { Link } from "react-router-dom";
import { Check, Phone, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import PricingCard from "@/components/PricingCard";

const Planos = () => {
  const plans = [
    {
      name: "Plano Mensal",
      description: "Flexível e completo",
      features: [
        "Suporte remoto ilimitado",
        "Helpdesk via WhatsApp",
        "Manutenção preventiva",
        "Suporte de rede básico",
        "2 visitas presenciais/mês",
        "Atendimento comercial (seg–sex 8h às 18h)",
      ],
    },
    {
      name: "Plano Semestral",
      description: "Mais estabilidade e melhor custo",
      features: [
        "Tudo do plano mensal",
        "Prioridade no atendimento",
        "5 visitas presenciais/mês",
        "Relatório simples mensal",
        "SLA melhor definido",
        "Contrato mínimo: 6 meses",
      ],
    },
    {
      name: "Plano Anual",
      description: "Melhor custo-benefício",
      features: [
        "Tudo do plano semestral",
        "5 visitas presenciais/mês",
        "Visitas preventivas programadas",
        "Monitoramento preventivo",
        "Consultoria básica contínua",
        "Planejamento de TI",
        "Contrato mínimo: 12 meses",
      ],
      highlighted: true,
      badge: "Recomendado",
    },
  ];

  const faqs = [
    {
      question: "O que está incluído no suporte remoto?",
      answer: "Nosso suporte remoto inclui resolução de problemas de software, configurações, dúvidas de uso, pequenas manutenções e orientações. Acessamos seu computador de forma segura e resolvemos na hora.",
    },
    {
      question: "Quando o suporte presencial é necessário?",
      answer: "O suporte presencial é acionado quando há problemas de hardware, instalação de equipamentos, configuração de rede local ou qualquer situação que não possa ser resolvida remotamente.",
    },
    {
      question: "O que significa o SLA?",
      answer: "SLA é o tempo máximo que levamos para iniciar o atendimento após você abrir um chamado. Por exemplo, SLA de 2 horas significa que em até 2 horas um técnico já estará trabalhando no seu problema.",
    },
    {
      question: "Posso mudar de plano depois?",
      answer: "Sim! Você pode fazer upgrade a qualquer momento. Para downgrades, basta aguardar o término do período contratado.",
    },
    {
      question: "Quantos computadores posso incluir?",
      answer: "O valor do plano varia de acordo com a quantidade de equipamentos e usuários. Entre em contato para uma proposta personalizada.",
    },
    {
      question: "Existe fidelidade?",
      answer: "Os planos semestral e anual têm período mínimo de permanência, mas com benefícios proporcionais. O plano mensal não tem fidelidade.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              Planos e Preços
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Escolha o plano ideal para sua empresa
            </h1>
            <p className="text-xl text-white/80">
              Opções flexíveis que se adaptam ao tamanho e necessidade do seu negócio. 
              Sem surpresas, sem letras miúdas.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-10 max-w-2xl mx-auto">
            * Os valores são personalizados de acordo com o número de equipamentos e usuários da sua empresa. 
            Entre em contato para receber uma proposta sob medida.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="O que está incluído"
            title="Todos os planos incluem"
            subtitle="Recursos essenciais para manter sua empresa funcionando sem problemas."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Suporte técnico remoto",
              "Atendimento via WhatsApp",
              "Suporte por telefone",
              "Acesso ao portal de chamados",
              "Orientação de segurança",
              "Backup orientado",
              "Antivírus gerenciado",
              "Relatórios de atendimento",
              "Equipe técnica dedicada",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border"
              >
                <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-success" />
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Dúvidas Frequentes"
            title="Perguntas comuns sobre os planos"
            subtitle="Esclarecemos as principais dúvidas para você decidir com segurança."
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-card rounded-xl p-6 border border-border shadow-card"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Solicite uma proposta personalizada
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Cada empresa é única. Entre em contato e receba um orçamento 
              feito especialmente para a sua necessidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="whatsapp" size="xl" asChild>
                <a
                  href="https://wa.me/5500000000000?text=Olá! Gostaria de receber uma proposta de plano de TI."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button variant="outline-light" size="xl" asChild>
                <Link to="/contato">
                  Preencher Formulário
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

export default Planos;