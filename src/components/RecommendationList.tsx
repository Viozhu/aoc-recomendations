import React from 'react';
import { useTranslation } from 'react-i18next';
import type { Equipment, ClassData, Rarity } from '../types';
import { getRecommendationsBySlot } from '../utils/recommendationEngine';
import { EquipmentCard } from './EquipmentCard';

interface RecommendationListProps {
    equipment: Equipment[];
    classData: ClassData;
    targetRarity?: Rarity;
}

// Slot translation mapping
const SLOT_KEYS: Record<string, string> = {
    'Helmets': 'slots.Helmets',
    'Shoulders': 'slots.Shoulders',
    'Chests': 'slots.Chests',
    'Wrists': 'slots.Wrists',
    'Hands': 'slots.Hands',
    'Belts': 'slots.Belts',
    'Legs': 'slots.Legs',
    'Feet': 'slots.Feet',
    'Backs': 'slots.Backs',
    'necklaces': 'slots.necklaces',
    'earrings': 'slots.earrings',
    'rings': 'slots.rings',
    'mhWeaponItemsByType': 'slots.mhWeaponItemsByType',
    'rngWeaponItemsByType': 'slots.rngWeaponItemsByType',
    'meleeOffhandItems': 'slots.meleeOffhandItems',
    'rangedOffhandItems': 'slots.rangedOffhandItems'
};

export const RecommendationList: React.FC<RecommendationListProps> = ({
    equipment,
    classData,
    targetRarity = 'Legendary'
}) => {
    const { t } = useTranslation();
    const recommendations = getRecommendationsBySlot(equipment, classData, {
        topN: 10,
        targetRarity
    });

    const slots = Object.keys(recommendations).filter(
        slot => recommendations[slot].length > 0
    );


    if (slots.length === 0) {
        return (
            <div className="text-center py-12 text-white/50 text-lg">
                <p>{t('equipment.noRecommendations')}</p>
            </div>
        );
    }

    return (
        <div className="mt-8">
            <h3 className="font-display text-3xl font-bold text-center mb-8 text-gradient-gold">
                {t('equipment.recommended')}
            </h3>
            <div className="flex flex-col gap-8">
                {slots.map(slot => (
                    <div
                        id={`slot-${slot}`}
                        key={slot}
                        className="bg-aoc-darker/60 border border-white/10 rounded-xl p-6"
                    >
                        <h4 className="font-display text-xl font-semibold mb-4 text-aoc-gold pb-3 border-b-2 border-aoc-gold/20">
                            {t(SLOT_KEYS[slot] || slot)}
                        </h4>
                        <div className="flex gap-4 overflow-x-auto pb-2 snap-x [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-aoc-gold/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-aoc-gold/40">
                            {recommendations[slot].map((item, index) => (
                                <div key={`${item.itemName}-${index}`} className="min-w-[320px] max-w-[320px] snap-start">
                                    <EquipmentCard
                                        equipment={item}
                                        targetRarity={targetRarity}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
