import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
      title={i18n.language === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'}
    >
      <Languages className="w-6 h-6 text-blue-600" />
    </button>
  );
};