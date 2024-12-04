'use client';

import { useEffect, useState } from 'react';

type Event = {
  id: string;
  name: string;
  url: string;
  photo: string
};

export default function TestPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/api/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data._embedded?.events || []);
      } catch (err: any) {
        setError(err.message);
      }
    }

    fetchEvents();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Test Page</h1>
      <ul>
        {events.length === 0 ? (
          <p>No events found.</p>
        ) : (
          events.map((event) => (
            <li key={event.id}>
              <a href={event.url} target="_blank" rel="noopener noreferrer">
                {event.name}
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
