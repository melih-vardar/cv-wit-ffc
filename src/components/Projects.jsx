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
            <div className="flex gap-28">
                <div className="w-[300px] flex flex-col gap-[1.125rem]">
                    <img src="../../assets/project1.png" />
                    <h2 className={`font-Inter font-medium text-3xl ${theme === "light" ? "text-[#433BCA]" : "text-[#B7AAFF]"}`}>{translate("projectsTitle").first}</h2>
                    <h3 className={`font-Inter font-normal text-sm ${theme === "light" ? "text-[#6B7280]" : "text-[#FFFFFF]"}`}>{translate("projectsParagraph").first}</h3>
                    <div className="flex gap-1.5">
                        <div className={`h-[27px] w-[68px] border rounded font-Inter font-medium text-sm
                    flex justify-center items-center ${theme === "light" ? "bg-[#FFFFFF] border-[#3730A3]" : "bg-[#383838] border-[#8F88FF]"}`}><p className={` ${theme === "light" ? "text-[#3730A3]" : "text-[#8F88FF] "}`}>react</p></div>
                        <div className={`h-[27px] w-[68px] border rounded font-Inter font-medium text-sm
                    flex justify-center items-center ${theme === "light" ? "bg-[#FFFFFF] border-[#3730A3]" : "bg-[#383838] border-[#8F88FF]"}`}><p className={` ${theme === "light" ? "text-[#3730A3]" : "text-[#8F88FF] "}`}>redux</p></div>
                        <div className={`h-[27px] w-[68px] border rounded font-Inter font-medium text-sm
                    flex justify-center items-center ${theme === "light" ? "bg-[#FFFFFF] border-[#3730A3]" : "bg-[#383838] border-[#8F88FF]"}`}><p className={` ${theme === "light" ? "text-[#3730A3]" : "text-[#8F88FF] "}`}>axios</p></div>
                    </div>
                    <div className="flex justify-between">
                        <button className={`font-Inter font-medium text-base underline ${theme === "light" ? "text-[#3730A3]" : "text-[#E1E1FF]"}`}>Github</button>
                        <button className={`font-Inter font-medium text-base underline ${theme === "light" ? "text-[#3730A3]" : "text-[#E1E1FF]"}`}>{translate("viewSite")}</button>
                    </div>
                </div>
                <div className="w-[300px] flex flex-col gap-[1.125rem]">
                    <img src="../../assets/project2.png" />
                    <h2 className={`font-Inter font-medium text-3xl ${theme === "light" ? "text-[#433BCA]" : "text-[#B7AAFF]"}`}>{translate("projectsTitle").second}</h2>
                    <h3 className={`font-Inter font-normal text-sm ${theme === "light" ? "text-[#6B7280]" : "text-[#FFFFFF]"}`}>{translate("projectsParagraph").second}</h3>
                    <div className="flex gap-1.5">
                        <div className={`h-[27px] w-[68px] border rounded font-Inter font-medium text-sm
                    flex justify-center items-center ${theme === "light" ? "bg-[#FFFFFF] border-[#3730A3]" : "bg-[#383838] border-[#8F88FF]"}`}><p className={` ${theme === "light" ? "text-[#3730A3]" : "text-[#8F88FF] "}`}>react</p></div>
                        <div className={`h-[27px] w-[68px] border rounded font-Inter font-medium text-sm
                    flex justify-center items-center ${theme === "light" ? "bg-[#FFFFFF] border-[#3730A3]" : "bg-[#383838] border-[#8F88FF]"}`}><p className={` ${theme === "light" ? "text-[#3730A3]" : "text-[#8F88FF] "}`}>redux</p></div>
                        <div className={`h-[27px] w-[68px] border rounded font-Inter font-medium text-sm
                    flex justify-center items-center ${theme === "light" ? "bg-[#FFFFFF] border-[#3730A3]" : "bg-[#383838] border-[#8F88FF]"}`}><p className={` ${theme === "light" ? "text-[#3730A3]" : "text-[#8F88FF] "}`}>axios</p></div>
                    </div>
                    <div className="flex justify-between">
                        <button className={`font-Inter font-medium text-base underline ${theme === "light" ? "text-[#3730A3]" : "text-[#E1E1FF]"}`}>Github</button>
                        <button className={`font-Inter font-medium text-base underline ${theme === "light" ? "text-[#3730A3]" : "text-[#E1E1FF]"}`}>{translate("viewSite")}</button>
                    </div>
                </div>
                <div className="w-[300px] flex flex-col gap-[1.125rem]">
                    <img src="../../assets/project3.png" />
                    <h2 className={`font-Inter font-medium text-3xl ${theme === "light" ? "text-[#433BCA]" : "text-[#B7AAFF]"}`}>{translate("projectsTitle").third}</h2>
                    <h3 className={`font-Inter font-normal text-sm ${theme === "light" ? "text-[#6B7280]" : "text-[#FFFFFF]"}`}>{translate("projectsParagraph").third}</h3>
                    <div className="flex gap-1.5">
                        <div className={`h-[27px] w-[68px] border rounded font-Inter font-medium text-sm
                    flex justify-center items-center ${theme === "light" ? "bg-[#FFFFFF] border-[#3730A3]" : "bg-[#383838] border-[#8F88FF]"}`}><p className={` ${theme === "light" ? "text-[#3730A3]" : "text-[#8F88FF] "}`}>react</p></div>
                        <div className={`h-[27px] w-[68px] border rounded font-Inter font-medium text-sm
                    flex justify-center items-center ${theme === "light" ? "bg-[#FFFFFF] border-[#3730A3]" : "bg-[#383838] border-[#8F88FF]"}`}><p className={` ${theme === "light" ? "text-[#3730A3]" : "text-[#8F88FF] "}`}>redux</p></div>
                        <div className={`h-[27px] w-[68px] border rounded font-Inter font-medium text-sm
                    flex justify-center items-center ${theme === "light" ? "bg-[#FFFFFF] border-[#3730A3]" : "bg-[#383838] border-[#8F88FF]"}`}><p className={` ${theme === "light" ? "text-[#3730A3]" : "text-[#8F88FF] "}`}>axios</p></div>
                    </div>
                    <div className="flex justify-between">
                        <button className={`font-Inter font-medium text-base underline ${theme === "light" ? "text-[#3730A3]" : "text-[#E1E1FF]"}`}>Github</button>
                        <button className={`font-Inter font-medium text-base underline ${theme === "light" ? "text-[#3730A3]" : "text-[#E1E1FF]"}`}>{translate("viewSite")}</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects