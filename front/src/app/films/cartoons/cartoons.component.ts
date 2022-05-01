import { Component, OnInit } from '@angular/core';
import { cartoons } from 'src/list_movies/cartoons';

@Component({
  selector: 'app-cartoons',
  templateUrl: './cartoons.component.html',
  styleUrls: ['./cartoons.component.css']
})
export class CartoonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Cartoons () {
    return cartoons;
  }

}
