import { NextResponse } from 'next/server';

// Replace with your actual Ticketmaster API key
const API_KEY = 'RoMNBEAhvlLoODI82LoCh3R90bIsC6uG';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';

export async function GET() {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}`);
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch data' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
