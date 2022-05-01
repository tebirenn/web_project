import { Component, OnInit } from '@angular/core';
import { doramas } from 'src/list_movies/dorama';
import { detailing_film } from 'src/app/categories';

@Component({
  selector: 'app-doramas',
  templateUrl: './doramas.component.html',
  styleUrls: ['./doramas.component.css']
})
export class DoramasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Doramas() {
    return doramas;
  }

  Detailing(id: number, ctgr: string) {
    detailing_film.category = ctgr;
    for (let i = 0; i < doramas.length; i++) {
      if (doramas[i].id == id) {
        detailing_film.film = doramas[i];
        break;
      }
    }
  }

}
