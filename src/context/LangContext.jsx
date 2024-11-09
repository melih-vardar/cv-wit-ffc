import { createContext, useEffect, useState } from 'react';
import langTranslation from '../langTranslation.json'
import useLocalStorage from '../hooks/useLocalStorage';
import axios from 'axios';


export const LangContext = createContext();

export const LangContextProvider = ({ children }) => {
    const [lang, setLang] = useLocalStorage('lang', 'tr');
    const [currentContent, setCurrentContent] = useState(null);

    const toggleLang = () => {
        if (lang === 'tr') {
            setLang('en');
        } else {
            setLang('tr');
        }
    }


    useEffect(() => {
        const userLang = navigator.language || navigator.userLanguage;
        if (userLang === 'en' || userLang === 'en-US') {
            setLang('en')
        }
        else {
            setLang('tr')
        }
    }, [])

    useEffect(() => {
        const currentLangData = langTranslation[lang]
        if (currentLangData) {
            axios
                .post('https://reqres.in/api/workintech', currentLangData)
                .then((res) => {
                    console.log('data', res.data)
                    setCurrentContent(res.data)
                })
                .catch((error) => {
                    console.log('error', error);
                })
        }
        else {
            console.warn('Language data not found for: ', lang)
        }
    }, [lang])

    const translate = (key) => {
        if (currentContent && currentContent[key]) {
            return currentContent[key];
        }
    };

    return (
        <LangContext.Provider value={{ toggleLang, translate, lang }}>
            {currentContent ? children : <div>Loading...</div>}
        </LangContext.Provider>
    );
};
