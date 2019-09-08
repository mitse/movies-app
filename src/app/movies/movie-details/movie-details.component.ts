import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieService } from '../movie.service';
import { IMovieDetails } from '../movieModels';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
   movieDetails:  IMovieDetails;
   spokenLanguages: string;
   movieId: string;

  constructor(public dialogRef: MatDialogRef<MovieDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private movieService: MovieService) { }

  ngOnInit() {
    this.movieId = this.data ? this.data['id']: null;
    this.movieService.getMovieDetails(this.movieId).subscribe(res => {
      this.spokenLanguages = res.spoken_languages.join(',');
      this.movieDetails = res;
    });
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
     this.movieService.rateMovie(this.movieId, $event.newValue);

  }

}
