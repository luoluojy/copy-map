import { Component, OnInit, Inject } from '@angular/core';
import { MenuService } from './menu.service';
import { AppCommandService } from '../../app-command.service';
import { AppCommand } from '../../app-command.enum';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

/**
 * 菜单组件
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  /**
   * 构造函数
   * @param service
   * @param appCommands
   */
  constructor(private service: MenuService, private appCommands: AppCommandService,private dialogRef:MatDialogRef<MenuComponent>,@Inject(MAT_DIALOG_DATA) public data:any) {
    this.service.owner = this;
  }

  ngOnInit() { }

  /**
   * 应用标题
   */
  public get appTile(): string {
    return this.service.appInfo.title;
  }

  closeMenu() {
    this.dialogRef.close();
  }

}
