'use client'
import Concert__ from "@/data/Concert"

interface Concert_ {
    event:Concert__
}
const ConcertBar : React.FC<Concert_>= ({event}) => {
    
    return (
        <div className="relative mt-56 inset-y-64 px-12 py-8 bg-blue-950 flex items-center justify-center gap-52">
            <div className="items-center flex gap-4 ml-12">
                <img className="w-7 h-7" src="/popcorn.png" />
                <div className="flex flex-col gap-2">
                <p className="text-white font-bold text-2xl">Price Ranges</p>
                <p className="text-white text-2xl">{`${event.event.ticket.price_paid}`}</p>
                </div>
            </div> 
            <div className="items-center flex gap-4">
                <img className="w-7 h-7" src="/time.png" />
                <div className="flex flex-col gap-2">
                <p className="text-white font-bold text-2xl">Date</p>
                <p className="text-white text-2xl max-w-72">{event.event.event.event_date+" "+event.event.event.event_venue+" "+event.event.event.event_location}</p>
                </div>
            </div> 
            
                <p className="hover:text-cherry_pink cursor-pointer py-2 px-10 text-white font-medium bg-gradient-to-r from-cherry_pink to-bright_purple rounded-full text-lg  hover:bg-black hover:bg-none">BOOK NOW</p>
        </div>
    );
}
export default ConcertBar;