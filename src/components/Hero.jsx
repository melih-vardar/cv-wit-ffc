import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';
import { ThemeContext } from '../context/ThemeContext';

function Hero() {

    const { translate } = useContext(LangContext);
    const { theme } = useContext(ThemeContext);

    return (
        <div className="my-28 flex justify-between h-[27rem] w-full border">
            <div className="flex flex-col gap-10 w-[37rem]">
                <div className="flex gap-4 h-[1.75rem] items-center">
                    <div className="w-[12.5rem] h-0 border border-[#3730A3]"></div>
                    <span className="text-xl font-medium font-Inter text-[#433BCA]">Melih Vardar</span>
                </div>
                <div>
                    <h1 className={`h-36 font-bold text-7xl font-Inter ${theme === "light" ? "text-[#1F2937]" : "text-[#AEBCCF]"}`}>{translate("heroh1")}</h1>
                </div>
                <div>
                    <h2 className="font-normal text-lg text-[#6B7280] font-Inter">{translate("heroh2")}</h2>
                </div>
                <div className="w-[28rem] h-[3.25rem] flex gap-3">
                    <button className="border border-[#3730A3] text-[#FFFFFF] rounded-md px-6 bg-[#3730A3] font-Inter font-medium text-lg">{translate("hireMe")}</button>
                    <button className="border border-[#3730A3] bg-[#FFFFFF] rounded-md px-6 text-[#3730A3] font-Inter font-medium text-lg 
                    flex justify-center items-center gap-1">
                        <img fill="#3730A3" className="w-6 h-6" src="../../assets/github-mark.svg" />


                        <img className="w-15 h-7" src="../../assets/GitHub_Logo.svg" />
                    </button>
                    <button className="border border-[#3730A3] bg-[#FFFFFF] rounded-md px-6 text-[#3730A3] font-Inter font-medium text-lg">{translate("hireMe")}</button>
                </div>
            </div>
            <img className="h-4/5 rounded-2xl drop-shadow-2xl self-center" src="../../assets/cv-photo2.jpg" />
        </div>
    )
}

export default Hero