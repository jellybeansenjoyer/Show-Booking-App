import { NextResponse } from 'next/server';

// Replace with your actual Ticketmaster API key
const BASE_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmQzOGI0MDFiZWViYWUzNGY0Y2JjNGM2NjVkNmI3ZSIsIm5iZiI6MTczMzIwNTc0MS40NDYsInN1YiI6IjY3NGU5ZWVkYjRmZTQ3ZTdhNDg1ZDJhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KjwWZxlbFrTvMdAeMe6Hu7cfwqmvKnogAq5Vrse5OOE"
export async function GET() {
  try {
    const response = await fetch(`${BASE_URL}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${TOKEN}`
        }
    });
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch data' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
