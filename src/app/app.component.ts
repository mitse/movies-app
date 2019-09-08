import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'movies-app';
  keepMoviesList = true;

  constructor(private router: Router) {
    router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd))
      .subscribe(event => {
        const url: string = event.url;
        this.keepMoviesList = url.includes('/collections') ? false : true;
      })
  }
}
