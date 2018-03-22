import { Component, OnInit, Input, ElementRef, Output,EventEmitter} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../common/reducer';
import * as OpenedActions from '../../../common/action';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private elementRef:ElementRef,private store:Store<AppState>) { }

  flag:boolean=false;
  nativeElement:any;
@Output() flagContentEmitter:EventEmitter<boolean> =new EventEmitter<boolean>();
checkFlag(){
  this.flagContentEmitter.emit(this.flag);
}
  ngOnInit() {
    this.collapseInfoPanel();
    this.nativeElement=this.elementRef.nativeElement;
    let icons = this.nativeElement.querySelectorAll('.project-icon')

    let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
    let footer = <HTMLElement>document.querySelector('#footer');
    let footerLeft = window.getComputedStyle(footer, null).left;
    let footer_span = <HTMLElement>document.querySelector('#footer > span');
    let footerSpanLeft = window.getComputedStyle(footer_span, null).left;
    Observable.fromEvent(icons,'click').subscribe(()=>{
      this.store.dispatch(new OpenedActions.OpenSidenavAction());
      distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) - 410 + 'px';
      footer.style.left = parseInt(footerLeft.substr(0, footerLeft.length - 2), 10) - 410 + 'px'
      this.checkFlag();
    })
  }


    collapseInfoPanel(){
      let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
      let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
      let footer = <HTMLElement>document.querySelector('#footer');
      let footerLeft = window.getComputedStyle(footer, null).left;
      let footer_span = <HTMLElement>document.querySelector('#footer > span');
      let footerSpanLeft = window.getComputedStyle(footer_span, null).left;
      
      if (parseInt(footerLeft.substr(0, footerLeft.length - 2), 10) == 0) {
        distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) + 410 + 'px'
        footer.style.left = parseInt(footerLeft.substr(0, footerLeft.length - 2), 10) + 410 + 'px'
      }
    }
  
}
