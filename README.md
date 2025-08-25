# React Typescript
Créer une application React + TypeScript pour effectuer un CRUD (Create, Read, Update, Delete) sur une API REST est un cas d’usage courant. Voici une structure de base complète pour démarrer rapidement.
## :rocket: Objectifs
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

### :bricks: Vue d'ensemble
`src/` est le dossier principal du code source de l'application. À l’intérieur, tu organises ton projet en plusieurs sous-dossiers pour séparer les responsabilités : API, composants, types, etc.
### :file_folder: Détail dossier par dossier
:file_folder:`api/`

Contient les fichiers qui interagissent avec des services ou une API (ex : REST, fetch).

- `userApi.ts `:

  - Contient probablement des fonctions comme fetchUsers, createUser, updateUser, etc.
  - C’est là que tu fais les appels réseau pour récupérer ou envoyer des données utilisateur.
  
:file_folder:`components/`

Contient tous les composants React réutilisables de l’application.

- `UserForm.tsx` :
  - Composant pour créer ou modifier un utilisateur.
  - Contient sûrement un formulaire avec des champs (nom, email, etc.).
 
- `UserList.tsx` :
  - Composant qui affiche la liste des utilisateurs.
  - Peut inclure un bouton pour modifier/supprimer un utilisateur.
  
:file_folder:`types/`

Contient les types TypeScript partagés dans l’application.

- `User.ts` :

  - Définit probablement un type ou une interface comme :
  ```
  export interface User {
  id: number;
  name: string;
  email: string;
  }
  ```
  - Ce type est ensuite utilisé dans les composants, les appels API, etc.

:page_facing_up:`App.tsx`

- Le composant racine de ton application React.

- Il compose probablement l’interface principale en affichant <UserForm />, <UserList />, etc.

- C’est là que tu gères l’état global si tu n’utilises pas Redux ou autre.

:page_facing_up:`main.tsx`

- Point d’entrée de ton application.

- Monte le composant <App /> dans le DOM.

- Contenu typique :

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
## :white_check_mark: Résumé visuel

| Dossier/Fichier       | Rôle principal                          |
| :---------------------|:----------------------------------------| 
| `src/api/userApi.ts`  | Appels vers l’API                       |
| `src/components/`     | Composants React                        |
| `src/types/User.ts`   | Définition du type `User`               |
| `src/App.tsx`         | Composant racine de l’application       |
| `src/main.tsx`        | Point d’entrée de l’app, monte `<App />`|


