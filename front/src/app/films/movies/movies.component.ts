import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Movie, movies } from 'src/list_movies/movies';
import { categories } from 'src/app/categories';
import { detailing_film } from 'src/app/categories';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  
  Movies () {
    return movies;
  }

  Detailing(id: number, ctgr: string) {
    detailing_film.category = ctgr;
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id == id) {
        detailing_film.film = movies[i];
        break;
      }
    }
  }
}
