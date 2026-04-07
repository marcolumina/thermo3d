import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const articlesData: Record<string, {
  title: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
}> = {
  'accessoires-thermomix': {
    title: 'Top 10 des accessoires Thermomix indispensables pour une cuisine organisée',
    date: '7 avril 2026',
    readTime: '5 min',
    content: (
      <div className="prose prose-sm max-w-none">
        <p>
          Le <strong>Thermomix</strong> est un outil puissant qui facilite la cuisine au quotidien. Cependant, pour exploiter pleinement son potentiel, il est essentiel de s'équiper des bons <strong>accessoires Thermomix</strong>.
        </p>

        <h2>Pourquoi les accessoires Thermomix sont-ils importants ?</h2>
        <p>
          Les accessoires permettent d'améliorer l'organisation, de gagner du temps et de rendre l'expérience en cuisine beaucoup plus agréable. Parmi les indispensables, on retrouve les <Link to="/support-thermomix" className="text-accent hover:underline">supports pour ustensiles</Link>, les <Link to="/rangement-thermomix" className="text-accent hover:underline">solutions de rangement</Link> et les accessoires d'optimisation de l'espace.
        </p>

        <h2>Les critères d'un bon accessoire Thermomix</h2>
        <p>
          Un bon <strong>accessoire Thermomix</strong> doit répondre à trois critères : praticité, compatibilité et durabilité. Les modèles conçus pour le <Link to="/accessoires-tm6" className="text-accent hover:underline">TM6</Link> et le <Link to="/accessoires-tm7" className="text-accent hover:underline">TM7</Link> offrent généralement les meilleures performances.
        </p>

        <h2>Organiser sa cuisine pour plus d'efficacité</h2>
        <p>
          Organiser sa cuisine avec des accessoires adaptés permet de réduire le stress, d'améliorer la productivité et de profiter pleinement de son robot. Un plan de travail bien rangé, c'est du temps gagné à chaque repas.
        </p>

        <h2>Investir dans la qualité</h2>
        <p>
          En investissant dans des <strong>accessoires Thermomix</strong> de qualité, vous transformez votre cuisine en un espace fonctionnel, moderne et parfaitement optimisé. Les produits fabriqués en France par impression 3D offrent une durabilité et une précision d'ajustement incomparables.
        </p>

        <h2>Notre sélection d'accessoires indispensables</h2>
        <p>
          Découvrez dès maintenant notre <Link to="/accessoires-thermomix" className="text-accent hover:underline">sélection d'accessoires Thermomix</Link> pour améliorer votre quotidien. Du support de varoma au rangement complet, chaque accessoire est pensé pour simplifier votre vie en cuisine.
        </p>
      </div>
    ),
  },
};

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articlesData[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBanner />
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Article introuvable.</p>
            <Link to="/blog" className="text-accent hover:underline">← Retour au blog</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{article.title} | Blog Thermo3D</title>
        <meta name="description" content={`${article.title}. Conseils et astuces pour optimiser votre Thermomix TM6 et TM7 avec les meilleurs accessoires.`} />
        <link rel="canonical" href={`https://thermo3d.fr/blog/${slug}`} />
        <meta property="og:title" content={`${article.title} | Thermo3D`} />
        <meta property="og:description" content={`${article.title}. Conseils et astuces pour votre Thermomix.`} />
        <meta property="og:url" content={`https://thermo3d.fr/blog/${slug}`} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            datePublished: "2026-04-07",
            author: { "@type": "Organization", name: "Thermo3D" },
            publisher: { "@type": "Organization", name: "Thermo3D", url: "https://thermo3d.fr" },
            url: `https://thermo3d.fr/blog/${slug}`,
          })}
        </script>
      </Helmet>

      <TopBanner />
      <Header />

      <article className="container mx-auto px-6 py-12 md:py-20 max-w-3xl">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Retour au blog
        </Link>

        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
          <span>{article.date}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
        </div>

        <h1 className="font-display font-bold text-2xl md:text-4xl text-foreground leading-tight mb-8">
          {article.title}
        </h1>

        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-lg [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-3 [&_strong]:text-foreground">
          {article.content}
        </div>

        {/* Internal links */}
        <div className="mt-16 pt-8 border-t border-border/40">
          <h3 className="font-display font-semibold text-base text-foreground mb-4">Découvrir nos catégories</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link to="/accessoires-thermomix" className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
              Accessoires Thermomix <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/rangement-thermomix" className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
              Rangement Thermomix <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/accessoires-tm6" className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
              Accessoires TM6 <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/accessoires-tm7" className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
              Accessoires TM7 <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogArticle;
