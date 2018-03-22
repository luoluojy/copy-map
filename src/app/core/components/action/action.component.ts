import { Component, OnInit, Input, Output,OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../common/reducer';
import * as OpenedActions from '../../../common/action';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit,OnChanges {

  constructor(private store:Store<AppState>) { }

showNewProject:boolean;
showOpenProject:boolean;
showManageProject:boolean;
showContent:boolean;
showQuery:boolean;
showAnalysis:boolean;


@Output() flagEmitter :EventEmitter<number>=new EventEmitter<number>()

checkFlag(){
  this.flagEmitter.emit(-1);
}
@Input() flag:number=-1;

  ngOnInit() {
  }


  ngOnChanges(changes:SimpleChanges):void{
    // console.log(changes,this.showNewProject,this.showOpenProject)  
    // if(changes['showNewProject'])this.showNewProject=changes['showNewProject'].currentValue;
    // if(changes['showOpenProject'])this.showOpenProject=changes['showOpenProject'].currentValue;
    this.flag = changes['flag'].currentValue;

    if(this.flag==0){
      this.showNewProject=true;
      this.showOpenProject=false;     
      this.showManageProject=false;
      this.showContent=false;  
      this.showQuery=false;
      this.showAnalysis=false;
    }else if(this.flag==1){
      this.showOpenProject=true;     
      this.showNewProject=false;      
      this.showManageProject=false;
      this.showContent=false;  
      this.showQuery=false;
      this.showAnalysis=false;

    }else if(this.flag==2){
      this.showManageProject=true;
      this.showNewProject=false;
      this.showOpenProject=false;      
      this.showContent=false;  
      this.showQuery=false;
      this.showAnalysis=false;
    }else if(this.flag==3){
      this.showContent=true;  
      this.showOpenProject=false;     
      this.showNewProject=false;      
      this.showManageProject=false;
      this.showQuery=false;
      this.showAnalysis=false;
    }else if(this.flag==4){
      this.showQuery=true;
      this.showOpenProject=false;     
      this.showNewProject=false;      
      this.showManageProject=false;
      this.showContent=false;
      this.showAnalysis=false;
    }else if(this.flag==5){
      this.showAnalysis=true;
      this.showOpenProject=false;     
      this.showNewProject=false;      
      this.showManageProject=false;
      this.showContent=false;  
      this.showQuery=false;   
    }
  }

recNewFlag(event){
  this.showNewProject=event;
  this.checkFlag();
}
recOpenFlag(event){
  this.showOpenProject=event;
  this.checkFlag();
}
recManageFlag(event){
  this.showManageProject=event;
  this.checkFlag();
}
recContentFlag(event){
  this.showContent=event;
  this.checkFlag();
}
recQueryFlag(event){
  this.showQuery=event;
  this.checkFlag();
}
recAnalysisFlag(event){
  this.showAnalysis=event;
  this.checkFlag();
}
}
