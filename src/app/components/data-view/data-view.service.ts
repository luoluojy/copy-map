import { Injectable } from "@angular/core";
import { DataViewComponent } from "./data-view.component";
import { AppService } from "../../app.service";
import { Workspace } from "../../services/workspace";

/**
 * 数据视图组件服务
 */
@Injectable()
export class DataViewService {
  /**
   * 构造函数
   * @param workspace
   */
  constructor(
    private workspace: Workspace,
    private service: AppService
  ) {}

  /**
   * 服务所属的组件
   */
  private _owner: DataViewComponent;
  public get owner(): DataViewComponent {
    return this._owner;
  }
  public set owner(value: DataViewComponent) {
    this._owner = value;
  }

  /**
   * 关闭tabpage
   */
  closedTabpageIndexs: number[] = [];
  public closeTabpageCommand(param?: any) {
    let index = param;
    let count = 0; // 统计index前面的tabpages是否被关闭完
    for (let i = 0; i < this.closedTabpageIndexs.length; i++) {
      if (this.closedTabpageIndexs[i] < index) {
        count++;
        continue;
      }
    }
    this.closedTabpageIndexs.push(index);
    if (count == index) {
      //如果索引index前面的tabpages被关闭完，则关闭0号索引的tabpages
      index = 0;
    } else {
      // 否则 若索引前面有tabpage关闭了，将当前删除索引序号前置 关闭长度-1个位置
      if (count != 0) {
        index = index - (this.closedTabpageIndexs.length - 1);
      }
      // 否则 直接删除原索引index
    }
    let matTabGroup = this.owner.matTabGroup;
    matTabGroup._tabs._results.splice(index, 1);
    // 当前删除索引若为当前选择的tab，则将选择tab索引-1
    if (index == matTabGroup.selectedIndex) {
      matTabGroup.selectedIndex = index - 1;
    } else {
      if (index != matTabGroup._tabs._results.length)
        matTabGroup.selectedIndex = index;
    }

    // 无tabpages时，关闭显示data-view
    if (matTabGroup._tabs._results.length == 0) {
      this.closeDataViewCommand();
    }
  }

  public closeDataViewCommand(param?: any) {
    let dataViewWrapper = this.service.owner.dataViewWrapper.nativeElement;
    let expand = this.service.owner.expand._elementRef.nativeElement;
    dataViewWrapper.style.display = "none";
    expand.style.display = "inline-block";
  }

  public maxDataViewCommand(param?: any) {
    let toolBarWrapper = this.service.owner.toolBarWrapper.nativeElement;
    // 计算最大高度保证不被tool-bar遮挡
    let bounding = toolBarWrapper.getBoundingClientRect();
    let maxH = document.body.clientHeight - bounding.top - bounding.height - 30;

    let container = this.owner.containerRef.nativeElement;
    container.style.height = maxH + "px";

    let maxButton = this.owner.maxRef._elementRef.nativeElement;
    let minButton = this.owner.minRef._elementRef.nativeElement;

    maxButton.style.display = "none";
    minButton.style.display = "inline-block";
  }

  public minDataViewCommand(param?: any) {
    let container = this.owner.containerRef.nativeElement;
    let minHeight = this.owner.minHeight;
    container.style.height = this.owner.minHeight + "px";

    let maxButton = this.owner.maxRef._elementRef.nativeElement;
    let minButton = this.owner.minRef._elementRef.nativeElement;

    maxButton.style.display = "inline-block";
    minButton.style.display = "none";
  }

  /**
   * 边缘拖动改变data-view大小
   * @param param
   */
  public resizeDataViewCommand(param?: any) {
    let oParent = this.owner.containerRef.nativeElement;
    let handle = this.owner.resizeTopRef.nativeElement;
    let minHeight = this.owner.minHeight;
    let isTop = true,
      lockY = false;
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
        iH < 180 && (iH = minHeight);
        iH > maxH && (iH = maxH);
        lockY || (oParent.style.height = iH + "px");
        if (isTop && iH == minHeight) document.onmousemove = null;
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
