'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Movie = {
    id:Number,
    original_title: string;
    poster_path: string;
    popularity: Number;
    release_date: "2024-11-27"
  };
  
const Movies = () => {
    
const [movies, setMovies] = useState<Movie[]>([]);
  const router = useRouter();

  // Fetch events from the backend API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/movie'); // Replace with your actual backend endpoint
        const data = await response.json();
        
        if (data.error) {
          console.error('Failed to fetch data:', data.error);
        } else {
          
          setMovies(data.results); // Adjust according to the data structure
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleMovieClick = (movieId:string) => {
    router.push(`/moviepage?id=${movieId}`);
  };
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center bg-main_blue px-80">
        <div className="flex justify-start items-center">
          <h1 className="text-white text-6xl font-bold">MOVIES</h1>
        </div>
        <div className="h-0.5 bg-gray-600 mt-4 mb-8"> </div>
        <div className="mt-4 grid grid-cols-3 gap-10">
          {movies.map((movie, index) => (
            <div key={index} className="group overflow-hidden relative group flex flex-col rounded-2xl border hover:border-green-400 cursor-pointer" onClick={()=>handleMovieClick(movie.id.toString())}>
              <img
                className="w-auto h-96 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
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
    </>
  );
};

export default Movies;
