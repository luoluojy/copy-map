import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
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
  
   async login(value) {
    let username = value["login"];
    let password = value["password"];
    let avatar = await this.cloudStorageService.login(username, password);
    console.log('avatar:',avatar);
    let files = await this.cloudStorageService.getLibraryFiles(localStorage.getItem('cloudStorageToken'));
    console.log('entities:',files)
    // this.dialogRef.close(avatar);
    // avatar头像更改
    
    // 调用打开文件存储库

  }
}
