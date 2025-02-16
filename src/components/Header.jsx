import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';

function Header() {
    const { translate } = useContext(LangContext);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="mt-10 sm:mt-6 flex flex-col gap-6 items-center sm:items-stretch sm:flex-row sm:justify-between sm:h-16 w-full">
            <div className="w-16 h-16 sm:h-auto rounded-full flex justify-center items-center bg-[#EEEBFF] dark:bg-specialBlue">
                <span className="font-Inter font-semibold text-2xl text-[#7B61FF] origin-center rotate-45">M</span>
            </div>

            <div className="flex gap-4 h-12 sm:h-auto sm:gap-20 items-center">
                <button 
                    onClick={() => scrollToSection('skills')} 
                    className="text-lg text-specialGray hover:text-[#3730A3] dark:hover:text-[#B7AAFF] transition-colors"
                >
                    {translate("skills")}
                </button>
                <button 
                    onClick={() => scrollToSection('profile')} 
                    className="text-lg text-specialGray hover:text-[#3730A3] dark:hover:text-[#B7AAFF] transition-colors"
                >
                    {translate("aboutMe")}
                </button>
                <button 
                    onClick={() => scrollToSection('projects')} 
                    className="text-lg text-specialGray hover:text-[#3730A3] dark:hover:text-[#B7AAFF] transition-colors"
                >
                    {translate("projects")}
                </button>
            </div>
        </div>
    )
}

export default Header