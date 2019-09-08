import { Component, OnInit } from '@angular/core';
import { ICollection } from '../collectionModel';
import { CollectionService } from '../collection.service';
import { IMovieDetails } from 'src/app/movies/movieModels';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.scss']
})
export class CreateCollectionComponent implements OnInit {
  newCollection: ICollection = {} as ICollection;
  collections: ICollection[] = [];

  constructor(private collectionService: CollectionService, private router: Router) { }

  ngOnInit() {
    this.collections = this.collectionService.getCollections();
    this.newCollection = this.createNewCollection();
  }

  private createNewCollection() {
    return {
      id: new Date(),
      title: '',
      description: '',
      movies: []
    } as ICollection;
  }

  addNewCollection() {
    this.collections = [...this.collections, this.newCollection];
    this.collectionService.saveToStorage(this.collections);

    this.newCollection = {} as ICollection;
  }

  onMovieClick(movie: IMovieDetails) {
     //set state to navigate back
     this.router.navigateByUrl(`/movies/${movie.id}`, { state: { collections: true } });
  }

}
