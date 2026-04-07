import { Link } from 'react-router-dom';

const SeoBlock = () => {
  return (
    <section className="border-t border-border/60">
      <div className="container mx-auto px-6 py-14 md:py-20">
        <div className="max-w-3xl mx-auto space-y-6 text-sm text-muted-foreground leading-relaxed">
          <h2 className="font-display font-semibold text-lg md:text-xl text-foreground">
            Accessoires Thermomix — Optimisez votre cuisine au quotidien
          </h2>
          <p>
            Les <strong className="text-foreground">accessoires Thermomix</strong> sont devenus indispensables pour tous ceux qui souhaitent optimiser leur cuisine au quotidien. Que vous utilisiez un <strong className="text-foreground">Thermomix TM6</strong> ou <strong className="text-foreground">TM7</strong>, il existe aujourd'hui de nombreuses solutions pour améliorer votre confort, gagner du temps et organiser efficacement votre espace de travail.
          </p>
          <p>
            Grâce à des <strong className="text-foreground">accessoires Thermomix</strong> spécialement conçus pour le <Link to="/rangement-thermomix" className="text-accent hover:underline">rangement</Link> et l'organisation, vous pouvez transformer votre cuisine en un espace fonctionnel, moderne et agréable à utiliser. Fini les ustensiles qui traînent ou le manque de place : chaque élément trouve sa place pour une utilisation fluide et intuitive.
          </p>
          <p>
            Nos <strong className="text-foreground">accessoires Thermomix</strong> sont pensés pour répondre aux besoins des utilisateurs exigeants. Fabriqués avec précision grâce à l'<strong className="text-foreground">impression 3D</strong>, ils offrent une excellente durabilité tout en conservant un design discret et élégant. Chaque produit est conçu pour s'intégrer parfaitement dans votre cuisine, tout en étant compatible avec les modèles <Link to="/accessoires-tm6" className="text-accent hover:underline">TM6</Link> et <Link to="/accessoires-tm7" className="text-accent hover:underline">TM7</Link>.
          </p>
          <p>
            Que vous recherchiez un <Link to="/support-thermomix" className="text-accent hover:underline">support pour ustensiles</Link>, une solution de <Link to="/rangement-thermomix" className="text-accent hover:underline">rangement</Link> ou un accessoire pour améliorer votre organisation, vous trouverez ici tout ce qu'il vous faut pour exploiter pleinement le potentiel de votre Thermomix.
          </p>
          <p>
            Optimiser votre cuisine n'a jamais été aussi simple grâce à nos <strong className="text-foreground">accessoires Thermomix</strong> pensés pour allier praticité, design et efficacité. Découvrez également nos <Link to="/blog" className="text-accent hover:underline">articles et conseils</Link> pour tirer le meilleur de votre Thermomix.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeoBlock;
