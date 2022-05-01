import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Movie, movies } from 'src/list_movies/movies';

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

}
