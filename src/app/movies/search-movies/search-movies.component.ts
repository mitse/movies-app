import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { IMovieList } from '../movieModels';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CollectionListComponent } from 'src/app/collections/collection-list/collection-list.component';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent implements OnInit {
  movieTerm: string;
  movieList: IMovieList[];
  totalPages: number;
  constructor(private movieService: MovieService,
          private router: Router,
          private matDialog: MatDialog,) { }

  ngOnInit() {
  }

   onSearchMovie(movieTerm: string) {
    this.movieTerm = movieTerm;
    if(movieTerm.length <3) return;
    this.movieService.getMovies(movieTerm).subscribe(res => {
      this.movieList = res['movieList'];
      this.totalPages = res['totalPages'];
    });
  }

   onPageChange(currentPage: number) {
    this.movieService.getMovies(this.movieTerm, currentPage).subscribe(res => {
      this.movieList = res['movieList'];
    });
  }

   onRowClick(movieId: number) {
    this.router.navigateByUrl(`movies/${movieId}`);

  }

  onMoviesSelected(movies: IMovieList[]) {
     this.matDialog.open(CollectionListComponent, { data: movies });
  }

}
