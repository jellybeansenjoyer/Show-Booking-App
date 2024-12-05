'use client'
import { useRouter } from 'next/navigation';
import Toolbar from "@/components/Toolbar";
import Hero2 from "@/components/Hero2";
import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieData from '@/data/Movie';
import { useSearchParams } from 'next/navigation';
import SportsBar from '@/components/SportsBar';
import Details from '@/components/Details';
import Event from "@/components/Events";
import Sports from "@/data/Sports";
import SportsHero from "@/components/SportsHero"
import SportsDetails from "@/components/SportsDetails"
const SportsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [data, setData] = useState<Sports | undefined>(undefined); // Allow data to be undefined initially
  const id = searchParams.get('id');
  const API_KEY = "RoMNBEAhvlLoODI82LoCh3R90bIsC6uG"
  useEffect(() => {
    // Ensure ID is available before making the API call
    if (!id) return;

    const fetchDataById = async () => {
      try {
        const response = await axios.get<Sports>(`https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=${API_KEY}`);
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
      {data ? <SportsHero sports={data} /> : <p>Loading...</p>}
      {data ? <SportsBar sports={data} /> : <p>Loading...</p>}
      {data ? <SportsDetails sports={data} /> : <p>Loading...</p>} 
    
    </div>
  );
};

export default SportsPage;
