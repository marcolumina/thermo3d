const categories = [
  { name: 'Supports', color: 'bg-primary/10 text-primary' },
  { name: 'Rangement', color: 'bg-primary/10 text-primary' },
  { name: 'Doseurs', color: 'bg-primary/10 text-primary' },
  { name: 'Couvercles', color: 'bg-primary/10 text-primary' },
];

const Categories = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="font-display font-bold text-2xl md:text-3xl text-center mb-2">
        Nos catégories
      </h2>
      <p className="text-muted-foreground text-sm text-center mb-10">
        Trouvez l'accessoire parfait pour votre Thermomix
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="bg-card rounded-2xl p-8 text-center hover:shadow-lg transition-shadow cursor-pointer"
          >
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-display font-semibold ${cat.color}`}>
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
