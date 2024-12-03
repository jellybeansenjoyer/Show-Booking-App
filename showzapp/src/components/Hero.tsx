"use client"
const Hero = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-screen inset-0 bg-gradient-to-r from-black via-transparent to-black ">

            <img className="w-full h-full object-cover" src="/hero.jpg"/>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black " />
            <div className="absolute m-72 inset-5">
            <h1 className="text-8xl font-extrabold text-white text-center">BOOK YOUR TICKETS <span className="text-cherry_pink">FOR EVENT</span></h1>
            <p className="text-white text-3xl font-light text-center m-4">Safe, secure, reliable ticketing.Your ticket to live entertainment!</p>
            </div>
            </div>
            
    )
}

export default Hero;