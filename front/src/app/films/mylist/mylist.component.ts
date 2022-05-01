import { Component, OnInit } from '@angular/core';
import { my_list } from 'src/list_movies/mylist';
import { detailing_film } from 'src/app/categories';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  MyList () {
    return my_list;
  }

  Detailing(id: number, ctgr: string) {
    detailing_film.category = ctgr;
    for (let i = 0; i < my_list.length; i++) {
      if (my_list[i].id == id) {
        detailing_film.film = my_list[i];
        break;
      }
    }
  }

}
