import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ElementRef,
  Inject
} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CloudStorageService } from "../../../../services/cloud-storage.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-dialog-login",
  templateUrl: "./dialog-login.component.html",
  styleUrls: ["./dialog-login.component.css"],
  providers: [CloudStorageService]
})
export class DialogLoginComponent implements OnInit {
  nativeElement: any;

  // 对话框最小高度及宽度
  dragMinWidth = 500;
  dragMinHeight = 280;

  constructor(
    private elementRef: ElementRef,
    private http: HttpClient,
    private cloudStorageService: CloudStorageService,
    private dialogRef: MatDialogRef<DialogLoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.nativeElement = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.loadDialog();
  }

  // 加载对话框中各元素resize事件，
  loadDialog() {
    let oDrag = this.nativeElement.getElementsByClassName(
      "dialog-login__container"
    )[0];
    let oTitle = this.nativeElement.getElementsByClassName("title")[0];
    this.drag(oDrag, oTitle);
    oDrag.style.left = (document.documentElement.clientWidth - oDrag.offsetWidth) / 2 + "px";
    oDrag.style.top = (document.documentElement.clientHeight - oDrag.offsetHeight) / 2 + "px";
  }

  /*-------------------------- +
 拖拽函数
 +-------------------------- */
  drag(oDrag, handle) {
    let disX = 0;
    let disY = 0;
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
    oClose.onmousedown = function(event) {
      this.onfocus = function() {
        this.blur();
      };
      (event || window.event).cancelBubble = true;
    };
  }

  // 关闭对话框
  closeDialog() {
    this.dialogRef.close();
  }

  isFullScreen: boolean = true;
  // 切换全屏对话框
  toggleFullscreenDialog() {
    let container = this.nativeElement.querySelector("#drag");
    if (this.isFullScreen) {
      container.style.top = container.style.left = 0;
      container.style.width = document.documentElement.clientWidth - 2 + "px";
      container.style.height = document.documentElement.clientHeight - 2 + "px";
    } else {
      container.style.width = this.dragMinWidth + "px";
      container.style.height = this.dragMinHeight + "px";
      container.style.left =(document.documentElement.clientWidth - container.offsetWidth) / 2 + "px";
      container.style.top =(document.documentElement.clientHeight - container.offsetHeight) / 2 +"px";
    }
    this.isFullScreen = !this.isFullScreen;
  }

  login(value) {
    let username = value["login"];
    let password = value["password"];
    this.cloudStorageService.login(username, password);
  }
}
