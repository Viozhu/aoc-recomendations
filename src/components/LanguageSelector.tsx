import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center gap-3">
            <span className="text-sm text-white/60">🌐</span>
            <div className="flex gap-2">
                <button
                    onClick={() => changeLanguage('en')}
                    className={`px-3 py-1.5 text-sm rounded-md transition-all ${i18n.language === 'en'
                            ? 'bg-aoc-gold text-black font-semibold'
                            : 'bg-white/5 text-white/70 hover:bg-white/10'
                        }`}
                >
                    EN
                </button>
                <button
                    onClick={() => changeLanguage('es')}
                    className={`px-3 py-1.5 text-sm rounded-md transition-all ${i18n.language === 'es'
                            ? 'bg-aoc-gold text-black font-semibold'
                            : 'bg-white/5 text-white/70 hover:bg-white/10'
                        }`}
                >
                    ES
                </button>
            </div>
        </div>
    );
};
