import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MovieDetails } from '../components/MovieDetails/MovieDetails';
import { MovieFullDetails } from '../DTOs/movieFullDetails';
import { API_KEY } from '../index';
import { MovieImage } from '../components/MovieImage/MovieImage';

export const MoviePage = () => {
  const [movieDetails, setMovieDetails] = useState<MovieFullDetails | null>(null);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchMovieDetails(API_KEY!, id);
  }, [id]);

  const fetchMovieDetails = async (api_key: string, id: string) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`);
      const data = await response.json();

      if (response.status === 200) {
        setMovieDetails(data);
      } else {
        throw new Error('Something went wrong!');
      }
    } catch (error) {
      // REVISAR AUN NO FUNCIONANDO
      console.error(error);
      //setError(error);
    }
  };

  return (
    <div>
      <h1>Movie Details</h1>
      <div>
        <MovieImage movieDetails={movieDetails} size={300} />
        <MovieDetails movieDetails={movieDetails} />
      </div>
    </div>
  );
};
