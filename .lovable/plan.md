

## Plan: Espace Client + Reseaux Sociaux dans le Footer

### Apercu

Creer un systeme d'authentification par email avec un espace client (mon compte, mes commandes) et ajouter les liens reseaux sociaux dans le footer.

### 1. Base de donnees (Lovable Cloud)

**Migration SQL :**
- Table `profiles` (id, user_id FK auth.users, first_name, last_name, phone, address, city, postal_code, country, created_at, updated_at) avec RLS
- Table `orders` (id, user_id, order_number, status, total, currency, items JSONB, shipping_address JSONB, created_at) avec RLS
- Policies : chaque utilisateur ne voit/modifie que ses propres donnees
- Trigger pour creer automatiquement un profil a l'inscription

### 2. Pages d'authentification

**Fichiers a creer :**
- `src/pages/Auth.tsx` : page avec onglets Connexion / Inscription (email + mot de passe)
- `src/pages/ResetPassword.tsx` : page pour reinitialiser le mot de passe
- `src/hooks/useAuth.ts` : hook pour gerer l'etat d'authentification (onAuthStateChange + getSession)

**Fonctionnalites :**
- Inscription par email avec verification
- Connexion par email/mot de passe
- Mot de passe oublie avec lien de reinitialisation
- Deconnexion

### 3. Espace client (Mon Compte)

**Fichiers a creer :**
- `src/pages/Account.tsx` : layout avec sidebar/onglets pour naviguer entre les sections
- `src/components/account/AccountProfile.tsx` : formulaire pour modifier nom, email, telephone, adresse
- `src/components/account/AccountOrders.tsx` : liste des commandes avec statut et details
- `src/components/account/AccountAddresses.tsx` : gestion des adresses de livraison
- `src/components/account/AccountWishlist.tsx` : liste de souhaits (produits favoris)

**Route protegee** : redirection vers /auth si non connecte.

### 4. Integration dans le Header

- Ajouter une icone utilisateur (User icon) dans le Header
- Si connecte : lien vers /account
- Si non connecte : lien vers /auth

### 5. Footer - Reseaux sociaux

**Modifier `src/components/Footer.tsx` :**
- Ajouter une section "Suivez-nous" avec icones cliquables :
  - Instagram
  - Facebook
  - TikTok
  - YouTube
- Liens configurables (URLs placeholder en attendant les vrais comptes)
- Icones stylisees avec hover effects

### 6. Routes

**Modifier `src/App.tsx` :**
- Ajouter `/auth` → Auth.tsx
- Ajouter `/account` → Account.tsx (protege)
- Ajouter `/reset-password` → ResetPassword.tsx

### Details techniques

- Authentification via le SDK Lovable Cloud (supabase client deja configure)
- Validation des formulaires avec zod + react-hook-form
- RLS sur toutes les tables pour securiser les donnees
- Composants UI existants (shadcn) reutilises pour la coherence visuelle
- Icones reseaux sociaux via lucide-react (Instagram, Facebook, Youtube) + icone custom TikTok

