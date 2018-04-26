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
  constructor(private service: DataViewService) {
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

  @ViewChild("max") maxRef: any;
  @ViewChild("min") minRef: any;

  @ViewChild("matTabGroup") matTabGroup: any;

  ngOnInit() {
    this.resize(
      this.containerRef.nativeElement,
      this.resizeTopRef.nativeElement,
      true,
      false
    );
  }

  /**
   * 改变data-view大小
   * @param oParent
   * @param handle
   * @param isTop
   * @param lockY
   */
  resize(oParent, handle, isTop, lockY) {
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
          document.body.clientHeight -
          toolBarRectBounding.top -
          toolBarRectBounding.height -
          30;
        let iH = isTop ? iParentHeight - iT : handle.offsetHeight + iT;
        isTop && (oParent.style.top = iParentTop + iT + "px");
        iH < 180 && (iH = this.minHeight);
        iH > maxH && (iH = maxH);
        lockY || (oParent.style.height = iH + "px");
        if (isTop && iH == this.minHeight) document.onmousemove = null;
        return false;
      };
      document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
      };
      return false;
    };
  }

  closedTabpageIndexs: number[] = [];
  onCloseTabpageClick(index) {
    let count = 0;  // 统计index前面的tabpages是否被关闭完
    for (let i = 0; i < this.closedTabpageIndexs.length; i++) {
      if (this.closedTabpageIndexs[i] < index) {
        count++;
        continue;
      }
    }
    this.closedTabpageIndexs.push(index);
    if (count == index) { //如果索引index前面的tabpages被关闭完，则关闭0号索引的tabpages
      index = 0;
    } else {  // 否则 若索引前面有tabpage关闭了，将当前删除索引序号前置 关闭长度-1个位置
      if(count!=0){
        index = index - (this.closedTabpageIndexs.length - 1); 
      }
      // 否则 直接删除原索引index
    }
    this.matTabGroup._tabs._results.splice(index, 1);
    if(this.matTabGroup.selectedIndex == index){
      this.matTabGroup.selectedIndex = index-1;
    }else{
        this.matTabGroup.selectedIndex = index;
    }
    // 无tabpages时，关闭显示data-view
    if (this.matTabGroup._tabs._results.length == 0) {
      let dataViewWrapper = <HTMLElement>document.querySelector(
        ".gisc-data-view-wrapper"
      );
      dataViewWrapper.style.display = "none";
      let expand = <HTMLElement>document.querySelector(
        ".gisc-toggle__button--expand"
      );
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
    expand.style.display = "inline-block";
  }

  onMaxDataViewClick() {
    // 获取元素，计算最大高度保证不被tool-bar遮挡
    let toolBarRectBounding = document
      .querySelector(".gisc-tool-bar-wrapper")
      .getBoundingClientRect();
    let maxH = document.documentElement.clientHeight - toolBarRectBounding.top -toolBarRectBounding.height - 30;
    this.containerRef.nativeElement.style.height = maxH + "px";

    let maxButton = this.maxRef._elementRef.nativeElement;
    let minButton = this.minRef._elementRef.nativeElement;
    maxButton.style.display = "none";
    minButton.style.display = "inline-block";
  }

  onMinDataViewClick() {
    this.containerRef.nativeElement.style.height = this.minHeight + "px";

    let maxButton = this.maxRef._elementRef.nativeElement;
    let minButton = this.minRef._elementRef.nativeElement;
    maxButton.style.display = "inline-block";
    minButton.style.display = "none";
  }
}
