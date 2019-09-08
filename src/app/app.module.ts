import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MatComponentsModule } from './shared/mat-components.module';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { CollectionListComponent } from './collections/collection-list/collection-list.component';
import { SearchMoviesComponent } from './movies/search-movies/search-movies.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import {  HttpClientModule } from '@angular/common/http';
import { BlankComponent } from './blank/blank.component';
import { CreateCollectionComponent } from './collections/create-collection/create-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CollectionListComponent,
    SearchMoviesComponent,
    MovieDetailsComponent,
    MovieListComponent,
    BlankComponent,
    CreateCollectionComponent
  ],
  imports: [
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatComponentsModule,
    SharedModule
  ],
  entryComponents: [
    MovieDetailsComponent,
    CollectionListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
