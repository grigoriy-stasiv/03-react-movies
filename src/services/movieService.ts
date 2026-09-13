import axios from 'axios';
import type { TMDBResponse } from '../types/movie';

const MY_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODM2MjU4NmRhMzNiNDNjOTM5ZGE2MTM4ZWQ0NWI1MSIsIm5iZiI6MTc4OTI4NTk4Mi43NjMsInN1YiI6IjZhYTY1NjVlMjJlMThlNWJkYTYwOWJmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WJsVdLsgoF_Pfq9cOtFW0WNBFpr8HZ4-dVX7TIoiczQ';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${MY_TOKEN}`,
  },
});

export const fetchMovies = async (query: string): Promise<TMDBResponse> => {
  const response = await instance.get<TMDBResponse>('/search/movie', {
    params: {
      query,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
  });
  return response.data;
};
