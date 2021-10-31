import { Props } from './types';

import './search.scss';

export const Search = (props: Props) => {
  const { value, onChange, onClick } = props;
  return (
    <div className="search-container">
      <h1>Welcome to The Movie App</h1>
      <h2>Millions of movies. Explore Now!</h2>
      <div className="search-input">
        <input type="search" id="movie" placeholder="Enter a movie title" onChange={onChange} value={value} />
        <button type="button" onClick={onClick}>
          Search
        </button>
      </div>
    </div>
  );
};
