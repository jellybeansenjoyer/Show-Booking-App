"use client"

import HeroProps from "@/data/Hero"

const HeroComp: React.FC<HeroProps> = ({message, subtext,wallpaper}) => {
    const lastLen = message.length
    const lastIndex = message.lastIndexOf(" ");
    const lastInd = message.lastIndexOf(" ", lastIndex);
    const first = message.substring(0,lastInd)
    const last = message.substring(lastInd,lastLen)
    return (
        <div className="absolute top-0 left-0 w-full h-screen inset-0 bg-gradient-to-r from-black via-transparent to-black ">

            <img className="w-full h-full object-cover" src={`/${wallpaper}`}/>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black " />
            <div className="absolute m-72 inset-5">
            <h1 className="text-8xl font-extrabold text-white text-center">{first}
                <span className="text-cherry_pink">{last}</span>
                </h1>
            <p className="text-white text-3xl font-light text-center m-4">{subtext}</p>
            </div>
            </div>
            
    )
}

export default HeroComp;