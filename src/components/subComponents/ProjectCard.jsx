import React, { useContext } from 'react'
import { LangContext } from '../../context/LangContext'
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa'

function ProjectCard({ title, description, githubUrl, homepage, language, stars }) {
    const { translate } = useContext(LangContext)

    return (
        <div className="flex flex-col gap-4 p-6 bg-white dark:bg-[#1F2937] rounded-lg shadow-lg">
            <div className="flex justify-between items-start">
                <h3 className="font-Inter font-medium text-xl text-[#1F2937] dark:text-[#AEBCCF]">
                    {title}
                </h3>
                <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm">{stars}</span>
                </div>
            </div>
            
            <p className="font-Inter text-[#6B7280] dark:text-[#FFFFFF] text-base">
                {description}
            </p>

            {language && (
                <div className="text-sm text-[#6B7280] dark:text-[#AEBCCF]">
                    {language}
                </div>
            )}

            <div className="flex gap-4 mt-auto">
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#3730A3] dark:text-[#B7AAFF] hover:underline"
                >
                    <FaGithub />
                    GitHub
                </a>
                {homepage && (
                    <a
                        href={homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#3730A3] dark:text-[#B7AAFF] hover:underline"
                    >
                        <FaExternalLinkAlt />
                        {translate("viewSite")}
                    </a>
                )}
            </div>
        </div>
    )
}

export default ProjectCard
