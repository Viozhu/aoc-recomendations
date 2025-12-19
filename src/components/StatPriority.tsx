import React from 'react';
import { useTranslation } from 'react-i18next';
import type { ClassData } from '../types';

interface StatPriorityProps {
    classData: ClassData;
}

export const StatPriority: React.FC<StatPriorityProps> = ({ classData }) => {
    const { t } = useTranslation();

    return (
        <div className="bg-aoc-darker/80 border border-white/10 rounded-xl p-6 mb-8">
            <h3 className="font-display text-2xl font-semibold mb-6 text-aoc-gold">
                {t('stats.priorities')}
            </h3>
            <div className="flex flex-col gap-5">
                {classData.statPriorities.map((stat, index) => {
                    // Get the stat name in lowercase for translation key
                    const statKey = stat.label.toLowerCase();

                    return (
                        <div
                            key={index}
                            className="p-4 bg-black/20 rounded-lg border-l-4 transition-all duration-300 hover:bg-black/30 hover:translate-x-1"
                            style={{ borderLeftColor: 'rgba(255, 255, 255, 0.2)' }}
                        >
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-2">
                                <span className="inline-flex items-center justify-center w-7 h-7 bg-gradient-to-br from-aoc-gold to-aoc-orange text-black font-bold text-sm rounded-full">
                                    #{stat.priority}
                                </span>
                                <span className="font-semibold text-white/90">
                                    {t(`stats.${statKey}`)}
                                </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="h-2 bg-white/5 rounded-full overflow-hidden my-2">
                                <div
                                    className="h-full rounded-full transition-all duration-700 ease-out animate-slide-in"
                                    style={{
                                        width: `${100 - (index * 20)}%`,
                                        background: classData.gradient
                                    }}
                                />
                            </div>

                            {/* Reason - using class-specific translation */}
                            <p className="text-sm text-white/60 leading-relaxed mt-2">
                                {t(`stats.${classData.id}.${stat.reason}`)}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
