"use client"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const Search = () => {
    const [enabled,setEnabled] = useState(1);
    return(
        <div className="relative inset-y-56 mt-[400px] mb-[400px] rounded-2xl">
        
        <img src="/evident_bubbles.jpg" className="object-cover w-2/3 h-72 mx-auto relative rounded-2xl" alt="Abstract" />
      
       
        <div className="flex flex-col justify-between absolute inset-0 w-2/3 h-72 mx-auto bg-gradient-to-r from-blue-700 via-transparent to-violet-700  px-8 py-10 rounded-2xl">
        <div className="flex justify-between">
            <div>
                <h1 className="text-green-400 font-bold">WELCOME TO AUDITORIUM</h1>
                <h1 className="text-white text-3xl mt-3 font-bold">WHAT ARE YOU LOOKING FOR</h1>
            </div>
            <div className="flex gap-4 items-center">
                <div className={`flex ${enabled===1?'bg-gradient-to-r from-cherry_pink to-bright_purple':'bg-black hover:bg-none cursor-pointer'} justify-center items-center rounded-full w-28 h-12`} onClick={()=>{
                    setEnabled(1)
                }}>
                <p className={`${enabled===1?'text-white':"text-cherry_pink"} text-center font-bold`}>EVENTS</p>

                </div>
                <div className={`flex ${enabled===2?'bg-gradient-to-r from-cherry_pink to-bright_purple':'bg-black hover:bg-none cursor-pointer'} justify-center items-center rounded-full w-28 h-12`} onClick={()=>{
                    setEnabled(2)
                }}>
                <p className={`${enabled===2?'text-white':"text-cherry_pink"} text-center font-bold`}>SPORTS</p>
                </div>
                <div className={`flex ${enabled===3?'bg-gradient-to-r from-cherry_pink to-bright_purple':'bg-black hover:bg-none cursor-pointer'} justify-center items-center rounded-full w-28 h-12`} onClick={()=>{
                    setEnabled(3)
                }}>
                <p className={`${enabled===3?'text-white':"text-cherry_pink"} text-center font-bold`}>MOVIES</p>

                </div>
            </div>
        </div>
        <div className="bg-black h-20 bg-opacity-30 px-10 py-8 flex justify-between items-center">
            <Input type="email" placeholder="Search" className=" w-1/3 focus:ring-green-500"/>
            
            <div className="gap-2 flex items-center justify-between">
            <img className="w-7 h-7" src="/city-map.png" />
            <h1 className="text-green-400 font-bold">City</h1>
            </div>
            <div className="gap-2 flex items-center justify-between">
            <img className="w-7 h-7" src="/calendar.png" />
            <h1 className="text-green-400 font-bold">Date</h1>
            </div>
            <h1 className="text-green-400 font-bold">Cinema</h1>
        </div>
        </div>
      
        
       
      </div>
      
    )
}
export default Search