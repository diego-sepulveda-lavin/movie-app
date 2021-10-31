import { Props } from './types';

import defaultImage from '../../assets/default-poster.jpg';

export const MovieImage = (props: Props) => {
  const { poster_path: posterPath, backdrop_path: backdropPath, title } = props.movieDetails || {};
  const { size } = props;

  let imageSrc = `https://image.tmdb.org/t/p/w${size}/${posterPath}`;
  if (!posterPath) {
    imageSrc = `https://image.tmdb.org/t/p/w${size}/${backdropPath}`;
  }
  if (!posterPath && !backdropPath) {
    imageSrc = defaultImage;
  }

  const Loading = () => <p>Loading...</p>;

  const Image = () => <img src={imageSrc} alt={title} />;

  return <div>{props.movieDetails ? <Image /> : <Loading />}</div>;
};
