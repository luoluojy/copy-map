import { Component, OnInit } from '@angular/core';

import { MatDialog} from "@angular/material";
import { DialogLoginComponent } from './dialog-login/dialog-login.component'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private dialog:MatDialog) { }
  
  ngOnInit() {}

  openLoginDialog(){
    console.log(111)
    let dialogRef = this.dialog.open(DialogLoginComponent, {
    });
  }



}
