import { Props } from './types';
import defaultImage from '../../assets/default-poster.jpg';

export const MovieItem = (props: Props) => {
  const { original_language: originalLanguaje, poster_path: posterPath, title, overview } = props.movieDetails;

  const imageSrc = posterPath ? `https://image.tmdb.org/t/p/w200/${posterPath}` : defaultImage;
  return (
    <div>
      <div>
        <img src={imageSrc} alt={title} />
      </div>
      <div>
        <p>Title: {title}</p>
        <p>Language: {originalLanguaje}</p>
        <p>Overview: {overview}</p>
      </div>
    </div>
  );
};
