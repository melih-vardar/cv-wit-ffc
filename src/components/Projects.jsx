import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';
import ProjectCard from './subComponents/ProjectCard';

function Projects() {
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
            <div className="font-Inter font-semibold text-5xl text-[#1F2937] dark:text-[#AEBCCF]
        border-t border-[#BAB2E7] pt-10 text-center sm:text-start">
                {translate("projects")}
            </div>
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-28 ">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} translate={translate} />
                ))}
            </div>
        </div>
    )
}

export default Projects