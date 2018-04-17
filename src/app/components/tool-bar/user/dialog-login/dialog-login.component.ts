import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ElementRef,
  Inject
} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CloudStorageService } from '../../../../services/cloud-storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: "app-dialog-login",
  templateUrl: "./dialog-login.component.html",
  styleUrls: ["./dialog-login.component.css"],
  providers:[
    CloudStorageService
  ]
})
export class DialogLoginComponent implements OnInit {

  nativeElement:any;
  @Output() loginEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  // 对话框最小高度及宽度
  dragMinWidth = 500;
  dragMinHeight = 300;

  constructor(private elementRef: ElementRef, private http: HttpClient,
    private cloudStorageService:CloudStorageService,
    private dialogRef:MatDialogRef<DialogLoginComponent>,@Inject(MAT_DIALOG_DATA) public data:any) {
    this.nativeElement = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.loadDialog();
    window.onresize = () => {
      this.loadDialog();
    };
  }

  // 加载对话框中各元素resize事件，
  loadDialog() {
    let oDrag = this.nativeElement.getElementsByClassName("dialog-login__container")[0];
    let oTitle = this.nativeElement.getElementsByClassName("title")[0];
    let oL = this.nativeElement.getElementsByClassName("resizeL")[0];
    let oT = this.nativeElement.getElementsByClassName("resizeT")[0];
    let oR = this.nativeElement.getElementsByClassName("resizeR")[0];
    let oB = this.nativeElement.getElementsByClassName("resizeB")[0];
    let oLT = this.nativeElement.getElementsByClassName("resizeLT")[0];
    let oTR = this.nativeElement.getElementsByClassName("resizeTR")[0];
    let oBR = this.nativeElement.getElementsByClassName("resizeBR")[0];
    let oLB = this.nativeElement.getElementsByClassName("resizeLB")[0];
    this.drag(oDrag, oTitle);
    //四角
    this.resize(oDrag, oLT, true, true, false, false);
    this.resize(oDrag, oTR, false, true, false, false);
    this.resize(oDrag, oBR, false, false, false, false);
    this.resize(oDrag, oLB, true, false, false, false);
    //四边
    this.resize(oDrag, oL, true, false, false, true);
    this.resize(oDrag, oT, false, true, true, false);
    this.resize(oDrag, oR, false, false, false, true);
    this.resize(oDrag, oB, false, false, true, false);
    oDrag.style.left = (document.documentElement.clientWidth - oDrag.offsetWidth) / 2 + "px";
    oDrag.style.top = (document.documentElement.clientHeight - oDrag.offsetHeight) / 2 + "px";
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
        let maxW = document.documentElement.clientWidth - oParent.offsetLeft - 2;
        let maxH = document.documentElement.clientHeight - oParent.offsetTop - 2;
        let iW = isLeft ? iParentWidth - iL : handle.offsetWidth + iL;
        let iH = isTop ? iParentHeight - iT : handle.offsetHeight + iT;
        isLeft && (oParent.style.left = iParentLeft + iL + "px");
        isTop && (oParent.style.top = iParentTop + iT + "px");
        iW < this.dragMinWidth && (iW = this.dragMinWidth);
        iW > maxW && (iW = maxW);
        lockX || (oParent.style.width = iW + "px");
        iH < this.dragMinHeight && (iH = this.dragMinHeight);
        iH > maxH && (iH = maxH);
        lockY || (oParent.style.height = iH + "px");
        if ((isLeft && iW == this.dragMinWidth) ||(isTop && iH == this.dragMinHeight))
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

  /*-------------------------- +
 拖拽函数
 +-------------------------- */
  drag(oDrag, handle) {
    let disX = 0;
    let disY = 0;
    let oMin = this.nativeElement.getElementsByClassName("min")[0];
    let oMax = this.nativeElement.getElementsByClassName("max")[0];
    let oRevert = this.nativeElement.getElementsByClassName("revert")[0];
    let oClose = this.nativeElement.getElementsByClassName("close")[0];
    handle = handle || oDrag;
    handle.style.cursor = "move";
    handle.onmousedown = function(event) {
      disX = event.clientX - oDrag.offsetLeft;
      disY = event.clientY - oDrag.offsetTop;
      document.onmousemove = function(event) {
        let iL = event.clientX - disX;
        let iT = event.clientY - disY;
        let maxL = document.documentElement.clientWidth - oDrag.offsetWidth;
        let maxT = document.documentElement.clientHeight - oDrag.offsetHeight;
        iL <= 0 && (iL = 0);
        iT <= 0 && (iT = 0);
        iL >= maxL && (iL = maxL);
        iT >= maxT && (iT = maxT);
        oDrag.style.left = iL + "px";
        oDrag.style.top = iT + "px";
        return false;
      };
      document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
      };
      this.setCapture && this.setCapture();
      return false;
    };

    //阻止冒泡
    oMin.onmousedown = oMax.onmousedown = oClose.onmousedown = function(event) {
      this.onfocus = function() {
        this.blur();
      };
      (event || window.event).cancelBubble = true;
    };
  }

  // 最大化时还原对话框
  revertDialog(event) {
    let revertAnchor = event.target;
    let container = this.nativeElement.querySelector("#drag");
    container.style.width = this.dragMinWidth + "px";
    container.style.height = this.dragMinHeight + "px";
    container.style.left = ( document.documentElement.clientWidth - container.offsetWidth) / 2 + "px";
    container.style.top = ( document.documentElement.clientHeight - container.offsetHeight) / 2 +"px";
    revertAnchor.style.display = "none";
    let maxAnchor = this.nativeElement.getElementsByClassName("max")[0];
    maxAnchor.style.display = "block";
  }

  // 最小化对话框
  minDialog() {
    // let minAnchor = event.target;
    // this.loginEmitter.emit(false);
    this.dialogRef.close();
  }

  // 最大化对话框
  maxDialog(event) {
    let maxAnchor = event.target;
    let container = this.nativeElement.querySelector("#drag");
    container.style.top = container.style.left = 0;
    container.style.width = document.documentElement.clientWidth - 2 + "px";
    container.style.height = document.documentElement.clientHeight - 2 + "px";
    maxAnchor.style.display = "none";
    let revertAnchor = this.nativeElement.getElementsByClassName("revert")[0];
    revertAnchor.style.display = "block";
  }

  // 关闭对话框
  closeDialog() {
    // this.loginEmitter.emit(false);
    this.dialogRef.close();
  }
  avatar:any;

  login(value) {
    let username = value["login"];
    let password = value["password"];
    this.cloudStorageService.login(username,password); 
  }
}
