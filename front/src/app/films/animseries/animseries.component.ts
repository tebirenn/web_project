import { Component, OnInit } from '@angular/core';
import { anim_series } from 'src/list_movies/animseries';
import { detailing_film } from 'src/app/categories';

@Component({
  selector: 'app-animseries',
  templateUrl: './animseries.component.html',
  styleUrls: ['./animseries.component.css']
})
export class AnimseriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Animes () {
    return anim_series;
  }

  Detailing(id: number, ctgr: string) {
    detailing_film.category = ctgr;
    for (let i = 0; i < anim_series.length; i++) {
      if (anim_series[i].id == id) {
        detailing_film.film = anim_series[i];
        break;
      }
    }
  }

}
