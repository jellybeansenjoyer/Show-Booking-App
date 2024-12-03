"use client"
import React from 'react'
import { Input } from "@/components/ui/input"
import {Image} from 'next/image'
const Toolbar = ()=> {
    return (
        <div className='bg-light_shade_gray flex h-20 px-10 py-8 justify-between items-center w-full'>
           <div className='flex space-x-5 w-1/2 items-center'> 
            <p className='font-anton font-bold italic text-3xl text-dark_shade_tomato'>AUDITORIUM</p>
            <Input className='focus-visible:ring-dark_shade_tomato' type="Search" placeholder="Search Events" />
            </div>
            <div className='group flex p-3 gap-2 items-center border border-orange-600 rounded-2xl hover:bg-orange-600 hover:border-white border-2'>
                <img className="w-6 h-6" src="/metamask.svg"/>
                <p className='font-bold text-orange-600 text-lg group-hover:text-white'>METAMASK</p>
            </div>
            
        </div>
    )
}
export default Toolbar;