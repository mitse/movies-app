import { Injectable } from '@angular/core';
import { ICollection } from './collectionModel';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor() { }

  saveToStorage(collections: ICollection[]) {
    localStorage.setItem('collections', JSON.stringify(collections))
  }

  getCollections(): ICollection[] {
    const cols = localStorage.getItem('collections');
    return cols ? JSON.parse(cols) : [];
  }
}
