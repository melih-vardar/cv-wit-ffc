import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';

function Hero() {

    const { translate } = useContext(LangContext);

    return (
        <div className="my-10 sm:my-28 flex flex-col sm:flex-row gap-10 sm:justify-between h-auto sm:h-[27rem] w-full ">
            <div className="flex flex-col gap-10 w-full sm:w-[37rem]">
                <div className="flex gap-4 h-[1.75rem] items-center">
                    <div className="w-24 h-0 border border-[#3730A3] dark:border-[#BAB2E7]"></div>
                    <span className="text-xl font-medium font-Inter text-[#433BCA] dark:text-[#B7AAFF]">Melih Vardar</span>
                </div>
                <div className="text-center sm:text-left">
                    <h1 className="sm:h-36 font-bold text-6xl sm:text-7xl font-Inter text-[#1F2937] dark:text-[#AEBCCF]">{translate("heroh1")}</h1>
                </div>
                <div>
                    <h2 className="text-center sm:text-left font-normal text-lg font-Inter text-[#6B7280] dark:text-[#FFFFFF]">{translate("heroh2")}</h2>
                </div>
                <div className="w-full sm:w-[29rem] h-[3.25rem] flex gap-3">
                    <button className="border rounded-md px-6 font-Inter font-medium text-lg 
                    bg-[#3730A3] text-[#FFFFFF] border-[#3730A3] dark:bg-[#E1E1FF] dark:text-[#000000] dark:border-[#E1E1FF]">
                        {translate("hireMe")}</button>
                    <button className="border rounded-md px-6 text-[#3730A3] font-Inter font-medium text-lg 
                    flex justify-center items-center gap-1 bg-[#FFFFFF] border-[#3730A3] dark:bg-[#383838] dark:border-[#E1E1FF]">
                        <img className="w-6 h-6 filter-logo-filter-light dark:filter-logo-filter-dark" src="../../assets/github-mark.svg" />
                        <p className="bg-[#FFFFFF] text-[#3730A3] dark:bg-[#383838] dark:text-[#E1E1FF]">Github</p>
                    </button>
                    <button className="border rounded-md px-6 text-[#3730A3] font-Inter font-medium text-lg 
                    flex justify-center items-center gap-1 bg-[#FFFFFF] border-[#3730A3] dark:bg-[#383838] dark:border-[#E1E1FF]">
                        <img className="w-6 h-6 filter-logo-filter-light dark:filter-logo-filter-dark" src="../../assets/LI-In-Bug.svg" />
                        <p className="bg-[#FFFFFF] text-[#3730A3] dark:bg-[#383838] dark:text-[#E1E1FF]">Linkedin</p>
                    </button>
                </div>
            </div>
            <img className="w-4/5 sm:w-auto sm:h-4/5 rounded-2xl drop-shadow-2xl self-center order-first sm:order-last" src="../../assets/cv-photo2.jpg" />
        </div>
    )
}

export default Hero