import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { MenuBarService } from "./menu-bar.service";
import { MenuComponent } from "../menu/menu.component";
import { AppCommandService } from "../../app-command.service";

import { AppCommand } from "../../app-command.enum";

/**
 *
 */
@Component({
  selector: "app-menu-bar",
  templateUrl: "./menu-bar.component.html",
  styleUrls: ["./menu-bar.component.css"]
})
export class MenuBarComponent implements OnInit {
  /**
   * 构造函数
   * @param service
   */
  constructor(
    private service: MenuBarService,
    private appCommands: AppCommandService
  ) {
    this.service.owner = this;
  }

  ngOnInit() { }

  /**
   * 点击菜单按钮
   */
  onMenuClick() {
    this.appCommands.execute(AppCommand.EnterOrderCommand)
  }
}
