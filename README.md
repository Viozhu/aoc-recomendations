# Ashes of Creation - Equipment Recommender

Una aplicación web moderna que recomienda el mejor equipo para cada clase en Ashes of Creation, basándose en las prioridades de estadísticas de cada clase.

## 🎮 Características

- **8 Clases Jugables**: Tank, Bardo, Clérigo, Mago, Luchador, Guardabosques, Pícaro e Invocador
- **Recomendaciones Inteligentes**: Algoritmo que analiza stats y calcula scores basados en prioridades de clase
- **Datos en Tiempo Real**: Integración con la API de AOC Planner
- **UI Moderna**: Diseño oscuro gaming con Tailwind CSS
- **TypeScript**: Type-safe para mejor mantenibilidad
- **Caché Inteligente**: TanStack Query para optimizar requests

## 🚀 Tecnologías

- **React 18** - Framework UI
- **TypeScript** - Type safety
- **Vite** - Build tool ultra-rápido
- **TanStack Query** - Data fetching y caché
- **Tailwind CSS** - Utility-first CSS framework
- **pnpm** - Package manager eficiente

## 📦 Instalación

### Prerequisitos

- Node.js 18+ 
- pnpm (si no lo tienes: `npm install -g pnpm`)

### Pasos

```bash
# Clonar el repositorio (o navegar al directorio)
cd aoc-equipment-recommender

# Instalar dependencias con pnpm
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Abrir en el navegador
# http://localhost:5173
```

## 🏗️ Build para Producción

```bash
# Compilar TypeScript y crear build optimizado
pnpm build

# Preview del build de producción
pnpm preview
```

## 📁 Estructura del Proyecto

```
aoc-equipment-recommender/
├── src/
│   ├── components/          # Componentes React
│   │   ├── ClassSelector.tsx
│   │   ├── EquipmentCard.tsx
│   │   ├── StatPriority.tsx
│   │   └── RecommendationList.tsx
│   ├── data/
│   │   └── classData.ts     # Datos de las 8 clases
│   ├── hooks/
│   │   └── useEquipment.ts  # TanStack Query hooks
│   ├── types/
│   │   └── index.ts         # TypeScript types
│   ├── utils/
│   │   └── recommendationEngine.ts  # Algoritmo de recomendación
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Entry point
│   └── index.css            # Estilos globales Tailwind
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

## 🎯 Cómo Funciona

### 1. Selección de Clase
El usuario selecciona una de las 8 clases disponibles. Cada clase tiene prioridades de stats definidas:

- **Tank**: Constitution > Mentality > Strength
- **Mage**: Intelligence > Wisdom > Dexterity
- **Rogue**: Dexterity > Strength > Mentality
- etc.

### 2. Algoritmo de Recomendación
El sistema:
1. Obtiene todos los items del API de AOC Planner
2. Parsea el `statBlock` JSON de cada item
3. Calcula un score basado en:
   - Prioridades de stats de la clase
   - Rareza del item (Legendary > Epic > Rare, etc.)
   - Nivel del item
4. Ordena y muestra los top 3 items por slot

### 3. Visualización
- Cards de equipo con stats detallados
- Colores por rareza (Legendary = dorado, Epic = naranja, etc.)
- Barras de progreso para prioridades de stats
- Responsive design para móvil y desktop

## 🔧 Personalización

### Modificar Prioridades de Clase

Edita `src/data/classData.ts`:

```typescript
TANK: {
  statPriorities: [
    { stat: 'Constitution', priority: 1, ... },
    { stat: 'Mentality', priority: 2, ... },
    // Añadir o modificar prioridades
  ]
}
```

### Ajustar Algoritmo de Score

Edita `src/utils/recommendationEngine.ts`:

```typescript
// Modificar pesos de rareza
const RARITY_WEIGHTS = {
  'Legendary': 3.5,  // Cambiar multiplicador
  // ...
}
```

## 📊 API

Datos proporcionados por [AOC Planner](https://www.aoc-planner.gg/)

Endpoint: `https://www.aoc-planner.gg/api/get_constants`

## 🎨 Tema y Estilos

El proyecto usa Tailwind CSS con un tema personalizado:

- **Colores**: Paleta oscura gaming con acentos dorados
- **Fuentes**: 
  - Display: 'Cinzel' (títulos fantasy)
  - Body: 'Inter' (texto legible)
- **Animaciones**: Hover effects, transiciones suaves, loading spinners

## 🤝 Contribuir

Las contribuciones son bienvenidas! Áreas de mejora:

- [ ] Añadir filtros por nivel de item
- [ ] Comparación de builds
- [ ] Guardar builds favoritos
- [ ] Modo claro/oscuro
- [ ] Internacionalización (i18n)

## 📝 Licencia

MIT

## 🙏 Créditos

- Datos de equipo: [AOC Planner](https://www.aoc-planner.gg/)
- Información de clases: Ashes of Creation Wiki
# aoc-recomendations
