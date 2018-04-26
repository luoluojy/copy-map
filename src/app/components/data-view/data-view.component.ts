import {
  Component,
  OnInit,
  ElementRef,
  AfterViewInit,
  ViewChild
} from "@angular/core";
import { TEST_DATA } from "./mock-data";
import { Observable } from "rxjs/Observable";
import { DataViewService } from "./data-view.service";
import { MatTableDataSource, MatSort } from "@angular/material";

@Component({
  selector: "app-data-view.",
  templateUrl: "./data-view.component.html",
  styleUrls: ["./data-view.component.css"],
  animations: []
})
export class DataViewComponent implements OnInit, AfterViewInit {
  /**
   * 构造函数
   * @param service
   */
  constructor(
    private service: DataViewService,
    private elementRef: ElementRef
  ) {
    this.service.owner = this;
  }

  displayedColumns = ["position", "name", "weight", "symbol"];
  dataSource = new MatTableDataSource(TEST_DATA);

  minHeight = 180;

  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  @ViewChild("container") containerRef: ElementRef;
  @ViewChild("resizeTop") resizeTopRef: ElementRef;

  @ViewChild("matTabGroup") matTabGroup: any;
  ngOnInit() {
    this.resize(
      this.containerRef.nativeElement,
      this.resizeTopRef.nativeElement,
      false,
      true,
      true,
      false
    );
  }

  /**
   * 改变data-view大小
   * @param oParent
   * @param handle
   * @param isLeft
   * @param isTop
   * @param lockX
   * @param lockY
   */
  resize(oParent, handle, isLeft, isTop, lockX, lockY) {
    handle.onmousedown = event => {
      let toolBarRectBounding = document
        .querySelector(".gisc-tool-bar-wrapper")
        .getBoundingClientRect();
      let disY = event.clientY - handle.offsetTop;
      let iParentTop = oParent.offsetTop;
      let iParentHeight = oParent.offsetHeight;
      document.onmousemove = event => {
        let iT = event.clientY - disY;
        let maxH =
          document.documentElement.clientHeight -
          toolBarRectBounding.top -
          toolBarRectBounding.height -
          30;
        let iH = isTop ? iParentHeight - iT : handle.offsetHeight + iT;
        isTop && (oParent.style.top = iParentTop + iT + "px");
        iH < 180 && (iH = 180);
        iH > maxH && (iH = maxH);
        lockY || (oParent.style.height = iH + "px");
        if (isTop && iH == 180) document.onmousemove = null;
        return false;
      };
      document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
      };
      return false;
    };
  }
  
closedCount:number=0;
  onCloseItem(index) {
    index -= this.closedCount;
    this.matTabGroup._tabs._results.splice(index,1);
    this.closedCount ++;
    if(this.matTabGroup._tabs._results.length==0){
      let dataViewWrapper = <HTMLElement>document.querySelector('.gisc-data-view-wrapper')
      dataViewWrapper.style.display = 'none';
      let expand = <HTMLElement>document.querySelector(".gisc-toggle__button--expand");
      expand.style.display = "inline-block";
    }
  }

  onCloseDataViewClick() {
    let dataViewWrapper = <HTMLElement>document.querySelector(
      ".gisc-data-view-wrapper"
    );
    dataViewWrapper.style.display = "none";
    let expand = <HTMLElement>document.querySelector(
      ".gisc-toggle__button--expand"
    );
    // expand.style.visibility ='visible';
    expand.style.display = "inline-block";
  }

  onMaxDataViewClick(max) {
    let toolBarRectBounding = document.querySelector(".gisc-tool-bar-wrapper").getBoundingClientRect();
    let maxH =document.documentElement.clientHeight -toolBarRectBounding.top -toolBarRectBounding.height -30;
    this.containerRef.nativeElement.style.height = maxH + "px";
    // let maxButton = max._elementRef.nativeElement;
    let maxButton = this.elementRef.nativeElement.querySelector(
      ".gisc-data-view__button--max"
    );
    let minButton = this.elementRef.nativeElement.querySelector(
      ".gisc-data-view__button--min"
    );
    maxButton.style.display = "none";
    minButton.style.display = "inline-block";
  }

  onMinDataViewClick(min) {
    this.containerRef.nativeElement.style.height = this.minHeight + "px";
    let maxButton = this.elementRef.nativeElement.querySelector(
      ".gisc-data-view__button--max"
    );
    let minButton = this.elementRef.nativeElement.querySelector(
      ".gisc-data-view__button--min"
    );
    maxButton.style.display = "inline-block";
    minButton.style.display = "none";
  }
}
