import { MovieDetails } from './movieDetails';

export interface SuccessfulSearchResults {
  page: number;
  results: MovieDetails[];
  total_results: number;
  total_pages: number;
}
