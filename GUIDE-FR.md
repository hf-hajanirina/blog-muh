# Guide de Démarrage Rapide

## Bienvenue sur votre nouveau blog professionnel !

Ce blog a été créé pour mettre en valeur la carrière de **HAJANIRINA Harisoa Muriel**, basketteuse professionnelle malgache.

---

## Démarrage Immédiat

### 1. Lancer le projet en développement

Ouvrez un terminal dans le dossier `muriel-hajanirina-blog` et exécutez:

```bash
npm run dev
```

Puis ouvrez votre navigateur à l'adresse: **http://localhost:3000**

### 2. Voir le résultat

Vous verrez un site web professionnel avec:
- ✅ Navigation fixe responsive
- ✅ Section Hero avec présentation
- ✅ Section À Propos avec biographie
- ✅ Statistiques de carrière détaillées
- ✅ Galerie d'images
- ✅ Section Contact avec tous les réseaux sociaux
- ✅ Footer complet

---

## Personnalisation Rapide

### Ajouter vos propres photos

1. Placez vos photos dans le dossier `public/images/`
2. Ouvrez le fichier `app/page.tsx`
3. Cherchez la section "Gallery Section" (ligne ~282)
4. Remplacez les placeholders par vos vraies images:

```tsx
// Au lieu de:
<div className="aspect-square bg-gradient-to-br from-orange-400 to-red-500...">
  <div className="w-full h-full flex items-center justify-center text-white">
    <div className="text-4xl mb-2">🏀</div>
  </div>
</div>

// Utilisez:
<Image
  src="/images/votre-photo.jpg"
  alt="Description de la photo"
  width={400}
  height={400}
  className="object-cover rounded-xl"
/>
```

N'oubliez pas d'ajouter l'import en haut du fichier:
```tsx
import Image from "next/image";
```

### Modifier les couleurs du thème

Le thème actuel utilise orange et rouge. Pour changer:

1. Ouvrez `app/page.tsx`
2. Faites une recherche (Ctrl+F) pour `orange-600` et `red-600`
3. Remplacez par vos couleurs préférées (ex: `blue-600`, `purple-600`)

Couleurs Tailwind disponibles: slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose

### Mettre à jour les informations personnelles

Dans `app/page.tsx`, vous pouvez modifier:
- La biographie (section "À Propos", ligne ~88)
- Les statistiques (section "Carrière", ligne ~163)
- Les informations de contact (section "Contact", ligne ~334)

---

## Déploiement en Ligne (GRATUIT)

### Option 1: Vercel (Recommandé - Le plus simple)

1. Créez un compte gratuit sur [vercel.com](https://vercel.com)
2. Cliquez sur "New Project"
3. Importez le dossier `muriel-hajanirina-blog`
4. Cliquez sur "Deploy"
5. Votre site sera en ligne en 2 minutes avec un URL gratuit!

### Option 2: Netlify

1. Créez un compte sur [netlify.com](https://netlify.com)
2. Glissez-déposez le dossier du projet
3. Votre site sera déployé automatiquement

### Option 3: GitHub Pages + Vercel

1. Créez un repository GitHub
2. Uploadez votre code
3. Connectez Vercel à votre repository GitHub
4. Déploiement automatique à chaque modification!

---

## Structure des Fichiers Importants

```
muriel-hajanirina-blog/
│
├── app/
│   ├── page.tsx              ← CONTENU PRINCIPAL DU SITE (modifiez ici!)
│   ├── layout.tsx            ← Métadonnées SEO et configuration
│   ├── globals.css           ← Styles globaux
│   └── components/
│       └── MobileNav.tsx     ← Menu mobile
│
├── public/                   ← PLACEZ VOS IMAGES ICI
│   └── images/               ← Créez ce dossier pour vos photos
│
├── README.md                 ← Documentation technique complète
└── package.json              ← Configuration du projet
```

---

## Commandes Utiles

```bash
# Développement
npm run dev          # Lance le serveur de développement

# Production
npm run build        # Crée la version optimisée
npm run start        # Lance le serveur de production

# Qualité du code
npm run lint         # Vérifie les erreurs de code
```

---

## Prochaines Étapes Recommandées

### Court terme (Aujourd'hui)
1. ✅ Tester le site localement avec `npm run dev`
2. 📸 Ajouter vos vraies photos
3. ✏️ Personnaliser la biographie si nécessaire
4. 🚀 Déployer sur Vercel

### Moyen terme (Cette semaine)
5. 📊 Mettre à jour les statistiques si nécessaire
6. 🎨 Ajuster les couleurs selon vos préférences
7. 📱 Tester sur mobile
8. 🔗 Partager le lien sur vos réseaux sociaux

### Long terme (Ce mois)
9. 📝 Ajouter un blog/actualités (optionnel)
10. 🎥 Intégrer des vidéos YouTube/TikTok
11. 🏆 Ajouter plus de réalisations
12. 📈 Configurer Google Analytics (optionnel)

---

## Besoin d'Aide ?

### Ressources
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Guide Vercel](https://vercel.com/docs)

### Support Technique
- Consultez le fichier `README.md` pour plus de détails
- Next.js a une excellente communauté sur Discord
- Stack Overflow pour les questions spécifiques

---

## Caractéristiques Professionnelles Incluses

✅ **Design Moderne** - Interface élégante et professionnelle
✅ **Responsive** - Parfait sur mobile, tablette et desktop
✅ **Performance** - Chargement ultra-rapide
✅ **SEO Optimisé** - Bien référencé sur Google
✅ **Accessibilité** - Conforme aux standards web
✅ **Réseaux Sociaux** - Liens directs vers tous vos profils
✅ **Navigation Fluide** - Scroll smooth entre sections
✅ **Stats Détaillées** - Mise en valeur de votre carrière

---

## Félicitations ! 🎉

Votre blog professionnel est prêt à être utilisé. Il présente votre carrière de manière élégante et professionnelle, avec toutes les informations importantes facilement accessibles.

**Prochaine action recommandée:** Lancez `npm run dev` et admirez votre nouveau site !

---

**Créé avec Next.js + Tailwind CSS**
**© 2025 HAJANIRINA Harisoa Muriel**
