import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
  Inject,
  Input
} from "@angular/core";
import { Observable } from "rxjs/Observable";
import { MenuBarService } from "./menu-bar.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
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
    private dialog: MatDialog,
    private appCommands: AppCommandService
  ) {
    this.service.owner = this;
  }

  @Input() drawer:any;

  ngOnInit() {}

  openMenuPanel() {
    this.appCommands.execute(AppCommand.EnterOrderCommand)
    this.drawer.toggle();
  }
}
