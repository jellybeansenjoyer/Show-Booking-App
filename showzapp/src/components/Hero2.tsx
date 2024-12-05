"use client"
import Hero3Props from "@/data/Hero3Props"


const Hero: React.FC<Hero3Props> = ({movie}) => {
    return (
        <div className="absolute top-0 left-0 w-full h-screen inset-0 ">
            <img className="w-full h-2/3 object-cover " src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
            <div className="absolute h-2/3 w-full inset-0 bg-gradient-to-r from-black via-transparent to-black " />
            <div className="relative left-0 bottom-36 px-20 flex gap-7">
            <img className="w-1/5 h-1/2 rounded-3xl border border-2 object-cover z-10 -mt-48" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
            <div className="flex flex-col gap-2" >
            <h1 className="text-white text-6xl font-bold">{movie.title}</h1>
            <h1 className="text-white text-2xl font-normal">{movie.overview}</h1>
            </div>
            </div>
            </div>
            
    )
}

export default Hero;