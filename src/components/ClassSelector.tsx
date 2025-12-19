import React from 'react';
import { useTranslation } from 'react-i18next';
import type { ClassData } from '../types';

interface ClassSelectorProps {
    classes: Record<string, ClassData>;
    selectedClass: ClassData | null;
    onSelectClass: (classData: ClassData) => void;
}

export const ClassSelector: React.FC<ClassSelectorProps> = ({
    classes,
    selectedClass,
    onSelectClass
}) => {
    const { t } = useTranslation();

    return (
        <div className="mb-12">
            <h2 className="font-display text-4xl font-bold text-center mb-8 text-gradient-gold glow-gold">
                {t('selectClass')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {Object.values(classes).map((classData) => (
                    <button
                        key={classData.id}
                        className={`
              relative bg-aoc-darker/80 border-2 rounded-xl p-6 cursor-pointer
              transition-all duration-300 ease-out text-left overflow-hidden
              hover:-translate-y-1 hover:shadow-2xl
              ${selectedClass?.id === classData.id
                                ? 'border-current shadow-2xl'
                                : 'border-white/10 hover:border-current'
                            }
            `}
                        onClick={() => onSelectClass(classData)}
                        style={{
                            color: classData.color,
                            boxShadow: selectedClass?.id === classData.id
                                ? `0 0 30px ${classData.color}`
                                : undefined
                        }}
                    >
                        {/* Gradient Background */}
                        <div
                            className={`absolute inset-0 transition-opacity duration-300 ${selectedClass?.id === classData.id ? 'opacity-15' : 'opacity-0 hover:opacity-10'
                                }`}
                            style={{ background: classData.gradient }}
                        />

                        {/* Content */}
                        <div className="relative z-10">
                            <div className="mb-3">
                                <h3 className="font-display text-2xl font-bold mb-1" style={{ color: classData.color }}>
                                    {t(`classes.${classData.id}.name`)}
                                </h3>
                                <span className="text-sm text-white/60 italic">{classData.nameEn}</span>
                            </div>
                            <p className="text-sm text-white/80 font-semibold mb-2">
                                {t(`classes.${classData.id}.role`)}
                            </p>
                            <p className="text-sm text-white/60 leading-relaxed">
                                {t(`classes.${classData.id}.description`)}
                            </p>
                        </div>

                        {/* Selected Indicator */}
                        {selectedClass?.id === classData.id && (
                            <div
                                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold text-white z-20 animate-pulse-glow"
                                style={{
                                    background: classData.gradient,
                                    '--tw-shadow-color': classData.color
                                } as React.CSSProperties}
                            >
                                ✓
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};
