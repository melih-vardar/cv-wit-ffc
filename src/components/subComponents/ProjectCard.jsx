import React from 'react';

const ProjectCard = ({ project, translate }) => {
    return (
        <div className="w-full sm:w-[300px] flex flex-col gap-[1.125rem]">
            <img src={project.img} alt={project.title} />
            <h2 className="font-Inter font-medium text-3xl text-[#433BCA] dark:text-[#B7AAFF]">
                {project.title}
            </h2>
            <h3 className="font-Inter font-normal text-sm text-[#6B7280] dark:text-[#FFFFFF]">
                {project.description}
            </h3>
            <div className="flex gap-1.5">
                {project.technologies.map((tech, index) => (
                    <div
                        key={index}
                        className="h-[27px] w-[68px] border rounded font-Inter font-medium text-sm flex justify-center items-center bg-[#FFFFFF] border-[#3730A3] dark:bg-[#383838] dark:border-[#8F88FF]"
                    >
                        <p className="text-[#3730A3] dark:text-[#8F88FF]">{tech}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-between">
                <button
                    className="font-Inter font-medium text-base underline text-[#3730A3] dark:text-[#E1E1FF]"
                >
                    Github
                </button>
                <button
                    className="font-Inter font-medium text-base underline text-[#3730A3] dark:text-[#E1E1FF]"
                >
                    {translate("viewSite")}
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
