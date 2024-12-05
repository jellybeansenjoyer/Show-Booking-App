"use client"
import Sports from "@/data/Sports"

interface Sports_ {
    sports:Sports
}
const SportsDetails: React.FC<Sports_> = ({sports}) => {
    return (
        <div className="bg-main_blue min-h-[990px] relative inset-y-60 px-96 w-full h-screen flex flex-col mt-36 mb-20">
            <h1 className="text-6xl text-white ">STADIUM</h1>
            <div className="h-0.5 bg-dark_shade_gray mt-3"/>
            <img className="w-full h-auto object-cover pb-20" src={`${sports.seatmap.staticUrl}`}/>
        </div>
    )
}
export default SportsDetails;