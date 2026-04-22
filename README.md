# 🎨 Bento.me - Portfolio Personal

Un portfolio moderno y responsive construido con React, TypeScript y Vite, utilizando un diseño estilo Bento Grid para mostrar proyectos, redes sociales y experiencia profesional.

![Preview](https://img.shields.io/badge/React-19.2-61dafb?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.2-646cff?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=flat&logo=tailwindcss)

## ✨ Características

- 🎯 **Diseño Bento Grid** - Layout modular y visualmente atractivo
- 📱 **Totalmente Responsive** - Optimizado para móvil, tablet y desktop
- ♿ **Accesibilidad** - Cumple con estándares WCAG con roles ARIA y navegación por teclado
- 🎭 **Animaciones Fluidas** - Usando Framer Motion para transiciones suaves
- 🌗 **Modo Oscuro** - Soporte para temas claro y oscuro
- ⚡ **Rendimiento Optimizado** - Build rápido con Rolldown/Vite
- 🎨 **UI Components** - Componentes reutilizables con Radix UI
- 🔧 **Type-Safe** - 100% TypeScript con tipado estricto

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js 18+
- pnpm (recomendado) o npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/bento-me.git

# Navegar al directorio
cd bento-me

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

El sitio estará disponible en `http://localhost:5173`

## 📦 Scripts Disponibles

```bash
pnpm dev      # Servidor de desarrollo con HMR
pnpm build    # Build de producción
pnpm preview  # Preview del build de producción
pnpm lint     # Ejecutar ESLint
```

## 🛠️ Stack Tecnológico

### Core

- **React 19.2** - UI Library
- **TypeScript 5.9** - Type Safety
- **Vite 7.2** (Rolldown) - Build Tool & Dev Server

### Styling

- **Tailwind CSS 4.1** - Utility-First CSS
- **Class Variance Authority** - Component Variants
- **Framer Motion** - Animaciones

### UI Components

- **Radix UI** - Componentes accesibles sin estilos
- **Lucide React** - Iconos modernos
- **shadcn/ui** - Componentes pre-construidos

## 📁 Estructura del Proyecto

```
bento-me/
├── public/
│   ├── images/          # Imágenes estáticas
│   └── profile.webp     # Foto de perfil
├── src/
│   ├── components/
│   │   ├── cards/       # Componentes de tarjetas
│   │   │   ├── base/    # Tarjetas base reutilizables
│   │   │   ├── social/  # Tarjetas de redes sociales
│   │   │   └── work/    # Tarjetas de trabajo/proyectos
│   │   ├── icons/       # Iconos personalizados
│   │   └── ui/          # Componentes UI base
│   ├── constants/       # Configuraciones y presets
│   ├── lib/            # Utilidades
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Entry point
│   └── index.css       # Estilos globales
├── components.json     # Configuración shadcn/ui
└── vite.config.ts     # Configuración Vite
```

## 🎨 Personalización

### Agregar una Nueva Tarjeta Social

1. Crear el componente en `src/components/cards/social/`:

```tsx
import { SocialGalleryCard } from "../base/SocialGalleryCard";
import { MyIcon } from "../../icons/myicon";

export function MyCard() {
  return (
    <SocialGalleryCard
      icon={<MyIcon />}
      platform="Mi Plataforma"
      username="@usuario"
      url="https://..."
      // ... más props
    />
  );
}
```

2. Importarla y usarla en `App.tsx`

### Modificar Colores

Los colores están definidos en `src/index.css` usando variables CSS:

```css
:root {
  --primary: oklch(...);
  --secondary: oklch(...);
  /* ... */
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px (sm)
- **Desktop**: > 1024px (lg)

## ♿ Accesibilidad

- Navegación por teclado completa
- Roles ARIA semánticos
- Focus states visibles
- Soporte para `prefers-reduced-motion`
- Contraste de color accesible
- Tap targets mínimos de 44px en móvil

## 🔧 Configuración Avanzada

### ESLint Type-Aware

Para reglas de linting más estrictas:

```js
export default defineConfig([
  {
    files: ["**/*.{ts,tsx}"],
    extends: [tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      },
    },
  },
]);
```

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

---

Hecho con ❤️ usando React + TypeScript + Vite
