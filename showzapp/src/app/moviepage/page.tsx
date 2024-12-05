'use client'
import { useRouter } from 'next/navigation';
import Toolbar from "@/components/Toolbar";
import Hero2 from "@/components/Hero2";
import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieData from '@/data/Movie';
import { useSearchParams } from 'next/navigation';

const MoviePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [data, setData] = useState<MovieData | undefined>(undefined); // Allow data to be undefined initially
  const id = searchParams.get('id');;
  const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmQzOGI0MDFiZWViYWUzNGY0Y2JjNGM2NjVkNmI3ZSIsIm5iZiI6MTczMzIwNTc0MS40NDYsInN1YiI6IjY3NGU5ZWVkYjRmZTQ3ZTdhNDg1ZDJhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KjwWZxlbFrTvMdAeMe6Hu7cfwqmvKnogAq5Vrse5OOE'
  useEffect(() => {
    // Ensure ID is available before making the API call
    if (!id) return;

    const fetchDataById = async () => {
      try {
        const response = await axios.get<MovieData>(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=your_api_key`,{
          headers: {
            'Authorization': `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json'
          }
        });
        setData(response.data); // Use response.data since axios wraps the response
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataById();
  }, [id]);

  return (
    <div className="bg-main_blue w-full h-full">
      <Toolbar />
      {data ? <Hero2 movie={data} /> : <p>Loading...</p>} {/* Conditional rendering */}
    </div>
  );
};

export default MoviePage;
