import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';

function Footer() {
    const { translate } = useContext(LangContext);
    return (
        <div className="flex flex-col gap-14 sm:h-[26rem] w-full mt-36 px-4 py-20 sm:p-0 sm:pl-[20%] sm:pt-20 bg-[#F9F9F9] dark:bg-[#141414]">
            <h1 className="font-Inter font-semibold text-[2.6rem] sm:w-[33.75rem] sm:h-[6.6rem] text-[#1F2937] dark:text-[#AEBCCF] text-center sm:text-start">
                {translate("letsWork")}
            </h1>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:w-3/4">
                <div className="flex gap-0.5 justify-center sm:justify-start">
                    <h2>👉</h2>
                    <h2 className="font-Inter font-medium text-xl underline text-[#AF0C48] dark:text-specialWhite">mvardar97@gmail.com</h2>
                </div>
                <div className="flex gap-5 justify-center sm:justify-start">
                    <button className="font-Inter font-medium text-lg text-[#0A0A14] dark:text-[#E1E1FF]">{translate("personalBlog")}</button>
                    <button className="font-Inter font-medium text-lg text-[#00AB6B] dark:text-[#17D18B]">Github</button>
                    <button className="font-Inter font-medium text-lg text-[#0077B5] dark:text-[#0BA6F6]">Linkedin</button>
                </div>
            </div>
        </div>
    )
}

export default Footer