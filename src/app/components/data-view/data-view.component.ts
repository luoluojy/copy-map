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

  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  minHeight: 180;

  @ViewChild("container") containerRef: ElementRef;
  @ViewChild("resizeTop") resizeTopRef: ElementRef;

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
      let toolBarRectBounding = document.querySelector('.gisc-tool-bar-wrapper').getBoundingClientRect();
      let disY = event.clientY - handle.offsetTop;
      let iParentTop = oParent.offsetTop;
      let iParentHeight = oParent.offsetHeight;
      document.onmousemove = event => {
        let iT = event.clientY - disY;
        let maxH = document.documentElement.clientHeight - toolBarRectBounding.top -toolBarRectBounding.height - 60;
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
}
