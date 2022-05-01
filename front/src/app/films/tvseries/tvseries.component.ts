import { Component, OnInit } from '@angular/core';
import { tv_series } from 'src/list_movies/tvseries';

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

}
