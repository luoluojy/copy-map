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
    this.nativeElement = this.elementRef.nativeElement;
  }

  minHeight: 180;
  nativeElement: any;

  ngOnInit() {
    let viewerContainer: any = this.nativeElement.querySelector(
      ".gisc-data-view-container"
    );
    let resizeT = this.nativeElement.querySelector(
      ".gisc-data-view-container__top"
    );
    this.resize(viewerContainer, resizeT, false, true, true, false);
  }
  displayedColumns = ["position", "name", "weight", "symbol"];
  dataSource = new MatTableDataSource(TEST_DATA);

  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

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
        let maxW =
          document.documentElement.clientWidth - oParent.offsetLeft - 2;
        let maxH =
          document.documentElement.clientHeight - oParent.offsetTop - 2;
        let iW = isLeft ? iParentWidth - iL : handle.offsetWidth + iL;
        let iH = isTop ? iParentHeight - iT : handle.offsetHeight + iT;
        isLeft && (oParent.style.left = iParentLeft + iL + "px");
        isTop && (oParent.style.top = iParentTop + iT + "px");
        iW > maxW && (iW = maxW);
        lockX || (oParent.style.width = iW + "px");
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
