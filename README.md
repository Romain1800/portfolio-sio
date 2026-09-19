# Portfolio SIO — Romain Audebert

Portfolio professionnel réalisé avec Next.js (App Router), TypeScript, Tailwind CSS et Framer Motion, destiné au jury du BTS SIO SLAM et aux entreprises.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de production
npm run lint    # vérification du code
```

## Formulaire de contact (envoi d'email)

Le formulaire de contact envoie un vrai email via [Resend](https://resend.com) (route `src/app/api/contact/route.ts`).

1. Créez un compte gratuit sur [resend.com](https://resend.com).
2. Récupérez une clé API (Dashboard > API Keys).
3. Copiez `.env.example` en `.env.local` et collez-y votre clé :
   ```bash
   cp .env.example .env.local
   ```
4. Sur votre hébergeur (Vercel, etc.), ajoutez `RESEND_API_KEY` dans les variables d'environnement du projet.

Sans clé configurée, le formulaire affiche un message d'erreur explicite au lieu d'échouer silencieusement.

## Mettre à jour le contenu sans toucher au code

Tout le contenu éditorial vit dans `src/data/*.json`. Il suffit de modifier ces fichiers (aucune connaissance en programmation requise) :

| Fichier | Contenu |
| --- | --- |
| `src/data/profile.json` | Nom, accroche, disponibilité, statistiques du hero, CV, réseaux |
| `src/data/timeline.json` | Frise chronologique de la page "À propos" |
| `src/data/skills.json` | Dashboard de compétences (catégories, niveaux 0-100, icônes) |
| `src/data/projects.json` | Liste des projets (métadonnées : titre, techno, statut...) |
| `src/data/stages.json` | Fiches de stage en entreprise |
| `src/data/certifications.json` | Certifications et badges |
| `src/data/veille.json` | Articles de veille technologique |

### Ajouter un projet

1. Ajoute une entrée dans `src/data/projects.json` (copie un objet existant et modifie `slug`, `title`, etc.).
2. Crée le fichier `src/content/projects/<slug>.mdx` avec le contenu détaillé (Contexte, Problématique, Missions, Architecture, Résultats, Compétences BTS, Preuves).
3. Dépose l'image de couverture dans `public/images/projects/`.

La page `/projets/<slug>` est générée automatiquement.

### Ajouter une certification ou un article de veille

Ajoute simplement une entrée dans le fichier JSON correspondant — la page se met à jour automatiquement, sans redéploiement de code.

### Icônes

Les noms d'icônes (`"icon": "Server"`) correspondent aux composants de [lucide-react](https://lucide.dev/icons/). La liste des icônes disponibles est déclarée dans `src/lib/icon-map.ts` — ajoute-y une entrée si tu utilises une nouvelle icône.

## Structure technique

- `src/app` — pages (App Router)
- `src/components` — composants UI réutilisables
- `src/data` — contenu éditorial (JSON)
- `src/content/projects` — corps détaillé des projets (MDX)
- `src/lib` — types, utilitaires, navigation

## Déploiement

Le projet est un site Next.js standard, déployable sur Vercel, Netlify ou tout hébergeur Node.js (`npm run build && npm run start`).
