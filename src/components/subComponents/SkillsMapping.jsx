import React from 'react'

function SkillsMapping({ title, description }) {
    return (
        <div className="flex flex-col gap-7">
            <h2 className="font-Inter font-medium text-3xl text-[#433BCA] dark:text-[#B7AAFF]">
                {title}
            </h2>
            <p className="font-Inter font-normal text-xs text-[#6B7280] dark:text-[#FFFFFF]">
                {description}
            </p>
        </div>
    )
}

export default SkillsMapping