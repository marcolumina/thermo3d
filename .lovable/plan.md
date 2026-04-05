
Objectif immédiat : rétablir l’affichage du site avant toute autre amélioration.

Ce que j’ai relevé :
- Le plantage semble avoir été introduit avec la dernière vague de changements autour de l’espace client.
- Les zones à risque les plus probables sont : `src/App.tsx`, `src/integrations/supabase/client.ts`, `src/pages/Auth.tsx`, `src/pages/MonCompte.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/components/ui/sonner.tsx`.
- Je n’ai pas trouvé d’erreur runtime capturée dans les logs fournis, donc je traiterai cela comme une régression globale de rendu et non comme un simple bug visuel.

Plan de correction :
1. Restaurer le rendu du site en priorité
- Isoler temporairement tout ce qui dépend du nouvel espace client pour éviter qu’un problème d’authentification bloque toute l’application.
- Vérifier et sécuriser l’initialisation globale dans `App.tsx` pour que la home, le catalogue et les pages produits puissent se charger même si l’espace client a un souci.

2. Sécuriser l’intégration de l’espace client
- Fiabiliser l’usage du client backend dans `src/integrations/supabase/client.ts`.
- Corriger les pages `Auth.tsx` et `MonCompte.tsx` pour éviter tout crash au chargement, boucle de redirection ou problème de typage/runtime.
- Faire en sorte que les pages compte ne s’exécutent que quand elles sont réellement visitées, sans impacter la page d’accueil.

3. Neutraliser les points de casse globaux
- Vérifier `Header.tsx` et `Footer.tsx` pour que les liens “Mon compte” et réseaux sociaux restent purement visuels et ne cassent pas le shell global.
- Vérifier `src/components/ui/sonner.tsx` pour éviter qu’un provider manquant ou un hook de thème bloque l’app entière.

4. Rétablir un mode de secours propre
- Si nécessaire, masquer temporairement l’accès “Mon compte” et/ou retirer le chargement des éléments les plus risqués jusqu’à ce que la boutique redevienne stable.
- Garder intactes les parties qui fonctionnaient déjà : home, catalogue, fiches produit, panier.

5. Revalider ensuite l’espace client proprement
- Tester `/`
- Tester `/catalogue`
- Tester une fiche produit
- Tester `/auth`
- Tester `/mon-compte`
- Vérifier aussi mobile + menu + footer

Détails techniques :
- Le fichier de types backend actuel ne montre aucune table métier ; l’espace client ajouté est surtout une couche d’authentification/placeholder pour l’instant.
- Comme le site entier est blanc, je vais corriger d’abord le point de rupture global, puis seulement stabiliser les fonctionnalités compte.
- La stratégie la plus sûre est : “restaurer l’affichage maintenant, réactiver progressivement l’espace client ensuite”.

Fichiers que je corrigerai en priorité :
- `src/App.tsx`
- `src/integrations/supabase/client.ts`
- `src/pages/Auth.tsx`
- `src/pages/MonCompte.tsx`
- `src/components/ui/sonner.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
