# Blog Officiel - HAJANIRINA Harisoa Muriel

Blog professionnel de Harisoa Muriel Hajanirina, basketteuse professionnelle de l'équipe nationale de Madagascar.

## À Propos

Ce site présente la carrière, les statistiques et le parcours sportif de Harisoa Muriel Hajanirina, athlète malgache évoluant dans le basketball professionnel.

### Informations de Contact

**Madagascar:** +261 34 98 223 11
**La Réunion:** +262 69 34 36 979

### Réseaux Sociaux

- [Facebook](https://www.facebook.com/p/Hajanirina-Harisoa-Muriel-100088241926125/)
- [Instagram](https://www.instagram.com/p/DRwmIdDDG2E/) - @murielharisoa01
- [TikTok](https://www.tiktok.com/@murielharisoa01) - @murielharisoa01
- [LinkedIn](https://www.linkedin.com/in/muriel-hajanirina-48aab61a3/)

## Technologies Utilisées

- **Next.js 15** - Framework React pour applications web
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Bibliothèque d'icônes

## Installation

### Prérequis

- Node.js 18+
- npm, yarn, pnpm ou bun

### Étapes d'installation

1. Cloner le repository ou naviguer dans le dossier du projet

2. Installer les dépendances:

```bash
npm install
```

3. Lancer le serveur de développement:

```bash
npm run dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée la version de production
- `npm run start` - Lance le serveur de production
- `npm run lint` - Vérifie le code avec ESLint

## Structure du Projet

```
muriel-hajanirina-blog/
├── app/
│   ├── components/
│   │   └── MobileNav.tsx      # Navigation mobile responsive
│   ├── layout.tsx              # Layout principal avec métadonnées
│   ├── page.tsx                # Page d'accueil
│   └── globals.css             # Styles globaux
├── public/                     # Fichiers statiques
└── package.json
```

## Sections du Site

### 1. Accueil (Hero)
Présentation principale avec appel à l'action

### 2. À Propos
Biographie et informations personnelles

### 3. Carrière & Statistiques
- Statistiques de carrière (Points, Rebonds, Passes, Efficacité)
- Équipe nationale (Afrobasket U18 2016)
- Compétitions de club (MB2ALL)
- Réalisations et parcours

### 4. Galerie
Espace pour photos et médias

### 5. Contact
Informations de contact et liens vers réseaux sociaux

## Personnalisation

Pour personnaliser le contenu, éditez le fichier `app/page.tsx`.

### Modifier les couleurs

Le thème utilise principalement orange et rouge. Pour changer les couleurs, cherchez et remplacez:
- `orange-600`, `orange-400`, etc.
- `red-600`, `red-400`, etc.

### Ajouter des images

Placez vos images dans le dossier `public/` et utilisez le composant Next.js `Image`:

```tsx
import Image from "next/image";

<Image
  src="/votre-image.jpg"
  alt="Description"
  width={500}
  height={500}
/>
```

## Déploiement

### Vercel (Recommandé)

Le moyen le plus simple de déployer ce site Next.js est d'utiliser la plateforme [Vercel](https://vercel.com):

1. Créer un compte sur [Vercel](https://vercel.com)
2. Importer votre projet
3. Vercel détectera automatiquement Next.js et configurera le build
4. Votre site sera déployé avec un URL automatique

### Autres Plateformes

Ce projet peut également être déployé sur:
- Netlify
- AWS Amplify
- Railway
- Render

Consultez la [documentation Next.js](https://nextjs.org/docs/app/building-your-application/deploying) pour plus de détails.

## SEO

Le site inclut des métadonnées optimisées pour le référencement:
- Titre et description personnalisés
- Mots-clés pertinents
- Open Graph pour les réseaux sociaux
- Langue française (lang="fr")

## Accessibilité

- Navigation au clavier supportée
- Liens avec labels ARIA
- Scroll fluide activé
- Design responsive (mobile-first)

## Support

Pour toute question ou assistance, contactez:
- Email: Via les réseaux sociaux
- Téléphone: +261 34 98 223 11 (Madagascar) / +262 69 34 36 979 (La Réunion)

## Licence

© 2025 HAJANIRINA Harisoa Muriel. Tous droits réservés.

---

Développé avec Next.js et Tailwind CSS
