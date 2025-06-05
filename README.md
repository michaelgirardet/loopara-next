# Mon Savoir-Faire

Plateforme B2B de mise en relation entre entreprises industrielles/BTP et indépendants techniques.

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Stack technique](#stack-technique)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Scripts disponibles](#scripts-disponibles)
- [Conventions](#conventions)
- [Roadmap](#roadmap)
- [Licence](#licence)

## Fonctionnalités

- Inscription (entreprise / indépendant)
- Validation manuelle des comptes
- Abonnements freemium/premium avec Stripe
- Publication et consultation d’offres
- Tableau de bord personnalisé
- Interface d'administration

## Stack technique

- **Framework** : Next.js (App Router)
- **Styling** : Tailwind CSS
- **BDD** : PostgreSQL + Prisma
- **Auth** : NextAuth.js
- **Paiement** : Stripe
- **Linting** : ESLint v9 (Flat config), Prettier

## Installation

```bash
git clone https://github.com/ton-org/mon-savoir-faire.git
cd mon-savoir-faire
npm install
npx prisma generate
```

DATABASE_URL=postgresql://USER:PASS@localhost:5432/mon_savoir_faire
NEXTAUTH_SECRET=ton_secret
STRIPE_SECRET_KEY=clef_stripe

---

### 7. **Utilisation / scripts disponibles**

Montre les commandes utiles du `package.json`.

```md
## Scripts disponibles

| Commande         | Description                    |
| ---------------- | ------------------------------ |
| `npm run dev`    | Démarrer le serveur de dev     |
| `npm run build`  | Générer la version production  |
| `npm run lint`   | Lancer ESLint (Flat config)    |
| `npm run format` | Formater le code avec Prettier |
```

## Conventions

### Branches

- `feature/nom-de-la-fonction`
- `fix/nom-du-bug`
- `chore/nom-technique`

## Roadmap post-MVP

- [ ] Intégration messagerie?
- [ ] App mobile?
- [ ] Système de notation?
- [ ] Matching intelligent?

## Licence

Projet privé – tous droits réservés © Mon Savoir-Faire 2025
