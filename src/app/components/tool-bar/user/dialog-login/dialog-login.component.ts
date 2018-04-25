import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { CloudStorageService } from "../../../../services/cloud-storage.service";

@Component({
  selector: "app-dialog-login",
  templateUrl: "./dialog-login.component.html",
  styleUrls: ["./dialog-login.component.css"],
  providers: [CloudStorageService]
})
export class DialogLoginComponent implements OnInit {
  // 对话框最小高度及宽度
  dragMinWidth = 500;
  dragMinHeight = 280;

  constructor(
    private cloudStorageService: CloudStorageService,
    private dialogRef: MatDialogRef<DialogLoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  /*-------------------------- +
 拖拽函数
 +-------------------------- */
  // drag(event, oDrag, handle) {
  //   let disX = event.clientX - oDrag.offsetLeft;
  //   let disY = event.clientY - oDrag.offsetTop;
  //   document.onmousemove = function(event) {
  //     let iL = event.clientX - disX;
  //     let iT = event.clientY - disY;
  //     let maxL = document.documentElement.clientWidth - oDrag.offsetWidth;
  //     let maxT = document.documentElement.clientHeight - oDrag.offsetHeight;
  //     iL <= 0 && (iL = 0);
  //     iT <= 0 && (iT = 0);
  //     iL >= maxL && (iL = maxL);
  //     iT >= maxT && (iT = maxT);
  //     oDrag.style.left = iL + "px";
  //     oDrag.style.top = iT + "px";
  //     return false;
  //   };
  //   document.onmouseup = function() {
  //     document.onmousemove = null;
  //     document.onmouseup = null;
  //   };
  //   return false;
  // }

  // 关闭对话框
  closeDialog() {
    this.dialogRef.close();
  }

  isFullScreen: boolean = true;
  // 切换全屏对话框
  toggleFullscreenDialog(container) {
    if (this.isFullScreen) {
      container.style.top = container.style.left = 0;
      container.style.width = document.documentElement.clientWidth - 2 + "px";
      container.style.height = document.documentElement.clientHeight - 2 + "px";
    } else {
      container.style.width = this.dragMinWidth + "px";
      container.style.height = this.dragMinHeight + "px";
      container.style.left =
        (document.documentElement.clientWidth - container.offsetWidth) / 2 +
        "px";
      container.style.top =
        (document.documentElement.clientHeight - container.offsetHeight) / 2 +
        "px";
    }
    this.isFullScreen = !this.isFullScreen;
  }

  login(value) {
    let username = value["login"];
    let password = value["password"];
    this.cloudStorageService.login(username, password);
  }
}
