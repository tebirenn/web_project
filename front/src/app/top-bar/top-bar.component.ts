import { Component, OnInit } from '@angular/core';
import { Category, categories } from '../categories';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  category:string = '';
  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < categories.length; i++) {
      if(categories[i].picked) {
        this.category = categories[i].title;
        break;
      }
    }
  }

  getCategories() {
    return categories;
  }

  getCategory () {
    return this.category;
  }

  setCategory (title: string) {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].title == title) {
        this.category = title;
        categories[i].picked = true;
      } else {
        categories[i].picked = false;
      }
    }
  }

}
