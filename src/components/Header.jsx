import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { LangContext } from '../context/LangContext';

function Header() {

    const { theme } = useContext(ThemeContext);
    const { translate } = useContext(LangContext);

    return (
        <div className=" mt-6 flex justify-between h-16 w-full">
            <div className={`w-16 rounded-full flex justify-center items-center ${theme === "light" ? "bg-[#EEEBFF]" : "bg-specialBlue"}`}>
                <span className="font-Inter font-semibold text-2xl text-[#7B61FF] origin-center rotate-45">M</span>
            </div>

            <div className="flex gap-20 items-center">
                <button className="text-lg text-specialGray">{translate("skills")}</button>
                <button className="text-lg text-specialGray">{translate("projects")}</button>
                <button className="border border-[#3730A3] bg-[#FFFFFF] rounded-md px-6 h-4/5 text-[#3730A3] font-Inter font-medium text-lg">{translate("hireMe")}</button>
            </div>
        </div>
    )
}

export default Header