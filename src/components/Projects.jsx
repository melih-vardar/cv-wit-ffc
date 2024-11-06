import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';
import { ThemeContext } from '../context/ThemeContext';

function Projects() {
    const { theme } = useContext(ThemeContext);
    const { translate } = useContext(LangContext);
    return (
        <div className="flex flex-col gap-10">
            <div className={`font-Inter font-semibold text-5xl ${theme === "light" ? "text-[#1F2937]" : "text-[#AEBCCF]"}
        border-t border-[#BAB2E7] pt-10`}>
                {translate("projects")}
            </div>
            <div className="flex gap-30">
                <div className="w-[300px] flex flex-col gap-[1.125rem] border">
                    <img src="../../assets/project1.png" />
                    <h2>{translate("projectsTitle").first}</h2>
                </div>
                <div className="w-[300px] flex flex-col gap-[1.125rem] border">
                    <img src="../../assets/project2.png" />
                    <h2>{translate("projectsTitle").second}</h2>
                </div>
                <div className="w-[300px] flex flex-col gap-[1.125rem] border">
                    <img src="../../assets/project3.png" />
                    <h2>{translate("projectsTitle").third}</h2>
                </div>
            </div>
        </div>
    )
}

export default Projects