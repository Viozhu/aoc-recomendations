// Equipment API Types
export interface StatRange {
    min: number;
    max: number;
}

export interface StatValues {
    [statName: string]: StatRange;
}

export interface RarityStats {
    values: StatValues;
}

export interface StatDefinition {
    Section: string;
    is_percentage: string;
}

export interface StatBlock {
    statDefs: {
        [statName: string]: StatDefinition;
    };
    stats: {
        Common?: RarityStats;
        Uncommon?: RarityStats;
        Rare?: RarityStats;
        Heroic?: RarityStats;
        Epic?: RarityStats;
        Legendary?: RarityStats;
        Artifact?: RarityStats;
    };
}

export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Heroic' | 'Epic' | 'Legendary' | 'Artifact';

export interface Equipment {
    itemName: string;
    Slot: string;
    Category: string;
    typeCol: string;
    rarityMin: Rarity;
    rarityMax: Rarity;
    setBonusIds: string;
    statBlock: string; // JSON string
    icon_path: string;
    level: string;
    TwoHanded: string;
    tradeable: string;
    vendorable: string;
    description: string;
}

export interface EquipmentData {
    Helmets: Equipment[];
    Shoulders: Equipment[];
    Chests: Equipment[];
    Wrists: Equipment[];
    Hands: Equipment[];
    Belts: Equipment[];
    Legs: Equipment[];
    Feet: Equipment[];
    Backs: Equipment[];
    necklaces: Equipment[];
    earrings: Equipment[];
    rings: Equipment[];
    mhWeaponItemsByType: Equipment[];
    rngWeaponItemsByType: Equipment[];
    meleeOffhandItems: Equipment[];
    rangedOffhandItems: Equipment[];
    [key: string]: Equipment[];
}

export interface APIResponse {
    data: EquipmentData;
}

// Class and Recommendation Types
export interface StatPriority {
    stat: string;
    priority: number;
    label: string;
    reason: string;
}

export interface ClassData {
    id: string;
    name: string;
    nameEn: string;
    role: string;
    description: string;
    statPriorities: StatPriority[];
    color: string;
    gradient: string;
}

export interface ClassesMap {
    [key: string]: ClassData;
}

export interface ScoredEquipment extends Equipment {
    score: number;
}

export interface StatBreakdown {
    name: string;
    value: number;
}

export interface RecommendationOptions {
    slot?: string | null;
    topN?: number;
    minLevel?: number;
    targetRarity?: Rarity;
}

export interface RecommendationsBySlot {
    [slot: string]: ScoredEquipment[];
}
