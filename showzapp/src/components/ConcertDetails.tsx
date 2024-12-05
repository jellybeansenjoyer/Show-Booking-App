"use client"
import Concert__ from "@/data/Concert"

interface Concert_ {
    event:Concert__
}
const ConcertDetails: React.FC<Concert_> = ({event}) => {
    return (
        <div className="bg-main_blue min-h-[990px] relative inset-y-60 px-96 w-full h-screen flex flex-col mt-36 mb-20">
            <h1 className="text-6xl text-white ">INFO</h1>
            <div className="h-0.5 bg-dark_shade_gray mt-3"/>
            <h1 className="text-white text-2xl mt-4">{event.event.event.event_description}</h1>
        </div>
    )
}
export default ConcertDetails;