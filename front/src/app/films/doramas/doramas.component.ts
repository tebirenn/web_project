import { Component, OnInit } from '@angular/core';
import { doramas } from 'src/list_movies/dorama';

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

}
