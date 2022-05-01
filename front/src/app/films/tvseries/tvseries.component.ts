import { Component, OnInit } from '@angular/core';
import { tv_series } from 'src/list_movies/tvseries';
import { detailing_film } from 'src/app/categories';

@Component({
  selector: 'app-tvseries',
  templateUrl: './tvseries.component.html',
  styleUrls: ['./tvseries.component.css']
})
export class TvseriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  TVSeries () {
    return tv_series;
  }

  Detailing(id: number, ctgr: string) {
    detailing_film.category = ctgr;
    for (let i = 0; i < tv_series.length; i++) {
      if (tv_series[i].id == id) {
        detailing_film.film = tv_series[i];
        break;
      }
    }
  }

}
