import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';
import { ThemeContext } from '../context/ThemeContext';


function Hero() {

    const { translate } = useContext(LangContext);
    const { theme } = useContext(ThemeContext);

    return (
        <div className="my-28 flex justify-between h-[27rem] w-full ">
            <div className="flex flex-col gap-10 w-[37rem]">
                <div className="flex gap-4 h-[1.75rem] items-center">
                    <div className={`w-24 h-0 border ${theme === "light" ? "border-[#3730A3]" : "border-[#BAB2E7]"}`}></div>
                    <span className={`text-xl font-medium font-Inter ${theme === "light" ? "text-[#433BCA]" : "text-[#B7AAFF]"}`}>Melih Vardar</span>
                </div>
                <div>
                    <h1 className={`h-36 font-bold text-7xl font-Inter ${theme === "light" ? "text-[#1F2937]" : "text-[#AEBCCF]"}`}>{translate("heroh1")}</h1>
                </div>
                <div>
                    <h2 className="font-normal text-lg text-[#6B7280] font-Inter">{translate("heroh2")}</h2>
                </div>
                <div className="w-[29rem] h-[3.25rem] flex gap-3">
                    <button className={`border rounded-md px-6 font-Inter font-medium text-lg 
                        ${theme === "light" ? "bg-[#3730A3] text-[#FFFFFF] border-[#3730A3]" : "bg-[#E1E1FF] text-[#000000] border-[#E1E1FF]"}`}>{translate("hireMe")}</button>
                    <button className={`border rounded-md px-6 text-[#3730A3] font-Inter font-medium text-lg 
                    flex justify-center items-center gap-1 ${theme === "light" ? "bg-[#FFFFFF] border-[#3730A3]" : "bg-[#383838] border-[#E1E1FF]"}`}>
                        <img fill="#3730A3" className={`w-6 h-6 ${theme === "light" ? "filter-logo-filter-light" : "filter-logo-filter-dark"}`} src="../../assets/github-mark.svg" />
                        <p className={` ${theme === "light" ? "bg-[#FFFFFF] text-[#3730A3]" : "bg-[#383838] text-[#E1E1FF] "}`}>Github</p>
                    </button>
                    <button className={`border rounded-md px-6 text-[#3730A3] font-Inter font-medium text-lg 
                    flex justify-center items-center gap-1 ${theme === "light" ? "bg-[#FFFFFF] border-[#3730A3]" : "bg-[#383838] border-[#E1E1FF]"}`}>
                        <img fill="#3730A3" className={`w-6 h-6 ${theme === "light" ? "filter-logo-filter-light" : "filter-logo-filter-dark"}`} src="../../assets/LI-In-Bug.svg" />
                        <p className={` ${theme === "light" ? "bg-[#FFFFFF] text-[#3730A3]" : "bg-[#383838] text-[#E1E1FF] "}`}>Linkedin</p>
                    </button>
                </div>
            </div>
            <img className="h-4/5 rounded-2xl drop-shadow-2xl self-center" src="../../assets/cv-photo2.jpg" />
        </div>
    )
}

export default Hero