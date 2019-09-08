export interface IMovieApi {
  adult: false
  backdrop_path: string;
  genre_ids: any[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string | Date;
  title: string;
  video: false
  vote_average: number;
  vote_count: number;
}


export interface IMovieList {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
}

export interface IMovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  budget: number;
  release_date: string | Date;
  revenue: number;
  vote_average: number;
  vote_count: number;
  spoken_languages: string[];
}


export interface IspokenLanguages {
  iso: string;
  name: string;
}
