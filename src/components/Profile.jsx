import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { LangContext } from '../context/LangContext';

function Profile() {
    const { theme } = useContext(ThemeContext);
    const { translate } = useContext(LangContext);
    return (
        <div className="flex flex-col gap-10">
            <div className={`font-Inter font-semibold text-5xl ${theme === "light" ? "text-[#1F2937]" : "text-[#AEBCCF]"}
        border-t border-[#BAB2E7] pt-10`}>
                {translate("profile")}
            </div>
            <div className="flex gap-14">
                <div className="flex flex-col gap-5">
                    <h2 className={`font-Inter font-medium text-3xl ${theme === "light" ? "text-[#433BCA]" : "text-[#B7AAFF]"}`}>{translate("profile")}</h2>
                    <div className="flex gap-6">
                        <div className="flex flex-col gap-4 font-semibold font-Inter text-lg" >
                            <h3 className="text-nowrap">{translate("dateOfBirth")}</h3>
                            <h3 className="text-nowrap">{translate("city")}</h3>
                            <h3 className="text-nowrap">{translate("education")}</h3>
                            <h3 className="text-nowrap mt-[4.5rem]">{translate("preferredRole")}</h3>
                        </div>
                        <div className="flex flex-col gap-4 font-normal font-Inter text-lg w-80">
                            <h3>31.07.1997</h3>
                            <h3>Eskişehir</h3>
                            <h3>{translate("educationDetail").firstPart}</h3>
                            <h3>{translate("educationDetail").secondPart}</h3>
                            <h3>Frontend, UI</h3>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className={`font-Inter font-medium text-3xl ${theme === "light" ? "text-[#433BCA]" : "text-[#B7AAFF]"}`}>{translate("aboutMe")}</h2>
                    <div className="flex flex-col gap-5">
                        <h3 className={`font-normal text-lg font-Inter ${theme === "light" ? "text-[#6B7280]" : "text-[#FFFFFF]"}`}>{translate("aboutMeParagraph").firstPart}</h3>
                        <h3 className={`font-normal text-lg font-Inter ${theme === "light" ? "text-[#6B7280]" : "text-[#FFFFFF]"}`}>{translate("aboutMeParagraph").secondPart}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile