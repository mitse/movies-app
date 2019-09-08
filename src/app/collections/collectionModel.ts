import { IMovieList, IMovieDetails } from '../movies/movieModels';

export interface ICollection {
  id: any,
  title: string;
  description: string;
  movies: IMovieList[];
  added?: boolean;
}
