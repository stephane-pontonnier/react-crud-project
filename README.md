# React Typescript
Créer une application React + TypeScript pour effectuer un CRUD (Create, Read, Update, Delete) sur une API REST est un cas d’usage courant. Voici une structure de base complète pour démarrer rapidement.
## Objectifs
Créer une application React avec TypeScript qui permet d'afficher, ajouter, modifier et supprimer des utilisateurs à partir d’une API REST.
## Explication de la structure du projet
src/
├── api/
│   └── userApi.ts
├── components/
│   ├── UserForm.tsx
│   └── UserList.tsx
├── types/
│   └── User.ts
├── App.tsx
└── main.tsx
### Vue d'ensemble
`src/` est le dossier principal du code source de l'application. À l’intérieur, tu organises ton projet en plusieurs sous-dossiers pour séparer les responsabilités : API, composants, types, etc.
### Détail dossier par dossier
`api/`

Contient les fichiers qui interagissent avec des services ou une API (ex : REST, fetch).

- `userApi.ts `:

  - Contient probablement des fonctions comme fetchUsers, createUser, updateUser, etc.
  - C’est là que tu fais les appels réseau pour récupérer ou envoyer des données utilisateur.
  
`components/`

Contient tous les composants React réutilisables de l’application.

- `UserForm.tsx` :
  - Composant pour créer ou modifier un utilisateur.
  - Contient sûrement un formulaire avec des champs (nom, email, etc.).
 
- `UserList.tsx` :
  - Composant qui affiche la liste des utilisateurs.
  - Peut inclure un bouton pour modifier/supprimer un utilisateur.
  
fff
