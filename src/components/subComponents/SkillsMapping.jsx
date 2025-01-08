import React from 'react'

function SkillsMapping({ title, imageURL }) {
    return (
        <div className="flex flex-col gap-7 text-center items-center sm:text-start p-4">
            <img 
          className='w-24 h-24 object-contain' 
          src={imageURL} 
          alt={title} 
          title={title} 
        />
        </div>
    )
}

export default SkillsMapping