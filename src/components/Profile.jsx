import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';

function Profile() {
    const { translate } = useContext(LangContext);
    return (
        <div id="profile" className="flex flex-col gap-10">
            <div className="font-Inter font-semibold text-5xl text-[#1F2937] dark:text-[#AEBCCF] border-t border-[#BAB2E7] pt-10 text-center sm:text-start">
                {translate("profile")}
            </div>
            <div className="flex flex-col gap-10 sm:flex-row sm:gap-64 text-center sm:text-start">
                <div className="flex flex-col gap-5">
                    <h2 className="font-Inter font-medium text-3xl text-[#433BCA] dark:text-[#B7AAFF]">{translate("profile")}</h2>
                    <div className="grid grid-cols-2 gap-x-48 gap-y-4">
                        <h3 className="font-semibold font-Inter text-lg sm:text-nowrap text-start">{translate("dateOfBirth")}</h3>
                        <h3 className="font-normal font-Inter text-lg text-start sm:text-start">31.07.1997</h3>
                        
                        <h3 className="font-semibold font-Inter text-lg sm:text-nowrap text-start">{translate("city")}</h3>
                        <h3 className="font-normal font-Inter text-lg text-start sm:text-start">Eskişehir</h3>
                        
                        <h3 className="font-semibold font-Inter text-lg sm:text-nowrap self-start text-start">{translate("education")}</h3>
                        <div className="flex flex-col gap-1 text-start sm:text-start sm:w-44">
                            <h3 className="font-normal font-Inter text-lg">{translate("educationDetail").firstPart}</h3>
                            <h3 className="font-normal font-Inter text-lg">{translate("educationDetail").secondPart}</h3>
                        </div>
                        
                        <h3 className="font-semibold font-Inter text-lg sm:text-nowrap text-nowrap text-start">{translate("preferredRole")}</h3>
                        <h3 className="font-normal font-Inter text-lg text-start sm:text-start sm: w-28">Frontend, UI</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="font-Inter font-medium text-3xl text-[#433BCA] dark:text-[#B7AAFF]">{translate("aboutMe")}</h2>
                    <div className="flex flex-col gap-5">
                        <h3 className="font-normal text-lg font-Inter text-[#6B7280] dark:text-[#FFFFFF]">{translate("aboutMeParagraph").firstPart}</h3>
                        <h3 className="font-normal text-lg font-Inter text-[#6B7280] dark:text-[#FFFFFF]">{translate("aboutMeParagraph").secondPart}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile