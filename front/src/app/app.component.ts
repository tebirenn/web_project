import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<app-login [is_login]="isLogin"></app-login>`,
})
export class AppComponent {
  title = 'front';
  isLogin:boolean = true;
  category:string ='Movies';
}
