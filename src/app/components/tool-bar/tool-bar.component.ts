import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  regionsShown: boolean = false;
  mapsShown: boolean = false;
  toolsShown: boolean = false;
  noticeShown: boolean = false;
  userShown: boolean = false;
  
  ngOnInit() {}

  initRegionsClick(){
    if(this.regionsShown==false){
      this.regionsShown=true;
      this.mapsShown=false;
      this.toolsShown=false;
      this.noticeShown=false;
      this.userShown=false;
    }else{
        this.regionsShown=false;
    }
  }

  initMapsClick(){
    if(this.mapsShown==false){
      this.mapsShown=true;
      this.toolsShown=false;
      this.noticeShown=false;
      this.userShown=false;
      this.regionsShown=false;
    }else{
        this.mapsShown=false;
    }
    
  }

  initToolsClick(){
    if(this.toolsShown==false){
      this.toolsShown=true;
      this.mapsShown=false;
      this.regionsShown=false;
      this.noticeShown=false;
      this.userShown=false;
    }else{
        this.toolsShown=false;
    }
    
  }

  initNoticeClick(){
    if(this.noticeShown==false){
      this.noticeShown=true;
      this.regionsShown=false;
      this.mapsShown=false;
      this.toolsShown=false;
      this.userShown=false;
    }else{
      this.noticeShown=false;
    }
    
  }

  initUserClick(){
    if(this.userShown==false){
      this.userShown=true;
      this.regionsShown=false;
      this.mapsShown=false;
      this.toolsShown=false;
      this.noticeShown=false;
    }else{
      this.userShown=false;
    }
    
  }
}
