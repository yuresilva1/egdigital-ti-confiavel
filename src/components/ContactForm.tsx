import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-2xl p-8 shadow-card border border-border text-center">
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-success" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Mensagem Enviada!
        </h3>
        <p className="text-muted-foreground mb-6">
          Obrigado pelo contato. Nossa equipe responderá em breve.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Enviar outra mensagem
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card border border-border">
      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Nome *
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Seu nome"
              required
              className="h-12"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
              Empresa
            </label>
            <Input
              id="company"
              name="company"
              placeholder="Nome da empresa"
              className="h-12"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              E-mail *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              required
              className="h-12"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Telefone *
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(00) 00000-0000"
              required
              className="h-12"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Mensagem *
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Como podemos ajudar sua empresa?"
            required
            rows={4}
            className="resize-none"
          />
        </div>

        <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="animate-spin mr-2">⏳</span>
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Enviar Mensagem
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Ao enviar, você concorda com nossa política de privacidade.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
