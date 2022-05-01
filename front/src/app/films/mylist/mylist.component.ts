import { Component, OnInit } from '@angular/core';
import { my_list } from 'src/list_movies/mylist';

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

}
