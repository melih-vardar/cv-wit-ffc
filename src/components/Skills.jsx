import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';
import SkillsMapping from './subComponents/SkillsMapping';

function Skills() {
    const { translate } = useContext(LangContext);

    const sections = [
        { title: 'JavaScript', imageURL: "\\assets\\javascript.svg" },
        { title: 'Tailwind CSS', imageURL: "\\assets\\tailwind-css.svg" },
        { title: 'ReactJs', imageURL: "\\assets\\react.svg" },
        { title: 'Java', imageURL: "\\assets\\java.svg" },
        { title: 'PostgreSQL', imageURL: "\\assets\\postgresql.svg" },
        { title: 'Spring Boot', imageURL: "\\assets\\spring.svg" },
        { title: 'Docker', imageURL: "\\assets\\docker.svg" },
        { title: 'DBeaver', imageURL: "\\assets\\dbeaver.svg" },
        { title: 'Python', imageURL: "\\assets\\python.svg" },
        { title: 'Redux', imageURL: "\\assets\\redux.svg" }

    ];

    return (
        <div id="skills" className="flex flex-col gap-10 sm:gap-8">
            <div>
                <h1 className="font-Inter font-semibold text-center sm:text-start text-5xl text-[#1F2937] dark:text-[#AEBCCF]">{translate("skills")}</h1>
            </div>
            <div className="flex flex-col flex-wrap gap-10 justify-between sm:flex-row sm:gap-14">
                {sections.map((section, index) => (
                    <SkillsMapping key={index} title={section.title} imageURL={section.imageURL} />
                ))}
            </div>
        </div>
    )
}

export default Skills