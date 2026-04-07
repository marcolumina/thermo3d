import { Link } from 'react-router-dom';

const categories = [
  { label: 'Accessoires\nThermomix', emoji: '🔧', to: '/accessoires-thermomix' },
  { label: 'Rangement\nThermomix', emoji: '🗄️', to: '/rangement-thermomix' },
  { label: 'Organisation\ncuisine', emoji: '📐', to: '/catalogue?filter=rangement' },
  { label: 'Accessoires\nTM6', emoji: '⚙️', to: '/accessoires-tm6' },
  { label: 'Accessoires\nTM7', emoji: '✨', to: '/accessoires-tm7' },
];

const Categories = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground text-center mb-12">
          Catégories populaires
        </h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              to={cat.to}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary border-2 border-transparent group-hover:border-accent flex items-center justify-center text-3xl md:text-4xl transition-all duration-300 shadow-premium group-hover:shadow-premium-lg">
                {cat.emoji}
              </div>
              <span className="text-xs md:text-sm font-medium text-foreground/70 group-hover:text-accent text-center whitespace-pre-line transition-colors">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
