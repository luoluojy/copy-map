import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../common/reducer';
import * as OpenedActions from '../../../common/action';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
  animations: [
    trigger('infoState', [
      state('-1', style({
        left: '0px'
      })),
      state('*', style({
        left: '410px'
      })),
      transition('-1 => *', animate('100ms ease-in')),
      transition('* => -1', animate('100ms ease-out'))
    ])
  ]
})
export class ActionComponent implements OnInit, OnChanges {

  constructor(private store: Store<AppState>) { }

  showNewProject: boolean;
  showOpenProject: boolean;
  showManageProject: boolean;
  showContent: boolean;
  showQuery: boolean;
  showAnalysis: boolean;

  infoState: string;

  @Output() flagEmitter: EventEmitter<number> = new EventEmitter<number>()

  checkFlag(flag) {
    this.flagEmitter.emit(flag);
  }
  @Input() flag: number = -1;

  @Input() bottomFlag:string='false';

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['bottomFlag'])
    this.flag = changes['flag'].currentValue;
    this.infoState = this.flag.toString();
    if (this.flag == 0) {
      this.showNewProject = true;
      this.showOpenProject = false;
      this.showManageProject = false;
      this.showContent = false;
      this.showQuery = false;
      this.showAnalysis = false;
    } else if (this.flag == 1) {
      this.showOpenProject = true;
      this.showNewProject = false;
      this.showManageProject = false;
      this.showContent = false;
      this.showQuery = false;
      this.showAnalysis = false;
    } else if (this.flag == 2) {
      this.showManageProject = true;
      this.showNewProject = false;
      this.showOpenProject = false;
      this.showContent = false;
      this.showQuery = false;
      this.showAnalysis = false;
    } else if (this.flag == 3) {
      this.showContent = true;
      this.showOpenProject = false;
      this.showNewProject = false;
      this.showManageProject = false;
      this.showQuery = false;
      this.showAnalysis = false;
    } else if (this.flag == 4) {
      this.showQuery = true;
      this.showOpenProject = false;
      this.showNewProject = false;
      this.showManageProject = false;
      this.showContent = false;
      this.showAnalysis = false;
    } else if (this.flag == 5) {
      this.showAnalysis = true;
      this.showOpenProject = false;
      this.showNewProject = false;
      this.showManageProject = false;
      this.showContent = false;
      this.showQuery = false;
    }
    if(this.flag!=-1){
      this.checkFlag(this.flag);
    }
  }

  recNewFlag(event) {
    this.showNewProject = event;
    this.checkFlag(-1);
  }
  recOpenFlag(event) {
    this.showOpenProject = event;
    this.checkFlag(-1);
  }
  recManageFlag(event) {
    this.showManageProject = event;
    this.checkFlag(-1);
  }
  recContentFlag(event) {
    this.showContent = event;
    this.checkFlag(-1);
  }
  recQueryFlag(event) {
    this.showQuery = event;
    this.checkFlag(-1);
  }
  recAnalysisFlag(event) {
    this.showAnalysis = event;
    this.checkFlag(-1);
  }
}
