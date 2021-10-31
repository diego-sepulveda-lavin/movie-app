import { MovieFullDetails } from '../../DTOs/movieFullDetails';
import { MovieSimpleDetails } from '../../DTOs/movieSimpleDetails';

export interface Props {
  movieDetails: MovieFullDetails | MovieSimpleDetails | null;
  size: number;
}
