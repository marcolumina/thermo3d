import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const articles = [
  {
    slug: 'top-5-accessoires-thermomix-tm7',
    title: 'Top 5 accessoires Thermomix TM7 indispensables en 2026',
    excerpt: "Découvrez les 5 accessoires Thermomix TM7 indispensables : support, cache écran, organisateur, cache balance et pack complet. Guide complet.",
    readTime: '8 min',
    date: '8 avril 2026',
    image: '/images/blog-accessoires.png',
  },
  {
    slug: 'organiser-thermomix-facilement',
    title: 'Comment organiser son Thermomix facilement : le guide complet',
    excerpt: "Comment organiser votre Thermomix et votre cuisine en 6 étapes simples. Conseils pratiques, astuces de rangement et accessoires indispensables.",
    readTime: '9 min',
    date: '8 avril 2026',
    image: '/images/blog-accessoires.png',
  },
  {
    slug: 'meilleurs-accessoires-gagner-temps-cuisine',
    title: 'Les meilleurs accessoires pour gagner du temps en cuisine avec votre Thermomix',
    excerpt: "Gagnez jusqu'à 30 minutes par semaine grâce aux bons accessoires Thermomix. Support, organisateur, rangement : découvrez les solutions les plus efficaces.",
    readTime: '8 min',
    date: '8 avril 2026',
    image: '/images/blog-accessoires.png',
  },
  {
    slug: 'accessoires-thermomix',
    title: 'Top 10 des accessoires Thermomix indispensables pour une cuisine organisée',
    excerpt: "Découvrez les accessoires Thermomix essentiels pour organiser votre cuisine, gagner du temps et profiter pleinement de votre TM6 ou TM7.",
    readTime: '5 min',
    date: '7 avril 2026',
    image: '/images/blog-accessoires.png',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Blog Accessoires Thermomix — Conseils & Astuces | Thermo3D</title>
        <meta name="description" content="Blog Thermo3D : conseils, astuces et guides pour optimiser votre Thermomix TM5, TM6 et TM7 avec les meilleurs accessoires. Organisation cuisine et rangement." />
        <link rel="canonical" href="https://thermo3d.fr/blog" />
        <meta name="keywords" content="blog thermomix, accessoires thermomix, conseils cuisine, organisation cuisine thermomix, gagner du temps cuisine" />
        <meta property="og:title" content="Blog Accessoires Thermomix — Thermo3D" />
        <meta property="og:description" content="Conseils et astuces pour optimiser votre Thermomix avec les meilleurs accessoires." />
        <meta property="og:url" content="https://thermo3d.fr/blog" />
      </Helmet>

      <TopBanner />
      <Header />

      <section className="bg-hero">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-4">Blog</p>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground leading-tight max-w-3xl">
            Conseils & astuces pour votre Thermomix
          </h1>
          <p className="mt-6 text-lg text-accent max-w-2xl leading-relaxed">
            Guides pratiques pour optimiser votre cuisine avec les bons accessoires Thermomix.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="group bg-background border border-border/40 rounded-2xl overflow-hidden hover:shadow-premium-lg transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={`${article.title} — Blog accessoires Thermomix Thermo3D`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="600"
                  height="338"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                </div>
                <h2 className="font-display font-bold text-base text-foreground group-hover:text-accent transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold">
                  Lire l'article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Internal links */}
      <section className="bg-secondary/30 py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Link to="/accessoires-thermomix" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Accessoires Thermomix</Link>
            <Link to="/rangement-thermomix" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Rangement Thermomix</Link>
            <Link to="/accessoires-tm6" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Accessoires TM6</Link>
            <Link to="/accessoires-tm7" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Accessoires TM7</Link>
            <Link to="/catalogue" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Catalogue</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
