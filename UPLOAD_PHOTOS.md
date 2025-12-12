# Guide pour uploader les photos de la galerie

## Méthode 1 : Via le Dashboard Vercel (Recommandé)

1. **Accéder au Dashboard Vercel**
   - Allez sur https://vercel.com/dashboard
   - Sélectionnez votre projet `blog-muh`

2. **Accéder au Blob Storage**
   - Dans le menu de gauche, cliquez sur "Storage"
   - Cliquez sur "Create Database" si vous n'avez pas encore de Blob Store
   - Sélectionnez "Blob" et créez votre store

3. **Uploader les photos**
   - Une fois dans le Blob Storage, cliquez sur "Upload"
   - **Important** : Créez un dossier nommé `gallery/`
   - Uploadez vos 10 photos dans ce dossier `gallery/`
   - Nommez vos photos de façon descriptive (ex: `action-1.jpg`, `competition-2.jpg`, etc.)

4. **Formats supportés**
   - JPG, JPEG, PNG, WebP
   - Taille recommandée : max 2-3 MB par photo

## Méthode 2 : Via l'API (Programmation)

Si vous préférez uploader via code, créez un script d'upload :

```bash
npm install @vercel/blob
```

Puis créez un fichier `upload-photos.js` :

```javascript
import { put } from '@vercel/blob';

async function uploadPhoto(filePath, fileName) {
  const file = await fetch(filePath);
  const blob = await file.blob();

  const { url } = await put(`gallery/${fileName}`, blob, {
    access: 'public',
  });

  console.log(`Uploaded: ${url}`);
}

// Exemple d'utilisation
uploadPhoto('./path/to/photo1.jpg', 'photo-1.jpg');
```

## Méthode 3 : Depuis Google Drive

1. **Télécharger les photos de Google Drive**
   - Sélectionnez vos 10 photos dans Google Drive
   - Téléchargez-les sur votre ordinateur

2. **Suivre la Méthode 1**
   - Uploadez ensuite via le Dashboard Vercel comme décrit ci-dessus

## Configuration des variables d'environnement

Assurez-vous d'avoir ces variables dans votre projet Vercel :

```
BLOB_READ_WRITE_TOKEN=votre_token_ici
```

Le token sera automatiquement généré quand vous créerez votre Blob Store.

## Vérification

Une fois les photos uploadées :
1. Visitez votre site
2. Allez dans la section "Galerie"
3. Les photos devraient s'afficher automatiquement

## Notes importantes

- Les photos sont uploadées avec le préfixe `gallery/`
- Maximum 10 photos seront affichées (les plus récentes)
- Les photos sont triées par date d'upload (les plus récentes en premier)
- Format d'affichage : grille responsive (3-4 colonnes selon l'écran)
