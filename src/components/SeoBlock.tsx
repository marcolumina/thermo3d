import { Link } from 'react-router-dom';

const SeoBlock = () => {
  return (
    <section className="border-t border-border/60">
      <div className="container mx-auto px-6 py-14 md:py-20">
        <div className="max-w-3xl mx-auto space-y-6 text-sm text-muted-foreground leading-relaxed">
          <h2 className="font-display font-semibold text-lg md:text-xl text-foreground">
            Accessoires Thermomix TM6 & TM7 — Organisez et optimisez votre cuisine
          </h2>
          <p>
            Les <strong className="text-foreground">accessoires Thermomix TM7</strong> et <strong className="text-foreground">accessoires Thermomix TM6</strong> sont devenus indispensables pour tous les utilisateurs qui souhaitent tirer le meilleur parti de leur robot de cuisine. Que vous veniez d'acquérir le tout nouveau TM7 ou que vous utilisiez votre fidèle TM6 depuis plusieurs années, disposer des bons accessoires transforme radicalement votre expérience culinaire au quotidien.
          </p>
          <p>
            Chez Thermo3D, nous concevons et fabriquons en France des accessoires spécialement adaptés aux dimensions et à l'ergonomie de chaque modèle Thermomix. Nos supports, caches écran, organisateurs et solutions de <strong className="text-foreground">rangement Thermomix</strong> sont imprimés en 3D avec une précision au dixième de millimètre, garantissant un ajustement parfait et une durabilité optimale. Le PLA de qualité alimentaire que nous utilisons est certifié pour un usage en cuisine, écologique et sans danger pour votre santé.
          </p>

          <h3 className="font-display font-semibold text-base text-foreground pt-2">
            Pourquoi l'organisation Thermomix change tout
          </h3>
          <p>
            L'<strong className="text-foreground">organisation Thermomix</strong> est la clé d'une cuisine efficace et agréable. Sans accessoires adaptés, le plan de travail se retrouve vite encombré par le varoma, les spatules, les fouets et les autres ustensiles. Cette désorganisation entraîne une perte de temps, du stress inutile et une expérience culinaire dégradée. Nos clients constatent un gain moyen de 30 minutes par semaine grâce à une cuisine mieux organisée autour de leur Thermomix.
          </p>
          <p>
            Grâce à nos solutions de <strong className="text-foreground">rangement Thermomix</strong>, chaque accessoire trouve sa place. Les supports maintiennent vos ustensiles directement sur le robot, les organisateurs offrent des emplacements dédiés pour chaque élément, et les caches protègent les zones sensibles comme l'écran tactile et la balance intégrée. L'installation est instantanée, sans outil ni modification : tout se clipse en deux secondes pour un résultat immédiat.
          </p>

          <h3 className="font-display font-semibold text-base text-foreground pt-2">
            Des accessoires adaptés à chaque modèle
          </h3>
          <p>
            Les <strong className="text-foreground">accessoires Thermomix TM6</strong> sont conçus pour s'adapter aux dimensions spécifiques du TM6, tandis que les <strong className="text-foreground">accessoires Thermomix TM7</strong> tiennent compte du nouveau design et des dimensions revues du TM7. Cette spécialisation par modèle garantit un ajustement parfait et une stabilité irréprochable, contrairement aux accessoires universels qui ne s'adaptent jamais vraiment.
          </p>
          <p>
            Notre gamme couvre l'ensemble des besoins : <Link to="/support-thermomix" className="text-accent hover:underline">supports pour ustensiles</Link>, caches écran et balance, organisateurs de cuisine, et notre produit phare, le <Link to="/catalogue" className="text-accent hover:underline">Pack Cuisine Optimisée</Link>, qui regroupe les accessoires les plus demandés à un prix avantageux. C'est l'offre la plus choisie par nos clients et le meilleur moyen de démarrer avec un Thermomix parfaitement équipé.
          </p>
          <p>
            Explorez nos <Link to="/accessoires-tm6" className="text-accent hover:underline">accessoires TM6</Link> et <Link to="/accessoires-tm7" className="text-accent hover:underline">accessoires TM7</Link> pour trouver les solutions adaptées à votre modèle. Plus de 1000 clients nous font confiance avec une note de 4,8/5. Livraison offerte dès 50€, satisfait ou remboursé 15 jours. Découvrez aussi nos <Link to="/blog" className="text-accent hover:underline">guides et conseils</Link> pour optimiser votre cuisine au quotidien.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeoBlock;
