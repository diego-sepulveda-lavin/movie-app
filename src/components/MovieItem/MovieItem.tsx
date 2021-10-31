import { Link } from 'react-router-dom';

import { Props } from './types';
import { MovieImage } from '../MovieImage/MovieImage';

export const MovieItem = (props: Props) => {
  const {
    original_language: originalLanguaje,
    title,
    overview,
    id,
  } = props.movieSimpleDetails;

  return (
    <Link to={`/details/${id}`}>
      <div>
        <MovieImage movieDetails={props.movieSimpleDetails} size={200} />
        <div>
          <p>Title: {title}</p>
          <p>Language: {originalLanguaje}</p>
          <p>Overview: {overview}</p>
        </div>
      </div>
    </Link>
  );
};
