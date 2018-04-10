import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isLogin:boolean = false; 
  constructor() { }
  ngOnInit() {
  }
  toLogin(){
    this.isLogin = true;
  }
  recIsLogin(event){
    this.isLogin =event;
  }

}
