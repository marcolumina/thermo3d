

## Plan : Refonte SEO & Conversion complète du site Thermo3D

Ce plan couvre la restructuration complète du site selon les specifications fournies : nouvelle homepage, nouvelles pages categories (dont 2 nouvelles), section blog, maillage interne, et optimisation SEO technique.

---

### 1. Page d'accueil — Refonte complète

**Fichiers modifies :** `src/components/Hero.tsx`, `src/components/Categories.tsx`, `src/components/SeoBlock.tsx`, `src/components/WhyUs.tsx`, `src/pages/Index.tsx`

- **Hero** : Nouveau H1 "Accessoires Thermomix pour une cuisine organisee et efficace", sous-titre exact fourni, CTA "Decouvrir les accessoires" vers `/catalogue`
- **Categories** : Remplacer les categories actuelles par les 5 demandees (Accessoires Thermomix, Rangement Thermomix, Organisation cuisine, Accessoires TM6, Accessoires TM7) avec liens vers les pages correspondantes
- **SeoBlock** : Remplacer par le texte SEO exact fourni (5 paragraphes)
- **WhyUs / Reassurance** : 3 blocs (Livraison rapide, Fabrication 3D francaise, Compatible Thermomix)
- Garder BestSellers (produits populaires) tel quel

### 2. Pages categories — Mise a jour + 2 nouvelles pages

**Fichiers modifies :** `src/pages/AccessoiresThermomix.tsx`, `src/pages/RangementThermomix.tsx`
**Fichiers crees :** `src/pages/AccessoiresTM6.tsx`, `src/pages/AccessoiresTM7.tsx`

- **/accessoires-thermomix** : Nouveau H1 "Accessoires Thermomix indispensables", remplacer texte SEO par celui fourni, balises meta mises a jour
- **/rangement-thermomix** : Nouveau H1 "Rangement Thermomix : optimisez votre espace", remplacer texte SEO par celui fourni
- **/accessoires-tm6** (nouvelle page) : H1 "Accessoires Thermomix TM6", texte SEO 300-500 mots avec mots-cles (accessoire thermomix tm6, accessoires cuisine robot, organisation cuisine), grille produits filtree par tag TM6
- **/accessoires-tm7** (nouvelle page) : H1 "Accessoires Thermomix TM7", texte SEO 300-500 mots avec mots-cles (accessoire thermomix tm7, rangement cuisine, accessoires thermomix), grille produits filtree par tag TM7
- Chaque page inclut des liens de maillage interne vers les autres categories, produits et blog

### 3. Page produit — Structure enrichie

**Fichier modifie :** `src/pages/ProductPage.tsx`

- Adapter le H1 au format "Support ustensiles Thermomix TM6 – Organisation parfaite" (utiliser le titre Shopify enrichi)
- Ajouter les sections structurees si pas deja parsees : "Pourquoi utiliser ce support Thermomix ?", "Compatible avec quels modeles ?"
- Enrichir la FAQ avec les 4 questions exactes fournies
- Ajouter maillage interne en bas (liens vers categories + blog)

### 4. Blog — Nouvelle section

**Fichiers crees :** `src/pages/Blog.tsx`, `src/pages/BlogArticle.tsx`

- **/blog** : Page listing des articles avec cards, meta SEO
- **/blog/accessoires-thermomix** : Premier article "Top 10 des accessoires Thermomix indispensables pour une cuisine organisee" avec le contenu fourni, structure H1/H2/H3, maillage interne vers categories et produits
- Articles statiques cotes front (pas de CMS pour l'instant), facilement extensibles
- JSON-LD BlogPosting pour chaque article

### 5. Navigation — Mise a jour

**Fichier modifie :** `src/components/Header.tsx`

- Ajouter lien "Blog" dans la navigation principale
- Ajouter les nouvelles categories dans le menu (Accessoires TM6, TM7)

### 6. Footer — Maillage interne

**Fichier modifie :** `src/components/Footer.tsx`

- Ajouter liens vers les nouvelles pages categories (TM6, TM7)
- Ajouter lien vers le blog
- Renforcer le maillage interne

### 7. Routes

**Fichier modifie :** `src/App.tsx`

- Ajouter `/accessoires-tm6` → AccessoiresTM6
- Ajouter `/accessoires-tm7` → AccessoiresTM7
- Ajouter `/blog` → Blog
- Ajouter `/blog/:slug` → BlogArticle

### 8. SEO technique

**Fichiers modifies :** `public/sitemap.xml`, `public/robots.txt`

- Ajouter les nouvelles URLs au sitemap : `/accessoires-tm6`, `/accessoires-tm7`, `/blog`, `/blog/accessoires-thermomix`
- Corriger le XML malformed (balise `</url>` manquante ligne 27)
- Toutes les pages utilisent deja `react-helmet-async` pour title/meta/canonical/OG/JSON-LD — continuer ce pattern
- Mots-cles cibles integres dans les balises title et meta description de chaque page

### Resume des fichiers touches

| Action | Fichiers |
|--------|----------|
| Modifier | Hero, Categories, SeoBlock, WhyUs, Header, Footer, Index, AccessoiresThermomix, RangementThermomix, ProductPage, App.tsx, sitemap.xml |
| Creer | AccessoiresTM6.tsx, AccessoiresTM7.tsx, Blog.tsx, BlogArticle.tsx |

