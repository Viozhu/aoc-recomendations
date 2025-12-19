import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { ClassData, Equipment } from '../types';

interface FloatingActionMenuProps {
    classData: ClassData;
    equipment: Equipment[];
}

// Inline Icon Components
const Icons = {
    Stats: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
    ),
    Menu: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
    ),
    Close: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    ),
    // Equip Slot Icons (Generic forms)
    Helmet: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18v-2a6 6 0 0 0-12 0H3v2z" /><path d="M5 19V9a7 7 0 0 1 14 0v10" /></svg>,
    Armor: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3L2 8v13h20V8l-3-5H5z" /><path d="M12 22V8" /></svg>,
    Weapon: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 17.5L3 6V3h3l11.5 11.5" /><path d="M13 19l6-6" /><path d="M16 16l4 4" /><path d="M19 21l2-2" /></svg>,
    Jewelry: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /></svg>,
    Arrow: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="M19 12l-7 7-7-7" /></svg>,
    ArrowUp: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5" /><path d="M5 12l7-7 7 7" /></svg>
};

// Simplified mapping for slot icons
const getSlotIcon = (slot: string) => {
    const lower = slot.toLowerCase();
    if (lower.includes('helmet') || lower.includes('head')) return <Icons.Helmet />;
    if (lower.includes('weapon') || lower.includes('hand')) return <Icons.Weapon />;
    if (lower.includes('ring') || lower.includes('neck') || lower.includes('ear')) return <Icons.Jewelry />;
    return <Icons.Armor />;
};

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

export const FloatingActionMenu: React.FC<FloatingActionMenuProps> = ({ classData, equipment }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    // Get unique available slots
    const availableSlots = React.useMemo(() => {
        if (!equipment) return [];
        return Array.from(new Set(equipment.map(item => item.Slot))).filter(slot => slot);
    }, [equipment]);

    const scrollToSlot = (slot: string) => {
        const element = document.getElementById(`slot-${slot}`);
        if (element) {
            // Smooth scroll with offset for header
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsOpen(false);
        }
    };

    // Scroll to Top Logic
    const [showScrollTop, setShowScrollTop] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
            {/* Menu Content */}
            <div
                className={`flex flex-col gap-4 bg-aoc-darker/95 border border-aoc-gold/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
                    }`}
                style={{ maxHeight: '80vh', overflowY: 'auto' }}
            >
                {/* Class Stats Section */}
                <div className="mb-4">
                    <h4 className="flex items-center gap-2 font-display text-lg text-aoc-gold mb-3 pb-2 border-b border-white/10">
                        <Icons.Stats />
                        {t('stats.priorities')}
                    </h4>
                    <div className="space-y-2">
                        {classData.statPriorities.map((stat, idx) => (
                            <div key={idx} className="flex justify-between items-center text-sm">
                                <span className="text-white/80">{stat.label}</span>
                                <div className="flex gap-1">
                                    {[...Array(5 - idx)].map((_, i) => (
                                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-aoc-gold/60" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Navigation Section */}
                <div>
                    <h4 className="flex items-center gap-2 font-display text-lg text-aoc-gold mb-3 pb-2 border-b border-white/10">
                        <Icons.Arrow />
                        {t('common.navigation')}
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                        {availableSlots.map(slot => (
                            <button
                                key={slot}
                                onClick={() => scrollToSlot(slot)}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-aoc-gold/10 hover:text-aoc-gold transition-colors text-xs text-left"
                            >
                                <span className="text-aoc-gold/70">{getSlotIcon(slot)}</span>
                                <span className="truncate">{t(SLOT_KEYS[slot] || slot)}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Buttons Row */}
            <div className="flex flex items-center gap-4">
                {/* Scroll to Top Button */}
                <button
                    onClick={scrollToTop}
                    className={`p-4 rounded-full bg-aoc-darker border border-aoc-gold/30 text-aoc-gold shadow-lg hover:bg-aoc-gold/10 hover:border-aoc-gold active:scale-95 transition-all duration-300 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
                        }`}
                    aria-label="Scroll to Top"
                >
                    <Icons.ArrowUp />
                </button>

                {/* Main Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`p-4 rounded-full bg-aoc-gold text-aoc-darker shadow-lg shadow-aoc-gold/20 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center ${isOpen ? 'rotate-180' : ''
                        }`}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <Icons.Close /> : <Icons.Menu />}
                </button>
            </div>
        </div>
    );
};
