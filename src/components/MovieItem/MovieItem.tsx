import { Link } from 'react-router-dom';

import { Props } from './types';

import './movieItem.scss';

import { MovieImage } from '../MovieImage/MovieImage';

export const MovieItem = (props: Props) => {
  const { original_language: originalLanguaje, title, id } = props.movieSimpleDetails;
  let { overview } = props.movieSimpleDetails;

  if (overview) {
    overview = overview.length > 200 ? overview.slice(0, 200) + '...' : overview;
  } else {
    overview = 'Not Available';
  }

  return (
    <Link to={`/details/${id}`} className="movie-item-card">
      <MovieImage movieDetails={props.movieSimpleDetails} size={200} className="movie-item-card-image" />
      <div className="movie-item-card-data">
        <p className="title">{title}</p>
        <p className="language">Language: {originalLanguaje.toUpperCase()}</p>
        <p className="overview">{overview}</p>
      </div>
    </Link>
  );
};
