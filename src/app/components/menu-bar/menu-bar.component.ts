import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
  Inject
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

  @Output() shownEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() rightEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() menuBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() menuItemEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output() actionEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnInit() {}

  openMenu() {
    this.shownEmitter.emit(true);
    this.menuBarEmitter.emit(false);
  }

  selectedItem: number;

  openMenuDialog() {
    let dialogRef = this.dialog.open(MenuComponent, {
      position: {
        left: "0",
        top: "0"
      },
      data: { selectedItem: this.selectedItem }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.selectedItem = <number>result;
      this.menuItemEmitter.emit(this.selectedItem);

      this.actionEmitter.emit(true);
      this.menuBarEmitter.emit(false);
      if (this.selectedItem == 0) {
        this.appCommands.executeCommand(AppCommand.ProjectContent);
      } else if (this.selectedItem == 1) {
        this.appCommands.executeCommand(AppCommand.DataResource);
      } else if (this.selectedItem == 2) {
        this.appCommands.executeCommand(AppCommand.AnalysisTask);
      } else if (this.selectedItem == 3) {
        this.appCommands.executeCommand(AppCommand.BasemapResource);
      } else if (this.selectedItem == 4) {
        this.appCommands.executeCommand(AppCommand.NewProject);
      } else if (this.selectedItem == 5) {
        this.appCommands.executeCommand(AppCommand.OpenProject);
      } else if (this.selectedItem == 6) {
        this.appCommands.executeCommand(AppCommand.SaveProject);
      } else if (this.selectedItem == 7) {
        this.appCommands.executeCommand(AppCommand.MaintainProject);
      }
    });
  }
}
