"use client"
import Hero3Props from "@/data/Hero3Props"


const Details: React.FC<Hero3Props> = ({movie}) => {
    return (
        <div className="bg-main_blue relative inset-y-60 px-96 w-full h-screen flex flex-col mt-36 ">
            <h1 className="text-6xl text-white ">CAST</h1>
            <div className="h-0.5 bg-dark_shade_gray mt-3"/>
        </div>
    )
}
export default Details;