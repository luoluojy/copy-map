import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";
import { DialogLoginComponent } from './dialog-login/dialog-login.component';
import { RepoTasksComponent } from './repo-tasks/repo-tasks.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private dialog:MatDialog) { }
  
  ngOnInit() {}

  openLoginDialog(){
    let dialogRef = this.dialog.open(DialogLoginComponent, {});
    dialogRef.afterClosed().subscribe(avatar =>{
      // 获取头像数据打印输出
      console.log(avatar);
    })
  }
  
  openRepoTasks(){
    console.log('repoTasks',localStorage.getItem('cloudStorageToken'));
    let dialogRef = this.dialog.open(RepoTasksComponent, {});
  }

}
