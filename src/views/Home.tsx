import { useState } from 'react';

import { API_KEY } from '../index';
import { SuccessfulSearchResults } from '../DTOs/successfulSearchResults';

import { MovieList } from '../components/MovieList/MovieList';
import { Paginator } from '../components/Paginator/Paginator';
import { Search } from '../components/Search/Search';

export const Home = () => {
  const [searchedMovie, setSearchedMovie] = useState('');
  const [movieList, setMovieList] = useState<SuccessfulSearchResults | null>(null);

  const onSearchedMovieChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedMovie(e.target.value);
  };

  const onSearchButtonClicked = () => {
    fetchMovies(API_KEY!, searchedMovie);
  };

  const onPageChanged = (page: number) => {
    fetchMovies(API_KEY!, searchedMovie, page);
  };

  const fetchMovies = async (api_key: string, movie: string, page: number = 1) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${movie}&page=${page}`
      );
      const data = await response.json();

      if (response.status !== 200) {
        throw new Error('Something went wrong!');
      }

      setMovieList(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Search value={searchedMovie} onChange={onSearchedMovieChanged} onClick={onSearchButtonClicked} />
      <MovieList movieList={movieList} />
      <Paginator currentPage={movieList?.page} totalPages={movieList?.total_pages} onClick={onPageChanged} />
    </div>
  );
};
