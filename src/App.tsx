import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { ClassSelector } from './components/ClassSelector';
import { StatPriority } from './components/StatPriority';
import { RecommendationList } from './components/RecommendationList';
import { LanguageSelector } from './components/LanguageSelector';
import { FloatingActionMenu } from './components/FloatingActionMenu';
import { useAllEquipment } from './hooks/useEquipment';
import { CLASSES } from './data/classData';
import type { ClassData } from './types';

const queryClient = new QueryClient();

function AppContent() {
    const { t } = useTranslation();
    const [selectedClass, setSelectedClass] = useState<ClassData | null>(null);
    const { data: equipment, isLoading, error } = useAllEquipment();

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="text-center py-12 px-4 bg-gradient-to-b from-aoc-darker/95 to-aoc-dark/80 border-b-2 border-aoc-gold/20 relative">
                {/* Language Selector */}
                <div className="absolute top-4 right-4">
                    <LanguageSelector />
                </div>

                <h1 className="font-display text-5xl md:text-6xl font-bold mb-2 text-gradient-gold glow-gold tracking-wider">
                    {t('title')}
                </h1>
                <p className="font-body text-lg md:text-xl font-light text-white/70 tracking-[4px] uppercase">
                    {t('subtitle')}
                </p>
            </header>

            {/* Main Content */}
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
                <ClassSelector
                    classes={CLASSES}
                    selectedClass={selectedClass}
                    onSelectClass={setSelectedClass}
                />

                {selectedClass && (
                    <div className="animate-[fadeIn_0.5s_ease-out]">
                        <StatPriority classData={selectedClass} />

                        {isLoading && (
                            <div className="flex flex-col items-center justify-center py-16 gap-6">
                                <div className="w-16 h-16 border-4 border-aoc-gold/10 border-t-aoc-gold rounded-full animate-spin" />
                                <p className="text-white/70 text-lg">{t('equipment.loading')}</p>
                            </div>
                        )}

                        {error && (
                            <div className="text-center py-12 px-8 bg-red-900/10 border border-red-500/30 rounded-xl text-red-300 text-lg">
                                <p>{t('equipment.error')}</p>
                            </div>
                        )}

                        {equipment && !isLoading && (
                            <>
                                <RecommendationList
                                    equipment={equipment}
                                    classData={selectedClass}
                                />
                                <FloatingActionMenu
                                    classData={selectedClass}
                                    equipment={equipment}
                                />
                            </>
                        )}
                    </div>
                )}

                {!selectedClass && (
                    <div className="text-center py-16 px-8 text-white/50 text-xl italic">
                        <p>{t('footer.selectClassPrompt')}</p>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="text-center py-8 px-4 bg-aoc-darkest/90 border-t border-white/10 text-white/50 text-sm">
                <p>
                    {t('footer.dataProvidedBy')}{' '}
                    <a
                        href="https://www.aoc-planner.gg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-aoc-gold hover:text-aoc-orange transition-colors hover:underline"
                    >
                        AOC Planner
                    </a>
                    {' - '}
                    {t('footer.createdBy')}{' '}
                    <a
                        href="https://github.com/viozhu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-aoc-gold hover:text-aoc-orange transition-colors hover:underline"
                    >
                        Viozhu
                    </a>
                </p>
            </footer>
        </div>
    );
}

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AppContent />
        </QueryClientProvider>
    );
}

export default App;
