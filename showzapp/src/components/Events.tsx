'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type EventImage = {
    url: string;
  };
  
  type EventDate = {
    start: {
      localDate: string;
    };
  };
  
  type EventVenue = {
    city: {
      name: string;
    };
  };
  
  type Event = {
    name: string;
    images: EventImage[];
    dates: EventDate;
    _embedded: {
      venues: EventVenue[];
    };
  };
  
const Events = () => {
    
const [events, setEvents] = useState<Event[]>([]);
  const router = useRouter();

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

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center bg-main_blue px-80">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-6xl font-bold">EVENTS</h1>
          <h1 className="text-green-400 font-bold" onClick={goToAbout}>View all</h1>
        </div>
        <div className="h-0.5 bg-gray-600 mt-4 mb-8"> </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {events.map((event, index) => (
            <div key={index} className="relative group flex flex-col rounded-2xl border hover:border-green-400">
              <img
                className="w-auto h-96 object-cover overflow-hidden transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                src={event.images[0].url} // Event image URL
                alt={event.name}
              />
              <div className="flex flex-col py-4 px-8">
                <h1 className="text-white text-2xl">{event.name}</h1>
                <div className="h-0.5 bg-gray-600"></div>
                <div className="flex gap-2">
                  <h1 className="text-white">{event.dates.start.localDate}</h1>
                  <h2 className="text-white">{event._embedded.venues[0].city.name}</h2>
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
