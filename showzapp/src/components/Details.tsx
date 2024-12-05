"use client"
import Hero3Props from "@/data/Hero3Props"
import { Card, CardContent } from "@/components/ui/card"
import CastandCrew from "@/data/Cast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect,useState } from "react"
import axios from "axios";
const Details: React.FC<Hero3Props> = ({movie}) => {
    const [cast,setCast] = useState<CastandCrew>();
    useEffect(() => {
        const fetchCast = async () => {
          try {
            const response = await axios<CastandCrew>(`https://api.themoviedb.org/3/movie/${movie.id}/credits?language=en-US`,{
                headers:{
                    "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmQzOGI0MDFiZWViYWUzNGY0Y2JjNGM2NjVkNmI3ZSIsIm5iZiI6MTczMzIwNTc0MS40NDYsInN1YiI6IjY3NGU5ZWVkYjRmZTQ3ZTdhNDg1ZDJhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KjwWZxlbFrTvMdAeMe6Hu7cfwqmvKnogAq5Vrse5OOE",
                    "Content-Type":"application/json"
                }
            });

              setCast(response.data); // Adjust according to the data structure
            
          } catch (error) {
            console.error('Error fetching cast', error);
          }
        };
    
        fetchCast();
      }, []);
    
      
    return (
        <div className="bg-main_blue relative inset-y-60 px-96 w-full h-screen flex flex-col mt-36 ">
            <h1 className="text-6xl text-white ">CAST</h1>
            <div className="h-0.5 bg-dark_shade_gray mt-3"/>
            <Carousel
      opts={{
        align: "start",
      }}
      className="w-full mt-5 "
    >
      <CarouselContent className="">
        {cast?.cast.map((ele, index) => (
          <CarouselItem key={index} className="md:basis-1/5 basis-1/3">
            <div className="p-1 flex flex-col items-center justify-center gap-2">
              {/* <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */}
              <img className="rounded-full w-36 h-36 object-cover z-10  border-2 hover:border-green-300" src={`https://image.tmdb.org/t/p/original/${ele.profile_path}`}/>
              <h1 className="text-white text-xl text-center text-bold">{ele.name}</h1>
              <h1 className="text-white text-md text-center text-bold -mt-1">{ele.known_for_department}</h1>

            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    <h1 className="text-6xl text-white mt-16 ">CREW</h1>
            <div className="h-0.5 bg-dark_shade_gray mt-3"/>
            <Carousel
      opts={{
        align: "start",
      }}
      className="w-full mt-5 "
    >
      <CarouselContent className="">
        {cast?.crew.map((ele, index) => (
          <CarouselItem key={index} className="md:basis-1/5 basis-1/3">
            <div className="p-1 flex flex-col items-center justify-center gap-2">
              {/* <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */}
              <img className="rounded-full w-36 h-36 object-cover z-10  border-2 hover:border-green-300" src={`https://image.tmdb.org/t/p/original/${ele.profile_path}`}/>
              <h1 className="text-white text-xl text-center text-bold">{ele.name}</h1>
              <h1 className="text-white text-md text-center text-bold -mt-1">{ele.known_for_department}</h1>

            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
        </div>
    )
}
export default Details;