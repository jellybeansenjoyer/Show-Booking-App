'use client'
import { useRouter } from 'next/navigation';
import Toolbar from "@/components/Toolbar";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ConcertHero from "@/components/ConcertHero";
import Footer from '@/components/Footer';
import Concert__ from '@/data/Concert';
import ConcertBar from '@/components/ConvertBar';
import ConcertDetail from "@/components/ConcertDetails";
const SportsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [data, setData] = useState<Concert__ | undefined>(undefined); // Allow data to be undefined initially
  const id = searchParams.get('id');
  useEffect(() => {
    // Ensure ID is available before making the API call
    if (!id) return;

    const fetchDataById = async () => {
      try {
        const response = await axios.get<Concert__>(`http://localhost:3000/api/sports_by_id/${id}/`);
        setData(response.data); // Use response.data since axios wraps the response
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataById();
  }, [id]);

  return (
    <div className="bg-main_blue w-full h-full">
      <Toolbar />
      {data ? <ConcertHero event={data} /> : <p>Loading...</p>}
      {data ? <ConcertBar event={data} /> : <p>Loading...</p>} 
      {data ? <ConcertDetail event={data} /> : <p>Loading...</p>}  
      <Footer/>
    </div>
  );
};

export default SportsPage;
