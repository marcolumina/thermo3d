import { Star } from 'lucide-react';

const SocialProof = () => {
  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-extrabold text-foreground">+1000</span>
            <span className="text-sm text-muted-foreground">clients<br />satisfaits</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-bold text-foreground ml-1">4.9/5</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-extrabold text-foreground">🇫🇷</span>
            <span className="text-sm text-muted-foreground">Conçu et fabriqué<br />en France</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
