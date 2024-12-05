
'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Concert from '@/data/Concert';
import Event from '@/data/Event';
import axios from 'axios';
type Movie = {
    id:Number,
    original_title: string;
    poster_path: string;
    popularity: Number;
    release_date: "2024-11-27"
  };

  // type EventImage = {
  //   url: string;
  // };
  
  // type EventDate = {
  //   start: {
  //     localDate: string;
  //   };
  // };
  
  // type EventVenue = {
  //   city: {
  //     name: string;
  //   };
  // };
  
  // type Event = {
  //   id: string;
  //   name: string;
  //   images: EventImage[];
  //   dates: EventDate;
  //   _embedded: {
  //     venues: EventVenue[];
  //   };
  // };
  
const Main = () => {
const router = useRouter();
const [events, setEvents] = useState<Event[]>([]);
const [movies, setMovies] = useState<Movie[]>([]);
const [sports,setSports] = useState<Concert[]>([]);
useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/movie'); // Replace with your actual backend endpoint
        const data = await response.json();
        
        if (data.error) {
          console.error('Failed to fetch data:', data.error);
        } else {
          
          setMovies(data.results.slice(0,3)); // Adjust according to the data structure
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events'); // Replace with your actual backend endpoint
        const data = await response.json();
        
        if (data.error) {
          console.error('Failed to fetch data:', data.error);
        } else {
          setEvents(data._embedded.events.slice(0,3)); // Adjust according to the data structure
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const fetchSports= async () => {
      try {
        const response = await axios('http://localhost:3000/api/sports'); // Replace with your actual backend endpoint
        const data:Concert[] = await response.data.events;
          setSports(data.slice(0,3)); // Adjust according to the data structure
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchSports();
  }, []);

  const goToAbout = (str:string) => {
    router.push(str);
  };
  const handleMovieClick = (movieId:string) => {
    router.push(`/moviepage?id=${movieId}`);
  };
  const handleSportsClick = (sportsId:string) => {
    router.push(`/sportspage?id=${sportsId}`);
  };
    return (
        <>
        <div className="w-full h-full flex flex-col justify-center bg-main_blue px-80"> 
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-6xl font-bold">MOVIES</h1>
                    <h1 className="text-green-400 font-bold cursor-pointer" onClick={()=>goToAbout("/movie")}>View all</h1>
                </div>
                <div className="h-0.5 bg-gray-600 mt-4 mb-8"> </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                {movies.map((movie, index) => (
            <div key={index} className="group relative group overflow-hidden flex flex-col rounded-2xl border hover:border-green-400 cursor-pointer" onClick={()=>handleMovieClick(movie.id.toString())}>
              <img
                className="w-auto h-96 object-cover  transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} // Event image URL
                alt={movie.original_title}
              />
              <div className="flex flex-col py-4 px-8">
                <h1 className="group-hover:text-green-400 text-white text-2xl font-bold">{movie.original_title}</h1>
                <div className="h-0.5 bg-gray-600 mt-3"></div>
                <div className="flex flex-col gap-2 mt-3">
                  <h1 className="group-hover:text-green-400 text-lg font-medium text-white">{`Release Date: ${movie.release_date}`}</h1>
                  <h2 className="group-hover:text-green-400 text-white text-lg font-medium">{`Popularity: ${movie.popularity}`}</h2>
                </div>
              </div>
            </div>
          ))}

        </div>
                
        </div>
        <div className="w-full h-full flex flex-col justify-center bg-main_blue px-80 mt-20"> 
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-6xl font-bold">SPORTS</h1>
                    <h1 className="text-green-400 font-bold cursor-pointer" onClick={()=>goToAbout("/sport")} >View all</h1>
                </div>
                <div className="h-0.5 bg-gray-600 mt-4 mb-8"> </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                {events.map((event, index) => (
            <div key={index} className="group relative group overflow-hidden flex flex-col rounded-2xl border hover:border-green-400 cursor-pointer" onClick={()=>handleSportsClick(event.id)}>
              <img
                className="w-auto h-96 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                src={event.images[0].url} // Event image URL
                alt={event.name}
              />
              <div className="flex flex-col py-4 px-8">
                <h1 className="group-hover:text-green-400 text-white text-2xl font-bold">{event.name}</h1>
                <div className="h-0.5 bg-gray-600 mt-3"></div>
                <div className="flex flex-col gap-2 mt-3">
                  <h1 className="group-hover:text-green-400 text-lg font-medium text-white">{event.dates.start.localDate}</h1>
                  <h2 className="group-hover:text-green-400 text-white text-lg font-medium">{event._embedded.venues[0].city.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
                
        </div>
        <div className="w-full h-full flex flex-col justify-center bg-main_blue px-80 mt-20 mb-20"> 
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-6xl font-bold">EVENTS</h1>
                    <h1 className="text-green-400 font-bold cursor-pointer" onClick={()=>goToAbout("/event")} >View all</h1>
                </div>
                <div className="h-0.5 bg-gray-600 mt-4 mb-8"> </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                {sports.map((sport, index) => (
            <div key={index} className="group relative group overflow-hidden flex flex-col rounded-2xl border hover:border-green-400 cursor-pointer">
              <img
                className="w-auto h-96 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                src={sport.poster} // Event image URL
                alt={sport.name}
              />
              <div className="flex flex-col py-4 px-8">
                <h1 className="group-hover:text-green-400 text-white text-2xl font-bold">{sport.name}</h1>
                <div className="h-0.5 bg-gray-600 mt-3"></div>
                <div className="flex flex-col gap-2 mt-3">
                  <h1 className="group-hover:text-green-400 text-lg font-medium text-white">{sport.event.event_venue}</h1>
                  <h2 className="group-hover:text-green-400 text-white text-lg font-medium">{sport.description}</h2>
                </div>
              </div>
            </div>
          ))}
                </div>
        </div>
        </>
    )
}
export default Main;