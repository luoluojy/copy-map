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
<<<<<<< HEAD

  // locationsShown: boolean = false;
  // atlasShown: boolean = false;
  // toolsShown: boolean = false;
  // noticeShown: boolean = false;
  // userShown: boolean = false;

=======
  
>>>>>>> c9f0c7eacc965b6e7d4c6b23a7698f559609b4de
  ngOnInit() { }

  initLocationsClick() {
    this.statusService.isLocationsAction = !this.statusService.isLocationsAction;
<<<<<<< HEAD

    // if (this.locationsShown == false) {
    //   this.locationsShown = true;
    //   this.atlasShown = false;
    //   this.toolsShown = false;
    //   this.noticeShown = false;
    //   this.userShown = false;
    // } else {
    //   this.locationsShown = false;
    // }
=======
    
>>>>>>> c9f0c7eacc965b6e7d4c6b23a7698f559609b4de
  }

  initAtlasClick() {
    this.statusService.isAtlasAction = !this.statusService.isAtlasAction;
<<<<<<< HEAD

    // if (this.atlasShown == false) {
    //   this.atlasShown = true;
    //   this.toolsShown = false;
    //   this.noticeShown = false;
    //   this.userShown = false;
    //   this.locationsShown = false;
    // } else {
    //   this.atlasShown = false;
    // }

=======
    
>>>>>>> c9f0c7eacc965b6e7d4c6b23a7698f559609b4de
  }

  initToolsClick() {
    this.statusService.isUtilAction = !this.statusService.isUtilAction;

<<<<<<< HEAD
    // if (this.toolsShown == false) {
    //   this.toolsShown = true;
    //   this.atlasShown = false;
    //   this.locationsShown = false;
    //   this.noticeShown = false;
    //   this.userShown = false;
    // } else {
    //   this.toolsShown = false;
    // }

=======
>>>>>>> c9f0c7eacc965b6e7d4c6b23a7698f559609b4de
  }

  initNoticeClick() {
    this.statusService.isNoticeAction = !this.statusService.isNoticeAction;

<<<<<<< HEAD
    // if (this.noticeShown == false) {
    //   this.noticeShown = true;
    //   this.locationsShown = false;
    //   this.atlasShown = false;
    //   this.toolsShown = false;
    //   this.userShown = false;
    // } else {
    //   this.noticeShown = false;
    // }

=======
>>>>>>> c9f0c7eacc965b6e7d4c6b23a7698f559609b4de
  }

  initUserClick() {
    this.statusService.isUserAction = !this.statusService.isUserAction;

<<<<<<< HEAD
    // if (this.userShown == false) {
    //   this.userShown = true;
    //   this.locationsShown = false;
    //   this.atlasShown = false;
    //   this.toolsShown = false;
    //   this.noticeShown = false;
    // } else {
    //   this.userShown = false;
    // }

=======
>>>>>>> c9f0c7eacc965b6e7d4c6b23a7698f559609b4de
  }
}
