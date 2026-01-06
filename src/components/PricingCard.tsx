import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

const PricingCard = ({ name, description, features, highlighted = false, badge }: PricingCardProps) => {
  return (
    <div
      className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
        highlighted
          ? "gradient-hero text-white shadow-xl scale-105"
          : "bg-card border border-border shadow-card hover:shadow-card-hover"
      }`}
    >
      {badge && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-accent text-accent-foreground text-sm font-semibold rounded-full shadow-lg">
          {badge}
        </span>
      )}
      
      <div className="text-center mb-6">
        <h3 className={`text-2xl font-bold mb-2 ${highlighted ? "text-white" : "text-foreground"}`}>
          {name}
        </h3>
        <p className={highlighted ? "text-white/80" : "text-muted-foreground"}>
          {description}
        </p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
              highlighted ? "bg-white/20" : "bg-success/10"
            }`}>
              <Check className={`w-3 h-3 ${highlighted ? "text-white" : "text-success"}`} />
            </div>
            <span className={highlighted ? "text-white/90" : "text-foreground"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={highlighted ? "outline-light" : "hero"}
        size="lg"
        className="w-full"
        asChild
      >
        <a href="/contato">Solicitar Proposta</a>
      </Button>
    </div>
  );
};

export default PricingCard;
