# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are avai# 🚀 Dear Coder

Welcome to **Dear Coder** — an AI Powered Technology Company.

We build modern digital solutions including:

✅ Website Development  
✅ Mobile App Development  
✅ AI Agent Development  
✅ Automation Systems  
✅ SaaS Products  
✅ UI/UX Design  

---

## 🌐 Live Website
👉 https://dearcoder.in

---

## 🧠 About Dear Coder

Dear Coder is a modern tech startup focused on building intelligent applications and AI-powered solutions for startups, businesses, and creators.

Our mission is to transform ideas into scalable technology.

---

## ⚙️ Tech Stack

- Next.js
- React
- Tailwind CSS
- Vercel Hosting
- AI Integrations

---

## ✨ Features

- Modern Responsive Design
- Fast Performance
- Startup Ready UI
- AI Friendly Architecture

---

## 📦 Installation

```bash
git clone https://github.com/MahtoVivek/dear-coder-official.git
cd dear-coder-official
npm install
npm run dev
```

---

## 🤝 Contributing

We welcome developers and innovators.

Feel free to fork and contribute.

---

## 📩 Contact

📧 Email: hello@dearcoder.in  
🌍 Website: https://dearcoder.in

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub.

---

© 2026 Dear Coderlable:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
