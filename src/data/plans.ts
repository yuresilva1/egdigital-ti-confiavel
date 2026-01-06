import { PricingCardProps } from "@/components/PricingCard";

export const pricingPlans: PricingCardProps[] = [
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