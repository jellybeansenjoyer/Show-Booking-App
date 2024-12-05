"use client"
import Sports from "@/data/Sports"

interface Sports_ {
    sports:Sports
}

const SportsHero: React.FC<Sports_> = ({sports}) => {
    return (
        <div className="absolute top-0 left-0 w-full h-screen inset-0 ">
            <img className="w-full h-2/3 object-cover " src={`${sports.images[0].url}`}/>
            <div className="absolute h-2/3 w-full inset-0 bg-gradient-to-r from-black via-transparent to-black " />
            <div className="relative left-0 bottom-36 px-20 flex gap-7">
            <img className="w-[300px] h-[450px] rounded-3xl border-2 object-cover z-10 -mt-48" src={`${sports.images[0].url}`} />
            <div className="flex flex-col gap-2" >
            <h1 className="text-white text-6xl font-bold">{sports.name}</h1>
            <h1 className="text-white text-2xl font-normal">{sports.promoter.name}</h1>
            </div>
            </div>
            </div>
            
    )
}

export default SportsHero;