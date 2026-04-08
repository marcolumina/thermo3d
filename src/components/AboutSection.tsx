import { Link } from 'react-router-dom';
import { Flag } from 'lucide-react';
import aboutImage from '@/assets/about-section.png';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-premium-lg">
            <img
              src={aboutImage}
              alt="Couple découvrant les accessoires Thermo3D imprimés en 3D"
              className="w-full h-[340px] object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] mb-3">En savoir plus sur nous</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-5">
              Thermo3D : la qualité, la fonction et le design
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Fondée en Corse, Thermo3D conçoit et fabrique des accessoires Thermomix innovants grâce à l'impression 3D de précision. 
              Chaque pièce est pensée pour améliorer votre quotidien en cuisine, en utilisant du PLA de qualité alimentaire, 
              un matériau écologique et sans danger.
            </p>
            <div className="flex items-center gap-3 mb-6">
              <Flag className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-foreground">100% fabriqué en France 🇫🇷</span>
            </div>
            <Link
              to="/a-propos"
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:underline"
            >
              Apprenez à nous connaître →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
