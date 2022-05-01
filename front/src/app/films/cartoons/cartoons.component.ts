import { Component, OnInit } from '@angular/core';
import { cartoons } from 'src/list_movies/cartoons';
import { detailing_film } from 'src/app/categories';

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

  Detailing(id: number, ctgr: string) {
    detailing_film.category = ctgr;
    for (let i = 0; i < cartoons.length; i++) {
      if (cartoons[i].id == id) {
        detailing_film.film = cartoons[i];
        break;
      }
    }
  }

}
