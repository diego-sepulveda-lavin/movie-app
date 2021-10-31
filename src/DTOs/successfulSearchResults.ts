import { MovieSimpleDetails } from './movieSimpleDetails';

export interface SuccessfulSearchResults {
  page: number;
  results: MovieSimpleDetails[];
  total_results: number;
  total_pages: number;
}
