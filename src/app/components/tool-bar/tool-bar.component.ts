import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ToolBarStatusService } from './tool-bar-status.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  constructor(public statusService: ToolBarStatusService) { }

  ngOnInit() { }

  initLocationsClick() {
    this.statusService.isLocationsAction = !this.statusService.isLocationsAction;

  }

  initAtlasClick() {
    this.statusService.isAtlasAction = !this.statusService.isAtlasAction;

  }

  initToolsClick() {
    this.statusService.isUtilAction = !this.statusService.isUtilAction;

  }

  initNoticeClick() {
    this.statusService.isNoticeAction = !this.statusService.isNoticeAction;

  }

  initUserClick() {
    this.statusService.isUserAction = !this.statusService.isUserAction;

  }
}
