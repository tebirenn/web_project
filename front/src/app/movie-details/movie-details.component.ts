import { Component, OnInit } from '@angular/core';
import { categories } from '../categories';
import { Movie, movies } from 'src/list_movies/movies';
import { Cartoon, cartoons } from 'src/list_movies/cartoons';
import { detailing_film } from '../categories';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  category: string = detailing_film.category;
  film = detailing_film.film;
  constructor() { }

  ngOnInit(): void {
  }

}
