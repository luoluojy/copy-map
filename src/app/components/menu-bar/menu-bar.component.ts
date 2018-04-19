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

  @Output() toggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  ngOnInit() {}

  openMenuDialog() {
    let dialogRef = this.dialog.open(MenuComponent, {
      position: {
        left: "0",
        top: "0"
      }
    });
    // this.appCommands.execute(AppCommand.EnterOrderCommand);
    dialogRef.afterClosed().subscribe(result => {
      let selectedItem = <number>result;
      if (selectedItem!=undefined) {
        this.toggleEmitter.emit(true);
      }
 
      if (selectedItem == 0) {
        this.appCommands.execute(AppCommand.NewScenarioCommand);
      } else if (selectedItem == 1) {
        this.appCommands.execute(AppCommand.OpenScenarioCommand);
      } else if (selectedItem == 2) {
        this.appCommands.execute(AppCommand.SaveScenarioCommand);
      } else if (selectedItem == 3) {
        this.appCommands.execute(AppCommand.ScenarioContentCommand);
      } else if (selectedItem == 4) {
        this.appCommands.execute(AppCommand.DataResourceCommand);
      } else if (selectedItem == 5) {
        this.appCommands.execute(AppCommand.AnalysisTaskCommand);
      } else if (selectedItem == 6) {
        this.appCommands.execute(AppCommand.BasemapResourceCommand);
      } else if (selectedItem == 7) {
        this.appCommands.execute(AppCommand.MaintainScenarioCommand);
      }
    });
  }
}
