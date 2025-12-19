import type { ClassData, ClassesMap } from '../types';

export const CLASSES: ClassesMap = {
    TANK: {
        id: 'tank',
        name: 'Tank',
        nameEn: 'Tank',
        role: 'Threat control and mitigation',
        description: 'Specialist in absorbing damage and protecting the group',
        statPriorities: [
            { stat: 'Constitution', priority: 1, label: 'Constitution', reason: 'constitution' },
            { stat: 'Mentality', priority: 2, label: 'Mentality', reason: 'mentality' },
            { stat: 'Strength', priority: 3, label: 'Strength', reason: 'strength' }
        ],
        color: '#8B4513',
        gradient: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)'
    },
    BARD: {
        id: 'bard',
        name: 'Bard',
        nameEn: 'Bard',
        role: 'Area support, buffs and utility',
        description: 'Master of songs that empower the group',
        statPriorities: [
            { stat: 'Wisdom', priority: 1, label: 'Wisdom', reason: 'wisdom' },
            { stat: 'Mentality', priority: 2, label: 'Mentality', reason: 'mentality' },
            { stat: 'Charisma', priority: 3, label: 'Charisma', reason: 'charisma' }
        ],
        color: '#9370DB',
        gradient: 'linear-gradient(135deg, #9370DB 0%, #BA55D3 100%)'
    },
    CLERIC: {
        id: 'cleric',
        name: 'Cleric',
        nameEn: 'Cleric',
        role: 'Healing and divine protection',
        description: 'Divine healer who keeps the group alive',
        statPriorities: [
            { stat: 'Intelligence', priority: 1, label: 'Intelligence', reason: 'intelligence' },
            { stat: 'Wisdom', priority: 2, label: 'Wisdom', reason: 'wisdom' },
            { stat: 'Constitution', priority: 3, label: 'Constitution', reason: 'constitution' }
        ],
        color: '#FFD700',
        gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
    },
    MAGE: {
        id: 'mage',
        name: 'Mage',
        nameEn: 'Mage',
        role: 'Explosive magical damage and area control',
        description: 'Master of arcane magic and elemental destruction',
        statPriorities: [
            { stat: 'Intelligence', priority: 1, label: 'Intelligence', reason: 'intelligence' },
            { stat: 'Wisdom', priority: 2, label: 'Wisdom', reason: 'wisdom' },
            { stat: 'Dexterity', priority: 3, label: 'Dexterity', reason: 'dexterity' }
        ],
        color: '#4169E1',
        gradient: 'linear-gradient(135deg, #4169E1 0%, #1E90FF 100%)'
    },
    FIGHTER: {
        id: 'fighter',
        name: 'Fighter',
        nameEn: 'Fighter',
        role: 'Sustained physical damage and constant pressure',
        description: 'Melee warrior with consistent damage',
        statPriorities: [
            { stat: 'Strength', priority: 1, label: 'Strength', reason: 'strength' },
            { stat: 'Constitution', priority: 2, label: 'Constitution', reason: 'constitution' },
            { stat: 'Dexterity', priority: 3, label: 'Dexterity', reason: 'dexterity' }
        ],
        color: '#DC143C',
        gradient: 'linear-gradient(135deg, #DC143C 0%, #FF6347 100%)'
    },
    RANGER: {
        id: 'ranger',
        name: 'Ranger',
        nameEn: 'Ranger',
        role: 'Ranged physical damage and tracking',
        description: 'Expert archer with ranged combat mastery',
        statPriorities: [
            { stat: 'Dexterity', priority: 1, label: 'Dexterity', reason: 'dexterity' },
            { stat: 'Strength', priority: 2, label: 'Strength', reason: 'strength' },
            { stat: 'Constitution', priority: 3, label: 'Constitution', reason: 'constitution' }
        ],
        color: '#228B22',
        gradient: 'linear-gradient(135deg, #228B22 0%, #32CD32 100%)'
    },
    ROGUE: {
        id: 'rogue',
        name: 'Rogue',
        nameEn: 'Rogue',
        role: 'Stealth, critical damage and target elimination',
        description: 'Stealthy assassin specialized in devastating criticals',
        statPriorities: [
            { stat: 'Dexterity', priority: 1, label: 'Dexterity', reason: 'dexterity' },
            { stat: 'Strength', priority: 2, label: 'Strength', reason: 'strength' },
            { stat: 'Mentality', priority: 3, label: 'Mentality', reason: 'mentality' }
        ],
        color: '#8B008B',
        gradient: 'linear-gradient(135deg, #8B008B 0%, #9932CC 100%)'
    },
    SUMMONER: {
        id: 'summoner',
        name: 'Summoner',
        nameEn: 'Summoner',
        role: 'Extreme versatility through pets and entities',
        description: 'Master of summons with shared power',
        statPriorities: [
            { stat: 'Intelligence', priority: 1, label: 'Intelligence', reason: 'intelligence' },
            { stat: 'Wisdom', priority: 2, label: 'Wisdom', reason: 'wisdom' },
            { stat: 'Constitution', priority: 3, label: 'Constitution', reason: 'constitution' }
        ],
        color: '#20B2AA',
        gradient: 'linear-gradient(135deg, #20B2AA 0%, #48D1CC 100%)'
    }
};

export const STAT_ABBREVIATIONS: Record<string, string> = {
    'Strength': 'STR',
    'Dexterity': 'DEX',
    'Intelligence': 'INT',
    'Wisdom': 'WIS',
    'Constitution': 'CON',
    'Mentality': 'MEN',
    'Charisma': 'CHA'
};
