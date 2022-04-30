import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() login:boolean = false;

  @Input()
  set is_login(isLogin:boolean) {
    this.login = isLogin;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
