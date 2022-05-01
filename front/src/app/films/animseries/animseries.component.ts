import { Component, OnInit } from '@angular/core';
import { anim_series } from 'src/list_movies/animseries'; 

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

}
