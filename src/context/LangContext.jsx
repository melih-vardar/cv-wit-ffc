import { createContext, useEffect } from 'react';
import langTranslation from '../langTranslation.json'
import useLocalStorage from '../hooks/useLocalStorage';


export const LangContext = createContext();

export const LangContextProvider = ({ children }) => {
    const [lang, setLang] = useLocalStorage('lang', 'tr');

    const toggleLang = () => {
        if (lang === 'tr') {
            setLang('en');
        } else {
            setLang('tr');
        }
    }

    const translate = (key) => langTranslation[lang][key] || key;

    return (
        <LangContext.Provider value={{ toggleLang, translate, lang }}>
            {children}
        </LangContext.Provider>
    );
};
