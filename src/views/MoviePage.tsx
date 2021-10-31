import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { API_KEY } from '../index';
import { MovieFullDetails } from '../DTOs/movieFullDetails';

import { MovieDetails } from '../components/MovieDetails/MovieDetails';
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

      if (response.status !== 200) {
        throw new Error('Something went wrong!');
      }

      setMovieDetails(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="movie-page-container">
      <MovieImage movieDetails={movieDetails} size={300} className="movie-full-details-image" />
      <MovieDetails movieDetails={movieDetails} />
    </div>
  );
};
