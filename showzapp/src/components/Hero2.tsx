"use client"
import Hero2Props from "@/data/Hero2"
import MovieData from '@/data/Movie'

interface Hero3Props {
    movie: MovieData;
  }

const Hero: React.FC<Hero3Props> = ({movie}) => {
    return (
        <div className="absolute top-0 left-0 w-full h-screen inset-0 ">

            <img className="w-full h-1/2 object-cover " src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
            <div className="absolute h-1/2 w-full inset-0 bg-gradient-to-r from-black via-transparent to-black " />
            
            </div>
            
    )
}

export default Hero;