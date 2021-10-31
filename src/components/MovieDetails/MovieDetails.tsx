import { Props } from './types';

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

  return (
    <div>
      <div>
        <p>Title: {title}</p>
      </div>
      <div>
        <p>Status: {status}</p>
        <p>
          Genres:
          {genres?.map(genre => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </p>
        <p>Popularity: {popularity}</p>
      </div>
      <div>
        <p>Original Language: {originalLanguage}</p>
        <p>
          Spoken Languages:{' '}
          {spokenLanguages?.map(language => (
            <span key={language.iso_639_1}>{language.name}</span>
          ))}
        </p>
      </div>
      <p>
        Production Companies:{' '}
        {productionCompanies?.map(company => (
          <span key={company.id}>{company.name}</span>
        ))}
      </p>
      <p>{overview}</p>
      <p>Homepage: {homepage}</p>
    </div>
  );
};
