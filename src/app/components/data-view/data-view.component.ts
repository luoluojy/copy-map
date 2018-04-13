import { Component, OnInit, ElementRef, AfterViewInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { delay } from 'rxjs/operators'
import { trigger, state, style, animate, transition } from '@angular/animations';
import 'rxjs/add/observable/fromEvent'
import { Observable } from 'rxjs/Observable';
import { DataViewService } from './data-view.service';

@Component({
  selector: 'app-data-view.',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css'],
  animations: [
    trigger('displayFlagState', [
      state('false', style({
        display: 'none'
      })),
      state('true', style({
        display: ''
      })),
      transition('false => true', animate('200ms ease-in')),
      transition('true => false', animate('200ms ease-out')),
    ])
  ]
})
export class DataViewComponent implements OnInit, AfterViewInit {

  /**
   * 构造函数
   * @param service
   */
  constructor(private service: DataViewService, private elementRef: ElementRef) {
    this.service.owner = this;

    this.displayFlagState = 'false';
    this.nativeElement = this.elementRef.nativeElement;
  }

  minHeight:180;
  nativeElement: any;

  @Input() displayFlagState: string;

  ngOnInit() {
    let viewerContainer: any = this.nativeElement.querySelector('#viewer-container');
    viewerContainer.style.width = document.body.clientWidth + 'px';
    let resizeT = viewerContainer.querySelector('.data-view__top');
    this.resize(viewerContainer,resizeT,false,true,true,false);
  }

  ngAfterViewInit() { }

  /*-------------------------- +
 改变大小函数
 +-------------------------- */
 resize(oParent, handle, isLeft, isTop, lockX, lockY) {
  handle.onmousedown = event => {
    let disX = event.clientX - handle.offsetLeft;
    let disY = event.clientY - handle.offsetTop;
    let iParentTop = oParent.offsetTop;
    let iParentLeft = oParent.offsetLeft;
    let iParentWidth = oParent.offsetWidth;
    let iParentHeight = oParent.offsetHeight;
    document.onmousemove = event => {
      let iL = event.clientX - disX;
      let iT = event.clientY - disY;
      let maxW = document.documentElement.clientWidth - oParent.offsetLeft - 2;
      let maxH = document.documentElement.clientHeight - oParent.offsetTop - 2;
      let iW = isLeft ? iParentWidth - iL : handle.offsetWidth + iL;
      let iH = isTop ? iParentHeight - iT : handle.offsetHeight + iT;
      isLeft && (oParent.style.left = iParentLeft + iL + "px");
      isTop && (oParent.style.top = iParentTop + iT + "px");
      iW > maxW && (iW = maxW);
      lockX || (oParent.style.width = iW + "px");
      iH < 180 && (iH = 180);
      iH > maxH && (iH = maxH);
      lockY || (oParent.style.height = iH + "px");
      if (isTop && iH == 180)
        document.onmousemove = null;
      return false;
    };
    document.onmouseup = function() {
      document.onmousemove = null;
      document.onmouseup = null;
    };
    return false;
  };
}
}
