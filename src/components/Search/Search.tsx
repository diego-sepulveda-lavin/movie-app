import { Props } from './types';

export const Search = (props: Props) => {
  const { value, onChange, onClick } = props;
  return (
    <div>
      <input type="search" id="movie" placeholder="Enter a movie title" onChange={onChange} value={value} />
      <button type="button" onClick={onClick}>
        Search
      </button>
    </div>
  );
};
