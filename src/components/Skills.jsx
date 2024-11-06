import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { LangContext } from '../context/LangContext';

function Skills() {
    const { theme } = useContext(ThemeContext);
    const { translate } = useContext(LangContext);
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className={`font-Inter font-semibold text-5xl ${theme === "light" ? "text-[#1F2937]" : "text-[#AEBCCF]"}`}>{translate("skills")}</h1>
            </div>
            <div className="flex gap-28">
                <div className="flex flex-col gap-7">
                    <h2 className={`font-Inter font-medium text-3xl ${theme === "light" ? "text-[#433BCA]" : "text-[#B7AAFF]"}`} >Java Script</h2>
                    <p className={`font-Inter font-normal text-xs ${theme === "light" ? "text-[#6B7280]" : "text-[#FFFFFF]"}`}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="flex flex-col gap-7">
                    <h2 className={`font-Inter font-medium text-3xl ${theme === "light" ? "text-[#433BCA]" : "text-[#B7AAFF]"}`} >React.Js</h2>
                    <p className={`font-Inter font-normal text-xs ${theme === "light" ? "text-[#6B7280]" : "text-[#FFFFFF]"}`}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="flex flex-col gap-7">
                    <h2 className={`font-Inter font-medium text-3xl ${theme === "light" ? "text-[#433BCA]" : "text-[#B7AAFF]"}`} >Node.Js</h2>
                    <p className={`font-Inter font-normal text-xs ${theme === "light" ? "text-[#6B7280]" : "text-[#FFFFFF]"}`}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    )
}

export default Skills