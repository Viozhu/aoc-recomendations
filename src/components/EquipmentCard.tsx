import React from 'react';
import { useTranslation } from 'react-i18next';
import type { ScoredEquipment, Rarity } from '../types';
import { getStatBreakdown } from '../utils/recommendationEngine';

interface EquipmentCardProps {
    equipment: ScoredEquipment;
    targetRarity?: Rarity;
}

const RARITY_COLORS: Record<Rarity, string> = {
    Common: '#9d9d9d',
    Uncommon: '#1eff00',
    Rare: '#0070dd',
    Heroic: '#a335ee',
    Epic: '#ff8000',
    Legendary: '#e6cc80',
    Artifact: '#e5cc80'
};

// Base URL for AOC Planner images
const IMAGE_BASE_URL = 'https://www.aoc-planner.gg';

export const EquipmentCard: React.FC<EquipmentCardProps> = ({
    equipment,
    targetRarity = 'Legendary'
}) => {
    const { t } = useTranslation();
    const stats = getStatBreakdown(equipment, targetRarity);
    const rarityColor = RARITY_COLORS[equipment.rarityMax];

    // Construct full image URL - ensure proper slash handling
    const imageUrl = equipment.icon_path
        ? `${IMAGE_BASE_URL}${equipment.icon_path.startsWith('/') ? '' : '/'}${equipment.icon_path}`
        : null;

    return (
        <div
            className="relative bg-aoc-darker/90 border rounded-lg p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:z-40 h-full flex flex-col"
            style={{
                borderColor: 'rgba(255, 255, 255, 0.1)',
                boxShadow: `0 0 15px ${rarityColor}40`
            }}
        >
            {/* Rarity Accent Bar */}
            <div
                className="absolute top-0 left-0 w-1 h-full opacity-80 rounded-tl-lg rounded-bl-lg"
                style={{ background: rarityColor }}
            />

            {/* Header with Image */}
            <div className="flex gap-4 mb-3 ml-2">
                {/* Equipment Image */}
                {imageUrl && (
                    <div
                        className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 bg-black/40"
                        style={{ borderColor: rarityColor }}
                    >
                        <img
                            src={imageUrl}
                            alt={equipment.itemName}
                            className="w-full h-full object-cover bg-gray-500/30"
                            onError={(e) => {
                                // Hide image if it fails to load
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                    </div>
                )}

                {/* Item Info */}
                <div className="flex-1 min-w-0">
                    <h4
                        className="font-display text-lg font-semibold mb-2 leading-tight"
                        style={{ color: rarityColor }}
                    >
                        {equipment.itemName}
                    </h4>
                    <div className="flex gap-2 flex-wrap text-xs">
                        <span className="px-2 py-0.5 bg-white/5 rounded">{equipment.typeCol}</span>
                        <span className="px-2 py-0.5 bg-white/5 rounded">
                            {t('equipment.level')} {equipment.level}
                        </span>
                        <span
                            className="px-2 py-0.5 bg-white/5 rounded"
                            style={{ color: rarityColor }}
                        >
                            {equipment.rarityMax}
                        </span>
                    </div>
                </div>

                {/* Score Badge */}
                <div className="text-center min-w-[60px] flex-shrink-0">
                    <div className="text-2xl font-bold text-aoc-gold leading-none">
                        {equipment.score}
                    </div>
                    <div className="text-[10px] text-white/50 uppercase tracking-wider">
                        {t('equipment.score')}
                    </div>
                </div>
            </div>

            {/* Stats */}
            {stats.length > 0 && (
                <div className="my-3 p-3 bg-black/20 rounded-md ml-2">
                    {stats.slice(0, 5).map((stat, index) => (
                        <div
                            key={index}
                            className={`flex justify-between items-center py-1 text-sm ${index !== stats.length - 1 && index !== 4 ? 'border-b border-white/5' : ''
                                }`}
                        >
                            <span className="text-white/70">{stat.name}</span>
                            <span className="text-green-400 font-semibold">+{stat.value}</span>
                        </div>
                    ))}
                    {stats.length > 5 && (
                        <div className="relative group mt-2 text-xs text-center cursor-help">
                            <span className="text-white/50 italic group-hover:text-white/70 transition-colors">
                                +{stats.length - 5} {t('equipment.moreStats')}
                            </span>

                            {/* Tooltip with hidden stats */}
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max min-w-[12rem] p-3 bg-aoc-darker border border-white/20 rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 backdrop-blur-sm">
                                {stats.slice(5).map((stat, index) => (
                                    <div key={index} className="flex justify-between items-center gap-4 py-1 text-xs border-b border-white/5 last:border-0">
                                        <span className="text-white/70">{stat.name}</span>
                                        <span className="text-green-400 font-semibold">+{stat.value}</span>
                                    </div>
                                ))}
                                {/* Arrow */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white/20" />
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Description */}
            {equipment.description && (
                <p className="text-xs text-white/50 italic leading-relaxed mt-3 pt-3 border-t border-white/5 ml-2">
                    {equipment.description}
                </p>
            )}
        </div>
    );
};
