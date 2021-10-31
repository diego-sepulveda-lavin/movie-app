import { Props } from './types';

import './movieDetails.scss';

export const MovieDetails = (props: Props) => {
  const {
    original_language: originalLanguage,
    production_companies: productionCompanies,
    spoken_languages: spokenLanguages,
    title,
    homepage,
    popularity,
    status,
    genres,
    overview,
  } = props.movieDetails || {};

  const otherLanguages = spokenLanguages?.map(language => language.english_name).join(', ');
  const companies = productionCompanies?.map(company => company.name).join(', ');
  const totalGenres = genres?.map(genre => genre.name).join(' - ');

  return (
    <div className="movie-details">
      <h1 className="page-title">Movie Details</h1>
      <div className="movie-details-content">
        <p className="title">{title}</p>
        <p className="status">{status}</p>
      </div>
      <div className="movie-details-content">
        <div className="dot"></div>
        <span>{totalGenres}</span>
        <p className="popularity">Popularity: {popularity}</p>
      </div>
      <div className="movie-details-content">
        <p className="languages">Original Language: {originalLanguage?.toUpperCase()}</p>
        <p className="languages">
          Spoken Languages: <span>{otherLanguages + '.'}</span>
        </p>
      </div>
      <h3>Overview</h3>
      <p className="overview-info">{overview}</p>
      <p className="production-data">
        Production Companies: <span>{companies ? companies : 'Not Available.'}</span>
      </p>
      <p className="homepage-link">Homepage: {homepage ? homepage : 'Not Available.'}</p>
    </div>
  );
};
