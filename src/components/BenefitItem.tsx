import { LucideIcon } from "lucide-react";

interface BenefitItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BenefitItem = ({ icon: Icon, title, description }: BenefitItemProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

export default BenefitItem;
