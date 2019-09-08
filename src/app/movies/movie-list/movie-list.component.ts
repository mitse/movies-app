import { Component, OnInit, Input, OnChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { IMovieList } from '../movieModels';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnChanges {
  @Input() movieList: IMovieList[];
  @Input() totalPages: number;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();
  @Output() rowClicked: EventEmitter<number> = new EventEmitter();
  @Output() moviesSelected: EventEmitter<IMovieList[]> = new EventEmitter();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['poster_path', 'title', 'vote_average', 'select'];
  dataSource: IMovieList[] = [];
  selection = new SelectionModel<IMovieList>(true, []);
  isSelectionEmpty = true;

  // MatPaginator Inputs
  length = 100;
  pageSize = 20;
  pageSizeOptions: number[] = [20];

  isLoadingResults = false;
  // MatPaginator Output
  pageEvent: PageEvent;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log(this.movieList);
    this.dataSource = [...this.movieList];
    this.length = this.totalPages;
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(p => {
      const currentPage: number = p['pageIndex'] + 1;
      this.pageChanged.emit(currentPage);
    });
  }

  //Events
  onRowClicked(row: IMovieList) {
    this.rowClicked.emit(row.id);
  }

  onCheckBoxChange($event, row) {
    $event ? this.selection.toggle(row) : null;
    this.isSelectionEmpty = this.selection.isEmpty();
  }

  addToCollection() {
     this.moviesSelected.emit(this.selection.selected)
     console.log(this.selection.selected);
  }



}
