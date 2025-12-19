import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
    en: {
        translation: {
            // Header
            title: 'Ashes of Creation',
            subtitle: 'Equipment Recommender',

            // Class Selector
            selectClass: 'Select Your Class',

            // Classes
            classes: {
                tank: {
                    name: 'Tank',
                    role: 'Threat control and mitigation',
                    description: 'Specialist in absorbing damage and protecting the group'
                },
                bard: {
                    name: 'Bard',
                    role: 'Area support, buffs and utility',
                    description: 'Master of songs that empower the group'
                },
                cleric: {
                    name: 'Cleric',
                    role: 'Healing and divine protection',
                    description: 'Divine healer who keeps the group alive'
                },
                mage: {
                    name: 'Mage',
                    role: 'Explosive magical damage and area control',
                    description: 'Master of arcane magic and elemental destruction'
                },
                fighter: {
                    name: 'Fighter',
                    role: 'Sustained physical damage and constant pressure',
                    description: 'Melee warrior with consistent damage'
                },
                ranger: {
                    name: 'Ranger',
                    role: 'Ranged physical damage and tracking',
                    description: 'Expert archer with ranged combat mastery'
                },
                rogue: {
                    name: 'Rogue',
                    role: 'Stealth, critical damage and target elimination',
                    description: 'Stealthy assassin specialized in devastating criticals'
                },
                summoner: {
                    name: 'Summoner',
                    role: 'Extreme versatility through pets and entities',
                    description: 'Master of summons with shared power'
                }
            },

            // Stats
            stats: {
                priorities: 'Stat Priorities',
                strength: 'Strength (STR)',
                dexterity: 'Dexterity (DEX)',
                intelligence: 'Intelligence (INT)',
                wisdom: 'Wisdom (WIS)',
                constitution: 'Constitution (CON)',
                mentality: 'Mentality (MEN)',
                charisma: 'Charisma (CHA)',

                // Tank stat reasons
                tank: {
                    constitution: 'More health and physical mitigation',
                    mentality: 'Magical resistance and mana for "Courage" abilities',
                    strength: 'For physical damage scaling and aggro generation'
                },

                // Bard stat reasons
                bard: {
                    wisdom: 'Mana regeneration and casting speed',
                    mentality: 'Mana capacity and magical defense',
                    charisma: 'Enhances the effectiveness of hymns and dances'
                },

                // Cleric stat reasons
                cleric: {
                    intelligence: 'Increases healing power (Magical Power)',
                    wisdom: 'Vital to not run out of mana in long fights',
                    constitution: 'A dead cleric doesn\'t heal; you need to survive focus fire'
                },

                // Mage stat reasons
                mage: {
                    intelligence: 'Your main stat to maximize spell damage',
                    wisdom: 'Magical critical chance and magical penetration',
                    dexterity: 'Reduces cast time of heavy spells'
                },

                // Fighter stat reasons
                fighter: {
                    strength: 'Increases physical damage and the power of your "Momentum" abilities',
                    constitution: 'You\'re melee; you need health to survive in the center of the fight',
                    dexterity: 'Attack speed and physical accuracy'
                },

                // Ranger stat reasons
                ranger: {
                    dexterity: 'Bow damage, physical critical chance and evasion',
                    strength: 'Boosts base damage and armor penetration',
                    constitution: 'To survive Rogue jumps'
                },

                // Rogue stat reasons
                rogue: {
                    dexterity: 'Critical, evasion and movement speed',
                    strength: 'So your basic attacks and "Advantage" abilities hurt more',
                    mentality: 'Helps resist crowd control (CC) effects that could expose you'
                },

                // Summoner stat reasons
                summoner: {
                    intelligence: 'Scales your spell damage and your summon\'s stats',
                    wisdom: '"Essence" management and regeneration to keep your pet active',
                    constitution: 'You share damage with your pets; you need a high health pool'
                }
            },

            // Equipment
            equipment: {
                recommended: 'Recommended Equipment',
                score: 'Score',
                level: 'Level',
                loading: 'Loading equipment...',
                error: 'Error loading equipment. Please try again.',
                noRecommendations: 'No equipment recommendations found for this class.',
                moreStats: 'more...'
            },

            slots: {
                Helmets: 'Helmet',
                Shoulders: 'Shoulders',
                Chests: 'Chest',
                Wrists: 'Wrists',
                Hands: 'Gloves',
                Belts: 'Waist',
                Legs: 'Legs',
                Feet: 'Boots',
                Backs: 'Cloak',
                necklaces: 'Necklace',
                earrings: 'Earring',
                rings: 'Ring',
                mhWeaponItemsByType: 'Main Hand Weapon',
                rngWeaponItemsByType: 'Ranged Weapon',
                meleeOffhandItems: 'Offhand / Shield',
                rangedOffhandItems: 'Ranged Offhand'
            },

            // Footer
            footer: {
                dataProvidedBy: 'Equipment data provided by',
                selectClassPrompt: 'Select a class to see equipment recommendations',
                createdBy: 'Created by'
            },

            // Language Selector
            language: {
                select: 'Language',
                english: 'English',
                spanish: 'Spanish'
            },

            // Common
            common: {
                navigation: 'Navigation'
            }
        }
    },
    es: {
        translation: {
            // Header
            title: 'Ashes of Creation',
            subtitle: 'Recomendador de Equipo',

            // Class Selector
            selectClass: 'Selecciona tu Clase',

            // Classes
            classes: {
                tank: {
                    name: 'Tanque',
                    role: 'Control de amenazas y mitigación',
                    description: 'Especialista en absorber daño y proteger al grupo'
                },
                bard: {
                    name: 'Bardo',
                    role: 'Soporte de área, buffs y utilidad',
                    description: 'Maestro de canciones que potencia al grupo'
                },
                cleric: {
                    name: 'Clérigo',
                    role: 'Sanación y protección divina',
                    description: 'Sanador divino que mantiene vivo al grupo'
                },
                mage: {
                    name: 'Mago',
                    role: 'Daño mágico explosivo y control de área',
                    description: 'Maestro de la magia arcana y destrucción elemental'
                },
                fighter: {
                    name: 'Luchador',
                    role: 'Daño físico sostenido y presión constante',
                    description: 'Guerrero cuerpo a cuerpo con daño constante'
                },
                ranger: {
                    name: 'Guardabosques',
                    role: 'Daño físico a distancia y rastreo',
                    description: 'Arquero experto con dominio del combate a distancia'
                },
                rogue: {
                    name: 'Pícaro',
                    role: 'Sigilo, daño crítico y eliminación de objetivos',
                    description: 'Asesino sigiloso especializado en críticos devastadores'
                },
                summoner: {
                    name: 'Invocador',
                    role: 'Versatilidad extrema mediante mascotas y entidades',
                    description: 'Maestro de invocaciones con poder compartido'
                }
            },

            // Stats
            stats: {
                priorities: 'Prioridades de Stats',
                strength: 'Fuerza (STR)',
                dexterity: 'Destreza (DEX)',
                intelligence: 'Inteligencia (INT)',
                wisdom: 'Sabiduría (WIS)',
                constitution: 'Constitución (CON)',
                mentality: 'Mentalidad (MEN)',
                charisma: 'Carisma (CHA)',

                // Tank stat reasons
                tank: {
                    constitution: 'Más vida y mitigación física',
                    mentality: 'Resistencia mágica y maná para habilidades de "Courage"',
                    strength: 'Para escalado de daño físico y generación de aggro'
                },

                // Bard stat reasons
                bard: {
                    wisdom: 'Regeneración de maná y velocidad de lanzamiento',
                    mentality: 'Capacidad de maná y defensa mágica',
                    charisma: 'Potencia la efectividad de himnos y bailes'
                },

                // Cleric stat reasons
                cleric: {
                    intelligence: 'Aumenta el poder de sanación (Magical Power)',
                    wisdom: 'Vital para no quedarse sin maná en peleas largas',
                    constitution: 'Un clérigo muerto no cura; necesitas aguantar el focus'
                },

                // Mage stat reasons
                mage: {
                    intelligence: 'Tu stat principal para maximizar el daño de hechizos',
                    wisdom: 'Probabilidad de crítico mágico y penetración mágica',
                    dexterity: 'Reduce el tiempo de casteo de los hechizos más pesados'
                },

                // Fighter stat reasons
                fighter: {
                    strength: 'Aumenta el daño físico y el poder de tus habilidades de "Momentum"',
                    constitution: 'Eres un melé; necesitas vida para sobrevivir en el centro de la pelea',
                    dexterity: 'Velocidad de ataque y precisión física'
                },

                // Ranger stat reasons
                ranger: {
                    dexterity: 'Daño con arcos, probabilidad de crítico físico y evasión',
                    strength: 'Potencia el daño base y la penetración de armadura',
                    constitution: 'Para sobrevivir a los saltos de los Rogues'
                },

                // Rogue stat reasons
                rogue: {
                    dexterity: 'Crítico, evasión y velocidad de movimiento',
                    strength: 'Para que tus golpes básicos y habilidades de "Advantage" duelan más',
                    mentality: 'Ayuda a resistir efectos de control (CC) que podrían exponerte'
                },

                // Summoner stat reasons
                summoner: {
                    intelligence: 'Escala el daño de tus hechizos y las estadísticas de tu invocación',
                    wisdom: 'Gestión de "Essence" y regeneración para mantener a la mascota activa',
                    constitution: 'Compartes daño con tus mascotas; necesitas un pool de vida alto'
                }
            },

            // Equipment
            equipment: {
                recommended: 'Equipo Recomendado',
                score: 'Puntuación',
                level: 'Nivel',
                loading: 'Cargando equipo...',
                error: 'Error al cargar el equipo. Por favor, intenta de nuevo.',
                noRecommendations: 'No se encontraron recomendaciones de equipo para esta clase.',
                moreStats: 'más...'
            },

            // Slots
            slots: {
                Helmets: 'Casco',
                Shoulders: 'Hombros',
                Chests: 'Pecho',
                Wrists: 'Muñecas',
                Hands: 'Guantes',
                Belts: 'Cintura',
                Legs: 'Piernas',
                Feet: 'Botas',
                Backs: 'Capa',
                necklaces: 'Collar',
                earrings: 'Pendiente',
                rings: 'Anillo',
                mhWeaponItemsByType: 'Arma Principal',
                rngWeaponItemsByType: 'Arma a Distancia',
                meleeOffhandItems: 'Mano Secundaria / Escudo',
                rangedOffhandItems: 'Mano Secundaria a Distancia'
            },

            // Footer
            footer: {
                dataProvidedBy: 'Datos del equipo proporcionados por',
                selectClassPrompt: 'Selecciona una clase para ver las recomendaciones de equipo',
                createdBy: 'Creado por'
            },

            // Language Selector
            language: {
                select: 'Idioma',
                english: 'Inglés',
                spanish: 'Español'
            },

            // Common
            common: {
                navigation: 'Navegación'
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // Default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // React already escapes values
        }
    });

export default i18n;
