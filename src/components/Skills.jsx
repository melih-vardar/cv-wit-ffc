import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { LangContext } from '../context/LangContext';
import SkillsMapping from './subComponents/SkillsMapping';

function Skills() {
    const { theme } = useContext(ThemeContext);
    const { translate } = useContext(LangContext);

    const sections = [
        { title: 'Java Script', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { title: 'React.Js', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { title: 'Node.Js', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
    ];

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className={`font-Inter font-semibold text-5xl ${theme === "light" ? "text-[#1F2937]" : "text-[#AEBCCF]"}`}>{translate("skills")}</h1>
            </div>
            <div className="flex gap-28">
                {sections.map((section, index) => (
                    <SkillsMapping key={index} title={section.title} description={section.description} theme={theme} />
                ))}
            </div>
        </div>
    )
}

export default Skills