import { Clock, AlertTriangle, ArrowRight } from 'lucide-react';

const TimeLoss = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          <Clock className="w-4 h-4" />
          Le saviez-vous ?
        </div>
        <h2 className="font-extrabold text-2xl md:text-4xl text-foreground leading-tight">
          Vous perdez du temps tous les jours sans le savoir
        </h2>
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          Entre les accessoires mal rangés et le manque d'organisation, votre expérience Thermomix est loin d'être optimisée.
        </p>
        <p className="mt-4 text-base md:text-lg text-foreground font-semibold">
          Nos solutions changent tout.
        </p>
      </div>
    </section>
  );
};

export default TimeLoss;
