import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit {

  @Output() loginEmitter:EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  closeLoginDialog(){
    this.loginEmitter.emit(false);
  }

  login(value){
    let username = value['login'];
    let password = value['password'];
    this.http.post('http://58.213.133.181:7774/api2/auth-token/',JSON.stringify({
      username:username,
      password:password
    }),{
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8',
      })
    }).subscribe((value)=>{
      if(value['token']){
        alert('登录成功'+value['token'])
      }
    },(error)=>{
        alert('登录失败'+error['error']['non_field_errors']);
    })
  }

}
