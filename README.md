# Ashes of Creation - Equipment Recommender

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, open-source web application that recommends the best equipment for each class in **Ashes of Creation**, based on class-specific stat priorities and real-time data.

![Application Preview](https://github.com/Viozhu/aoc-recomendations/assets/placeholder.png)

## 🌟 Features

*   **🛡️ 8 Playable Classes**: Tailored recommendations for Tank, Bard, Cleric, Mage, Fighter, Ranger, Rogue, and Summoner.
*   **🧠 Intelligent Algorithm**: Calculates equipment scores based on:
    *   Class Stat Priorities (e.g., Int > Wis > Dex for Mages)
    *   Item Rarity (Legendary, Epic, etc.)
    *   Item Level
*   **⚡ Real-Time Data**: Integrates directly with the [AOC Planner API](https://www.aoc-planner.gg/) for up-to-date item stats.
*   **🌍 Internationalization (i18n)**: Full support for English and Spanish (Español).
*   **🎨 Floating Quick Menu**:
    *   Visual "Stat Priorities" breakdown for the selected class.
    *   Quick navigation to any equipment slot (Helmet, Chest, Weapons, etc.) with smooth scrolling.
*   **🖼️ Visual Richness**: Displays equipment icons with rarity-colored borders and detailed tooltips for hidden stats.
*   **📱 Responsive Design**: Optimized for both desktop and mobile devices using a dark gaming aesthetic.

## 🚀 Technologies

*   **[React 18](https://react.dev/)**: Core UI framework.
*   **[TypeScript](https://www.typescriptlang.org/)**: For static type safety and better developer experience.
*   **[Vite](https://vitejs.dev/)**: Ultra-fast build tool and development server.
*   **[TanStack Query](https://tanstack.com/query/latest)**: Powerful data fetching and caching.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for custom design.
*   **[i18next](https://www.i18next.com/)**: Internationalization framework.
*   **[pnpm](https://pnpm.io/)**: Efficient package manager.

## 📦 Getting Started

### Prerequisites

*   **Node.js**: Version 18 or higher.
*   **pnpm**: Recommended package manager (`npm install -g pnpm`).

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Viozhu/aoc-recomendations.git
    cd aoc-recomendations
    ```

2.  **Install dependencies**:
    ```bash
    pnpm install
    ```

3.  **Start development server**:
    ```bash
    pnpm dev
    ```

4.  **Open in browser**:
    Navigate to `http://localhost:5173`.

## 🏗️ Building for Production

To create an optimized production build:

```bash
# Build the project
pnpm build

# Preview the production build locally
pnpm preview
```

## 📂 Project Structure

```
aoc-equipment-recommender/
├── src/
│   ├── components/          # React components (EquipmentCard, RecommendationList, etc.)
│   ├── data/
│   │   └── classData.ts     # Configuration for the 8 classes and their stat weights
│   ├── hooks/
│   │   └── useEquipment.ts  # Custom hooks for fetching API data
│   ├── i18n/                # Translation files and configuration
│   ├── types/               # TypeScript interfaces
│   ├── utils/
│   │   └── recommendationEngine.ts  # Core logic for scoring items
│   └── App.tsx              # Main entry point
├── public/                  # Static assets
└── ...config files
```

## 🛠️ Configuration

### Modifying Class Priorities

You can adjust how the recommender values different stats for each class by editing `src/data/classData.ts`:

```typescript
// Example: Adjusting Tank priorities
tank: {
    statPriorities: [
        { stat: 'Constitution', priority: 1, ... },
        { stat: 'Mentality', priority: 2, ... },
        // ...
    ]
}
```

### Adjusting Scoring Algorithm

The scoring logic allows for tweaking rarity weights and multipliers in `src/utils/recommendationEngine.ts`:

```typescript
const RARITY_WEIGHTS = {
    'Legendary': 3.5,
    'Epic': 2.5,
    // ...
};
```

## 🤝 Contributing

Contributions are welcome! Whether it's reporting a bug, suggesting a feature, or submitting a pull request, we appreciate your help.

Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before getting started.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

*   **[AOC Planner](https://www.aoc-planner.gg/)**: For providing the comprehensive equipment API and icons.
*   **Ashes of Creation Community**: For the class data and stat theorycrafting.
