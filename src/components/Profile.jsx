import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';

function Profile() {
    const { translate } = useContext(LangContext);
    return (
        <div id="profile" className="flex flex-col gap-10">
            <div className="font-Inter font-semibold text-5xl text-[#1F2937] dark:text-[#AEBCCF] border-t border-[#BAB2E7] pt-10 text-center sm:text-start">
                {translate("profile")}
            </div>
            <div className="flex flex-col gap-8 sm:gap-10 sm:flex-row sm:gap-20 lg:gap-32 text-center sm:text-start">
                <div className="flex flex-col gap-4 sm:gap-5 sm:min-w-[320px]">
                    <h2 className="font-Inter font-medium text-3xl text-[#433BCA] dark:text-[#B7AAFF]">{translate("profile")}</h2>
                    <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-4">
                        <h3 className="font-semibold font-Inter text-lg sm:text-nowrap text-start">{translate("dateOfBirth")}</h3>
                        <h3 className="font-normal font-Inter text-lg text-start">31.07.1997</h3>
                        
                        <h3 className="font-semibold font-Inter text-lg sm:text-nowrap text-start">{translate("city")}</h3>
                        <h3 className="font-normal font-Inter text-lg text-start">Eskişehir</h3>
                        
                        <h3 className="font-semibold font-Inter text-lg sm:text-nowrap self-start text-start">{translate("education")}</h3>
                        <div className="flex flex-col gap-1 text-start">
                            <h3 className="font-normal font-Inter text-lg">{translate("educationDetail").firstPart}</h3>
                            <h3 className="font-normal font-Inter text-lg">{translate("educationDetail").secondPart}</h3>
                        </div>
                        
                        <h3 className="font-semibold font-Inter text-lg sm:text-nowrap text-start">{translate("preferredRole")}</h3>
                        <h3 className="font-normal font-Inter text-lg text-start">Backend / Frontend</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-4 sm:gap-5 sm:max-w-[600px]">
                    <h2 className="font-Inter font-medium text-3xl text-[#433BCA] dark:text-[#B7AAFF]">{translate("aboutMe")}</h2>
                    <div className="flex flex-col gap-4 sm:gap-5">
                        <h3 className="font-normal text-lg font-Inter text-[#6B7280] dark:text-[#FFFFFF]">{translate("aboutMeParagraph").firstPart}</h3>
                        <h3 className="font-normal text-lg font-Inter text-[#6B7280] dark:text-[#FFFFFF]">{translate("aboutMeParagraph").secondPart}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile