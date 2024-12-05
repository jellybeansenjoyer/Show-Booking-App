'use client'
import Sports from "@/data/Sports"

interface Sports_ {
    sports:Sports
}
const SportsBar : React.FC<Sports_>= ({sports}) => {
    function convertMinutesToHours(minutes:number) {
        const hours = Math.floor(minutes / 60); // Get the integer part for hours
        const remainingMinutes = minutes % 60; // Get the remaining minutes
        
        return `${hours} Hr ${remainingMinutes} Min`;
      }
    return (
        <div className="relative mt-56 inset-y-64 px-12 py-8 bg-blue-950 flex items-center justify-center gap-52">
            <div className="items-center flex gap-4 ml-12">
                <img className="w-7 h-7" src="/popcorn.png" />
                <div className="flex flex-col gap-2">
                <p className="text-white font-bold text-2xl">Price Ranges</p>
                <p className="text-white text-2xl">{`${sports.priceRanges[0].max} - ${sports.priceRanges[0].min}`}</p>
                </div>
            </div> 
            <div className="items-center flex gap-4">
                <img className="w-7 h-7" src="/time.png" />
                <div className="flex flex-col gap-2">
                <p className="text-white font-bold text-2xl">Location</p>
                <p className="text-white text-2xl max-w-72">{sports._embedded.venues[0].address.line1 +" "+sports._embedded.venues[0].country.name+" "+sports._embedded.venues[0].city.name}</p>
                </div>
            </div> 
            
                <p className="hover:text-cherry_pink cursor-pointer py-2 px-10 text-white font-medium bg-gradient-to-r from-cherry_pink to-bright_purple rounded-full text-lg  hover:bg-black hover:bg-none">BOOK NOW</p>
        </div>
    );
}
export default SportsBar;