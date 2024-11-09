import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';

function Profile() {
    const { translate } = useContext(LangContext);
    return (
        <div className="flex flex-col gap-10">
            <div className="font-Inter font-semibold text-5xl text-[#1F2937] dark:text-[#AEBCCF] border-t border-[#BAB2E7] pt-10 text-center sm:text-start">
                {translate("profile")}
            </div>
            <div className="flex flex-col gap-10 sm:flex-row sm:gap-14 text-center sm:text-start">
                <div className="flex flex-col gap-5">
                    <h2 className="font-Inter font-medium text-3xl text-[#433BCA] dark:text-[#B7AAFF]">{translate("profile")}</h2>
                    <div className="flex justify-between sm:justify-start sm:gap-6 ">
                        <div className="flex flex-col gap-4 font-semibold font-Inter text-lg w-1/2 sm:w-auto text-start" >
                            <h3 className="sm:text-nowrap">{translate("dateOfBirth")}</h3>
                            <h3 className="sm:text-nowrap">{translate("city")}</h3>
                            <h3 className="sm:text-nowrap">{translate("education")}</h3>
                            <h3 className="sm:text-nowrap mt-[6.3rem] sm:mt-[4.5rem]">{translate("preferredRole")}</h3>
                        </div>
                        <div className="flex flex-col gap-4 font-normal font-Inter text-lg w-1/2 sm:w-80 text-end sm:text-start">
                            <h3>31.07.1997</h3>
                            <h3>Eskişehir</h3>
                            <h3>{translate("educationDetail").firstPart}</h3>
                            <h3>{translate("educationDetail").secondPart}</h3>
                            <h3>Frontend, UI</h3>
                        </div>
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