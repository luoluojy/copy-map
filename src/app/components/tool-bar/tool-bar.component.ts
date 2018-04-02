import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  constructor() { }

  locationsShown: boolean = false;
  atlasShown: boolean = false;
  toolsShown: boolean = false;
  noticeShown: boolean = false;
  userShown: boolean = false;
  
  ngOnInit() {}

  initLocationsClick(){
    if(this.locationsShown==false){
      this.locationsShown=true;
      this.atlasShown=false;
      this.toolsShown=false;
      this.noticeShown=false;
      this.userShown=false;
    }else{
        this.locationsShown=false;
    }
  }

  initAtlasClick(){
    if(this.atlasShown==false){
      this.atlasShown=true;
      this.toolsShown=false;
      this.noticeShown=false;
      this.userShown=false;
      this.locationsShown=false;
    }else{
        this.atlasShown=false;
    }
    
  }

  initToolsClick(){
    if(this.toolsShown==false){
      this.toolsShown=true;
      this.atlasShown=false;
      this.locationsShown=false;
      this.noticeShown=false;
      this.userShown=false;
    }else{
        this.toolsShown=false;
    }
    
  }

  initNoticeClick(){
    if(this.noticeShown==false){
      this.noticeShown=true;
      this.locationsShown=false;
      this.atlasShown=false;
      this.toolsShown=false;
      this.userShown=false;
    }else{
      this.noticeShown=false;
    }
    
  }

  initUserClick(){
    if(this.userShown==false){
      this.userShown=true;
      this.locationsShown=false;
      this.atlasShown=false;
      this.toolsShown=false;
      this.noticeShown=false;
    }else{
      this.userShown=false;
    }
    
  }
}
