import { createContext, useState } from 'react';
import langTranslation from '../langTranslation.json'

export const LangContext = createContext();

export const LangContextProvider = ({ children }) => {
    const [lang, setLang] = useState('tr');

    const toggleLang = () => {
        setLang((prevLang) => (prevLang === 'tr' ? 'en' : 'tr'))
    }

    const translate = (key) => langTranslation[lang][key] || key;

    return (
        <LangContext.Provider value={{ toggleLang, translate, lang }}>
            {children}
        </LangContext.Provider>
    );
};
