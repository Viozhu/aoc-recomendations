/**
 * Recommendation Engine for Ashes of Creation Equipment
 * Analyzes equipment stats and calculates scores based on class priorities
 */

import type {
    Equipment,
    StatBlock,
    Rarity,
    StatPriority,
    ClassData,
    ScoredEquipment,
    StatBreakdown,
    RecommendationOptions,
    RecommendationsBySlot
} from '../types';

const RARITY_WEIGHTS: Record<Rarity, number> = {
    'Common': 1,
    'Uncommon': 1.2,
    'Rare': 1.5,
    'Heroic': 2,
    'Epic': 2.5,
    'Legendary': 3.5,
    'Artifact': 5
};

/**
 * Parse the statBlock JSON string from equipment data
 */
function parseStatBlock(statBlockString: string): StatBlock | null {
    if (!statBlockString) return null;

    try {
        const statBlock: StatBlock = JSON.parse(statBlockString);
        return statBlock;
    } catch (e) {
        console.error('Error parsing statBlock:', e);
        return null;
    }
}

/**
 * Extract stat values for a specific rarity level
 */
function getStatsForRarity(statBlock: StatBlock, rarity: Rarity): Record<string, number> {
    if (!statBlock || !statBlock.stats || !statBlock.stats[rarity]) {
        return {};
    }

    const rarityStats = statBlock.stats[rarity]?.values;
    if (!rarityStats) return {};

    const stats: Record<string, number> = {};

    // Get the average value for each stat
    for (const [statName, range] of Object.entries(rarityStats)) {
        if (range.min !== undefined && range.max !== undefined) {
            stats[statName] = (range.min + range.max) / 2;
        }
    }

    return stats;
}

/**
 * Calculate equipment score based on class stat priorities
 */
export function calculateEquipmentScore(
    equipment: Equipment,
    classPriorities: StatPriority[],
    targetRarity: Rarity = 'Legendary'
): number {
    const statBlock = parseStatBlock(equipment.statBlock);
    if (!statBlock) return 0;

    const stats = getStatsForRarity(statBlock, targetRarity);
    if (Object.keys(stats).length === 0) return 0;

    let score = 0;

    // Calculate score based on stat priorities
    classPriorities.forEach((priorityStat, index) => {
        const priorityWeight = 1 / (index + 1); // Higher priority = higher weight
        const statName = priorityStat.stat;

        // Check for exact match or partial match in stat names
        for (const [equipStatName, value] of Object.entries(stats)) {
            if (equipStatName.includes(statName) || statName.includes(equipStatName)) {
                score += value * priorityWeight * 10;
            }
        }
    });

    // Apply rarity multiplier
    const rarityWeight = RARITY_WEIGHTS[equipment.rarityMax] || 1;
    score *= rarityWeight;

    return Math.round(score);
}

/**
 * Get recommended equipment for a class
 */
export function getRecommendedEquipment(
    allEquipment: Equipment[],
    classData: ClassData,
    options: RecommendationOptions = {}
): ScoredEquipment[] {
    const {
        slot = null,
        topN = 5,
        minLevel = 0,
        targetRarity = 'Legendary'
    } = options;

    if (!allEquipment || !classData) return [];

    // Filter by slot if specified
    let equipment = slot
        ? allEquipment.filter(item => item.Slot === slot)
        : allEquipment;

    // Filter by minimum level
    equipment = equipment.filter(item => {
        const level = parseInt(item.level) || 0;
        return level >= minLevel;
    });

    // Calculate scores and sort
    const scoredEquipment: ScoredEquipment[] = equipment
        .map(item => ({
            ...item,
            score: calculateEquipmentScore(item, classData.statPriorities, targetRarity)
        }))
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score);

    // Return top N items
    return scoredEquipment.slice(0, topN);
}

/**
 * Group equipment recommendations by slot
 */
export function getRecommendationsBySlot(
    allEquipment: Equipment[],
    classData: ClassData,
    options: RecommendationOptions = {}
): RecommendationsBySlot {
    const slots = allEquipment.map(item => item.Slot).filter((slot, index, self) => self.indexOf(slot) === index);
    const recommendations: RecommendationsBySlot = {};


    slots.forEach(slot => {
        recommendations[slot] = getRecommendedEquipment(allEquipment, classData, {
            ...options,
            slot
        });
    });
    console.log('recommendations', recommendations)
    return recommendations;
}

/**
 * Get stat breakdown for an equipment piece
 */
export function getStatBreakdown(equipment: Equipment, rarity: Rarity = 'Legendary'): StatBreakdown[] {
    const statBlock = parseStatBlock(equipment.statBlock);
    if (!statBlock) return [];

    const stats = getStatsForRarity(statBlock, rarity);

    return Object.entries(stats).map(([name, value]) => ({
        name,
        value: Math.round(value)
    }));
}
