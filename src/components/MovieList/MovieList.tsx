import { Props } from './types';

import './movieList.scss';

import { MovieItem } from '../MovieItem/MovieItem';

export const MovieList = (props: Props) => {
  const { movieList } = props;

  const movies = movieList?.results.map(movie => <MovieItem key={movie.id} movieSimpleDetails={movie} />);

  return <div className="movie-list-container">{movies}</div>;
};
