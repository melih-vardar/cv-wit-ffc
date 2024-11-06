import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { LangContext } from '../context/LangContext';

function Footer() {
    const { theme } = useContext(ThemeContext);
    const { translate } = useContext(LangContext);
    return (
        <div className={`flex flex-col gap-14 h-[26rem] w-full mt-36 pl-[20%] pt-20 ${theme === "light" ? "bg-[#F9F9F9]" : "bg-[#141414]"}`}>
            <h1 className={`font-Inter font-semibold text-[2.6rem] w-[33.75rem] h-[6.6rem] ${theme === "light" ? "text-[#1F2937]" : "text-[#AEBCCF]"}`}>
                {translate("letsWork")}
            </h1>
            <div className="flex justify-between w-3/4">
                <div className="flex gap-0.5">
                    <h2>👉</h2>
                    <h2 className={`font-Inter font-medium text-xl underline ${theme === "light" ? "text-[#AF0C48]" : "text-specialWhite"}`}>mvardar97@gmail.com</h2>
                </div>
                <div className="flex gap-5">
                    <button className={`font-Inter font-medium text-lg ${theme === "light" ? "text-[#0A0A14]" : "text-[#E1E1FF]"}`}>{translate("personalBlog")}</button>
                    <button className={`font-Inter font-medium text-lg ${theme === "light" ? "text-[#00AB6B]" : "text-[#17D18B]"}`}>Github</button>
                    <button className={`font-Inter font-medium text-lg ${theme === "light" ? "text-[#0077B5]" : "text-[#0BA6F6]"}`}>Linkedin</button>
                </div>
            </div>
        </div>
    )
}

export default Footer