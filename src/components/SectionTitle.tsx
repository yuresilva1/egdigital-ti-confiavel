interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ badge, title, subtitle, centered = true, light = false }: SectionTitleProps) => {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}>
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
          light 
            ? "bg-white/10 text-white/90" 
            : "bg-accent/10 text-accent"
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
        light ? "text-white" : "text-foreground"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${
          light ? "text-white/70" : "text-muted-foreground"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
