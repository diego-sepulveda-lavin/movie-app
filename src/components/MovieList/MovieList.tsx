import { MovieItem } from '../MovieItem/MovieItem';
import { Props } from './types';

export const MovieList = (props: Props) => {
  const { movieList } = props;

  const movies = movieList?.results.map(movie => <MovieItem key={movie.id} movieSimpleDetails={movie} />);

  return <div>{movies}</div>;
};
