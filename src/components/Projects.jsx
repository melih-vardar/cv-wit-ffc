import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';
import { ThemeContext } from '../context/ThemeContext';
import ProjectCard from './subComponents/ProjectCard';

function Projects() {
    const { theme } = useContext(ThemeContext);
    const { translate } = useContext(LangContext);
    const projects = [
        {
            img: "../../assets/project1.png",
            title: translate("projectsTitle").first,
            description: translate("projectsParagraph").first,
            technologies: ["react", "redux", "axios"]
        },
        {
            img: "../../assets/project2.png",
            title: translate("projectsTitle").second,
            description: translate("projectsParagraph").second,
            technologies: ["react", "redux", "axios"]
        },
        {
            img: "../../assets/project3.png",
            title: translate("projectsTitle").third,
            description: translate("projectsParagraph").third,
            technologies: ["react", "redux", "axios"]
        }
    ];
    return (
        <div className="flex flex-col gap-10">
            <div className={`font-Inter font-semibold text-5xl ${theme === "light" ? "text-[#1F2937]" : "text-[#AEBCCF]"}
        border-t border-[#BAB2E7] pt-10`}>
                {translate("projects")}
            </div>
            <div className="flex gap-28">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} theme={theme} translate={translate} />
                ))}
            </div>
        </div>
    )
}

export default Projects