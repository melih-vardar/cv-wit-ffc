import React from 'react'

function SkillsMapping({ title, description, theme }) {
    return (
        <div className="flex flex-col gap-7">
            <h2 className={`font-Inter font-medium text-3xl ${theme === "light" ? "text-[#433BCA]" : "text-[#B7AAFF]"}`}>
                {title}
            </h2>
            <p className={`font-Inter font-normal text-xs ${theme === "light" ? "text-[#6B7280]" : "text-[#FFFFFF]"}`}>
                {description}
            </p>
        </div>
    )
}

export default SkillsMapping