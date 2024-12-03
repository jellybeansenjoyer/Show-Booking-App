"use client"
import { Input } from "@/components/ui/input"

const Search = () => {
    return(
        <div className="relative inset-y-56 mt-[400px] mb-[500px]">
        
        <img src="/evident_bubbles.jpg" className="object-cover w-2/3 h-72 mx-auto relative" alt="Abstract" />
      
       
        <div className="flex flex-col justify-between absolute inset-0 w-2/3 h-72 mx-auto bg-gradient-to-r from-blue-700 via-transparent to-violet-700 pointer-events-none px-8 py-10">
        <div className="flex justify-between">
            <div>
                <h1 className="text-cyan-400">WELCOME TO AUDITORIUM</h1>
                <h1 className="text-white text-3xl mt-3 font-bold">WHAT ARE YOU LOOKING FOR</h1>
            </div>
            <div className="flex gap-4 items-center">
                <div className="flex bg-gradient-to-r from-cherry_pink to-bright_purple justify-center items-center rounded-full w-28 h-12 ">
                    <p className="text-white text-center font-bold">MOVIE</p>
                </div>
                <div className="flex bg-gradient-to-r from-cherry_pink to-bright_purple justify-center items-center rounded-full w-28 h-12 ">
                <p className="text-white text-center font-bold">EVENTS</p>
                </div>
                <div className="flex bg-gradient-to-r from-cherry_pink to-bright_purple justify-center items-center rounded-full w-28 h-12">
                <p className="text-white text-center font-bold">SPORTS</p>
                </div>
            </div>
        </div>
        <div className="bg-black h-20 bg-opacity-30 px-10 py-8 flex justify-between items-center">
            <Input type="email" placeholder="Search" className=" w-1/3"/>
            <h1 className="text-cyan-500 font-bold">City</h1>
            <h1 className="text-cyan-500 font-bold">Date</h1>
            <h1 className="text-cyan-500 font-bold">Cinema</h1>
        </div>
        </div>
      
        
       
      </div>
      
    )
}
export default Search