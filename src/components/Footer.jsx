import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';

function Footer() {
    const { translate } = useContext(LangContext);
    return (
        <div className="flex flex-col gap-14 h-[26rem] w-full mt-36 pl-[20%] pt-20 bg-[#F9F9F9] dark:bg-[#141414]">
            <h1 className="font-Inter font-semibold text-[2.6rem] w-[33.75rem] h-[6.6rem] text-[#1F2937] dark:text-[#AEBCCF]">
                {translate("letsWork")}
            </h1>
            <div className="flex justify-between w-3/4">
                <div className="flex gap-0.5">
                    <h2>👉</h2>
                    <h2 className="font-Inter font-medium text-xl underline text-[#AF0C48] dark:text-specialWhite">mvardar97@gmail.com</h2>
                </div>
                <div className="flex gap-5">
                    <button className="font-Inter font-medium text-lg text-[#0A0A14] dark:text-[#E1E1FF]">{translate("personalBlog")}</button>
                    <button className="font-Inter font-medium text-lg text-[#00AB6B] dark:text-[#17D18B]">Github</button>
                    <button className="font-Inter font-medium text-lg text-[#0077B5] dark:text-[#0BA6F6]">Linkedin</button>
                </div>
            </div>
        </div>
    )
}

export default Footer