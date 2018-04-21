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

  @Input() drawer:any;

  ngOnInit() {}

  openMenuPanel() {
    this.appCommands.execute(AppCommand.EnterOrderCommand)
    this.drawer.toggle();
    // setTimeout(()=>{
      let modal =  <HTMLElement>document.getElementsByClassName('gisc-modal')[0];
      modal.style.visibility = 'visible';  
    // },150);
  }
}
