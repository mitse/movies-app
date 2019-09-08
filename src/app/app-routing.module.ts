import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { BlankComponent } from './blank/blank.component';
import { PopupRoutingContainerComponent } from './shared/popup-routing-container/popup-routing-container.component';
import { CreateCollectionComponent } from './collections/create-collection/create-collection.component';

const routes: Routes = [
    { path: '',  redirectTo: 'movies', pathMatch: 'full' },
    { path: 'movies', component: BlankComponent },
    { path: 'movies/:id', component: PopupRoutingContainerComponent, data: {component: MovieDetailsComponent} },
    { path: 'collections', component: CreateCollectionComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
