## Next JS Starter Template

Use PNPM (would love to use Bun but too much stuff breaks)

Uses

- Next JS
- Tailwind CSS
- TypeScript
- ESLint
- ZSA for Server Actions
- Shadcn for UI Components
- Next Auth
- Drizzle + Postgres (using @paralleldrive/cuid2 for id generation)

## Getting Started

Search for `change_me` and replace with your project name

First start your database

```bash
./start-database.sh
```

Run your drizzle migrations

```bash
pnpm run db:generate

pnpm run db:migrate
```

Create your auth secret

```bash
npx auth secret
```


First, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.