import { Link } from 'react-router-dom';
import { Monitor, Scale, Utensils, ShieldCheck } from 'lucide-react';

const categories = [
  { name: 'Cache écran Thermomix', icon: Monitor, desc: 'Protection élégante pour votre écran' },
  { name: 'Cache balance Thermomix', icon: Scale, desc: 'Hygiène optimale au quotidien' },
  { name: 'Support ustensiles cuisine', icon: Utensils, desc: 'Organisation pratique et gain de place' },
  { name: 'Protection Thermomix', icon: ShieldCheck, desc: 'Durabilité et sécurité garanties' },
];

const Categories = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-2xl md:text-3xl">
          Nos catégories d'<span className="text-gradient">accessoires cuisine pratiques</span>
        </h2>
        <p className="text-muted-foreground text-sm mt-2">
          Trouvez l'accessoire Thermomix idéal grâce à l'impression 3D cuisine
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to="/catalogue"
            className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 text-center hover:border-primary/30 hover:bg-card/80 transition-all group cursor-pointer"
          >
            <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <cat.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-xs md:text-sm">{cat.name}</h3>
            <p className="text-xs text-muted-foreground mt-1">{cat.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;