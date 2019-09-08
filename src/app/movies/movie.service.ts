import { Injectable } from '@angular/core';
import { Constants } from '../constants';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IMovieApi, IMovieDetails, IspokenLanguages } from './movieModels';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiEndpoint = Constants.apiEndpoint;
  private apiKey = Constants.apiKey;

  constructor(private http: HttpClient, private authService: AuthService) { }

  getMovies(movieTerm: string, page = 1): Observable<any> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('query', movieTerm)
      .set('page', page.toString());

    return this.http.get<IMovieApi[]>(`${this.apiEndpoint}/search/movie?`, { params })
      .pipe(map(res => {
        const totalPages = res['total_pages'];
        const moviesApi: IMovieApi[] = res['results'];
        const movieList = moviesApi.map(movie =>
          ({
            id: movie.id,
            title: movie.title,
            poster_path: this.setPosterPath(movie.poster_path),
            vote_average: movie.vote_average
          })
        );

        return {
          totalPages,
          movieList
        }
      }));
  }

  getMovieDetails(movieId): Observable<IMovieDetails> {
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get<any>(`${this.apiEndpoint}/movie/${movieId}?`, { params })
      .pipe(map(res => {
        const movieDetails = {
          id: res.id,
          title: res.title,
          overview: res.overview,
          poster_path: this.setPosterPath(res.poster_path),
          budget: res.budget,
          release_date: res.release_date,
          revenue: res.revenue,
          vote_average: res.vote_average,
          vote_count: res.vote_count,
          spoken_languages: this.setSpokenLanguages(res.spoken_languages),
        } as IMovieDetails;
        return movieDetails;
      }));
  }

  rateMovie(movieId, value) {
    this.authService.getNewSessionId().subscribe(sessionId => {
      const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('guest_session_id', sessionId)

      return this.http.post<IMovieApi[]>(`${this.apiEndpoint}/movie/${movieId}/rating?`, { value }, { params })
        .pipe(map(res => res)).subscribe(res => console.log(res));
    })
  }


  private setPosterPath(posterPath: string) {
    if (posterPath)
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    return null;
  }

  private setSpokenLanguages(spokenLanguages: IspokenLanguages[]): string[] {
    return spokenLanguages.map(lang => lang.name);
  }
}
