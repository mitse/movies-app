import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { ICollection } from '../collectionModel';
import { CollectionService } from '../collection.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { IMovieDetails, IMovieList } from 'src/app/movies/movieModels';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss'],
  providers: [MatDialogModule]
})
export class CollectionListComponent implements OnInit, OnDestroy {
  newCollectionAction: boolean;
  collections: ICollection[] = [];
  collectionSelected: ICollection;

  constructor(public dialogRef: MatDialogRef<CollectionListComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any, private collectionService: CollectionService) { }

  ngOnInit() {
    this.collections = this.collectionService.getCollections();
  }



  collectionChoosed(collection: ICollection) {
    if (!this.data || collection.added) return;

    const newMovies: IMovieList[] = this.data;
    this.collectionSelected = collection;

    if(!collection.movies)
       collection.movies = [];

    const newMoviesToAdd = newMovies.filter(m => {
      const found = collection.movies.find(movie=> movie.id === m.id);
      return found ? false: true;
    } );
    collection.movies = [...collection.movies, ...newMoviesToAdd];

    collection.added = true;
    this.updateCollection();
  }

  private updateCollection() {
    const collections = this.collections.map(c => ({
      ...c,
      added: null
    }));
    this.collectionService.saveToStorage(collections);
  }

  ngOnDestroy() {
    this.collectionSelected.added = false;
  }

}
