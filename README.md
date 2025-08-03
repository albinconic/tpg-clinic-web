# Clinic Web

This project is a modern, high-performance rebuild of the original Webflow website — now migrated to **Next.js** and **TypeScript** for better scalability, maintainability, and performance.

---

### 🚀 Tech Stack

- **Next.js** 15 (App Router)
- **React** 19
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **PostCSS** for CSS processing
- **Mixpanel** for analytics
- **Font Awesome** for icons
- **React Slick** for sliders

---

### ✨ Migration Details

This website was originally built in **Webflow**. Nearly all components are migrated to a **modular and component-based architecture** using Next.js and TypeScript.

> ⚠️ A small number of legacy Webflow files remain — but over 90% of the site has been fully rebuilt using modern frontend practices.

The new structure follows **modern modular design principles**, with reusable components, scoped styles, and optimized performance.

---

### 📄 Environment Files

Make sure to create the following environment files in the root of your project:

- `.env.dev` — for development environment (used with `npm run build:dev`)
- `.env.local` — for local development (used automatically by `next dev`)
- `.env.production` — for production server (used with `npm run build` or `npm run build:prod`)

Each file should contain the required environment variables in the format:

```bash
NEXT_PUBLIC_API_URL=https://example.com/api
NEXT_PUBLIC_MIXPANEL_TOKEN=your-token-here
```

---

### 🛠️ Development & Scripts

To run the project locally or in production, follow the steps below:

#### 📦 1. Install dependencies

```bash
npm install
```

#### 🧪 2. Development (local)

Start the app in development mode with Tailwind CSS watching enabled:

```bash
npm run dev:all
```

This runs:
- `npm run dev`: Starts the Next.js dev server at `http://localhost:3000` using **Turbopack** for faster rebuilds.
- `npm run dev:css`: Watches and compiles Tailwind CSS from `src/styles/global.css` into `public/css/tailwind.css` using PostCSS.

Changes to code or styles are reflected instantly via **hot reload**.

#### 🧼 Run linter manually

```bash
npm run lint
```

---

### 🏗️ Production

To build and run the app in production:

```bash
npm run build:prod
```

This runs:
- `npm run build`: Compiles and optimizes the app for production.
- `npm run start`: Starts the Next.js server at `http://localhost:3000` in production mode (SSR).

---

### 🌐 Custom environment build (for dev/staging)

To simulate production build using `.env.dev` variables:

```bash
npm run build:dev
```

This command copies `.env.dev` into `.env.production` before building and starting the server.

---

### 🎨 Tailwind-only scripts

If you want to build or watch Tailwind CSS without starting the Next.js server:

```bash
npm run build:css     # one-time Tailwind build
npm run dev:css       # watch mode (for development)
```

These use PostCSS to compile `src/styles/global.css` into `public/css/tailwind.css`.

---

All scripts are defined in `package.json` and optimized for a modular and modern frontend development workflow.
