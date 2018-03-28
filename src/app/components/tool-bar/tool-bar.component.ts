import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  constructor() { }

toolsShown:any={
  regionsShown:false,
  mapsShown:false,
  toolsShown:false,
  noticeShown:false,
  userShown:false,
};
  ngOnInit() {
    console.log(this.toolsShown.regionsShown)
  }

}
