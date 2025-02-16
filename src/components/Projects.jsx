import React, { useContext, useEffect, useState } from 'react'
import { LangContext } from '../context/LangContext';
import ProjectCard from './subComponents/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';

function Projects() {
    const { translate } = useContext(LangContext);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/melih-vardar/repos?sort=pushed&direction=desc&per_page=100');
                const allProjects = await response.json();
                
                const sortedProjects = allProjects
                    .sort((a, b) => b.stargazers_count - a.stargazers_count);
                
                setProjects(sortedProjects);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const displayedProjects = showAll 
        ? projects 
        : projects.filter(project => project.stargazers_count > 0);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3730A3]"></div>
            </div>
        );
    }

    return (
        <div id="projects" className="flex flex-col gap-10">
            <div className="font-Inter font-semibold text-5xl text-[#1F2937] dark:text-[#AEBCCF] border-t border-[#BAB2E7] pt-10 text-center sm:text-start">
                {translate("projects")}
            </div>
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence>
                    {displayedProjects.map((project, index) => (
                        <ProjectCard 
                            key={project.id}
                            title={project.name}
                            description={project.description || "No description available"}
                            githubUrl={project.html_url}
                            homepage={project.homepage}
                            language={project.language}
                            stars={project.stargazers_count}
                            index={index}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>
            {!showAll && projects.some(project => project.stargazers_count === 0) && (
                <motion.button 
                    onClick={() => setShowAll(true)}
                    className="mx-auto px-6 py-2 border border-[#3730A3] rounded-md text-[#3730A3] dark:text-[#B7AAFF] dark:border-[#B7AAFF] font-Inter font-medium hover:bg-[#3730A3] hover:text-[#FFFFFF] dark:hover:bg-[#B7AAFF] dark:hover:text-[#1F2937] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {translate("readMore")}
                </motion.button>
            )}
        </div>
    );
}

export default Projects