'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Concert from '@/data/ConcertM';
import axios from 'axios';

const Events = () => {
    
const [events, setEvents] = useState<Event[]>([]);
  const router = useRouter();
  const [sports,setSports] = useState<Concert[]>([]);
  useEffect(() => {
      const fetchSports= async () => {
        try {
          const response = await axios('http://localhost:3000/api/sports'); // Replace with your actual backend endpoint
          const data:Concert[] = await response.data.events;
            setSports(data); // Adjust according to the data structure
        } catch (error) {
          console.error('Error fetching events:', error);
        }
      };
  
      fetchSports();
    }, []);
    
  // Fetch events from the backend API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events'); // Replace with your actual backend endpoint
        const data = await response.json();
        
        if (data.error) {
          console.error('Failed to fetch data:', data.error);
        } else {
          setEvents(data._embedded.events); // Adjust according to the data structure
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const goToAbout = () => {
    router.push('/about');
  };
  const handleEventsClick = (concertId: string) => {
    router.push(`/eventspage?id=${concertId}`);
  };
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center bg-main_blue px-80">
        <div className="flex justify-start items-center">
          <h1 className="text-white text-6xl font-bold">EVENTS</h1>
        </div>
        <div className="h-0.5 bg-gray-600 mt-4 mb-8"> </div>
        <div className="mt-4 grid grid-cols-3 gap-10">
        {sports.map((sport, index) => (
            <div key={index} className="group relative group overflow-hidden flex flex-col rounded-2xl border hover:border-green-400 cursor-pointer" onClick={()=>{handleEventsClick(sport.id.toString())}}>
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
  );
};

export default Events;
