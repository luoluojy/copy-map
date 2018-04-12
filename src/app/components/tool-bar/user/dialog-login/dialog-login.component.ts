import { Component, OnInit, EventEmitter, Output,ElementRef } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-dialog-login",
  templateUrl: "./dialog-login.component.html",
  styleUrls: ["./dialog-login.component.css"]
})
export class DialogLoginComponent implements OnInit {
  @Output() loginEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private elementRef:ElementRef,private http: HttpClient) {}

  dragMinWidth = 250;
  dragMinHeight = 124;
  ngOnInit() {
    this.loadDialog();
    window.onresize = () => {
      this.loadDialog();
  }
}
loadDialog(){
  var oDrag = this.elementRef.nativeElement.querySelector("#drag");
  var oTitle = this.elementRef.nativeElement.getElementsByClassName("title")[0];
  var oL = this.elementRef.nativeElement.getElementsByClassName("resizeL")[0];
  var oT = this.elementRef.nativeElement.getElementsByClassName("resizeT")[0];
  var oR = this.elementRef.nativeElement.getElementsByClassName("resizeR")[0];
  var oB = this.elementRef.nativeElement.getElementsByClassName("resizeB")[0];
  var oLT = this.elementRef.nativeElement.getElementsByClassName("resizeLT")[0];
  var oTR = this.elementRef.nativeElement.getElementsByClassName("resizeTR")[0];
  var oBR = this.elementRef.nativeElement.getElementsByClassName("resizeBR")[0];
  var oLB = this.elementRef.nativeElement.getElementsByClassName("resizeLB")[0];
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
  oDrag.style.left =
    (document.documentElement.clientWidth - oDrag.offsetWidth) / 2 + "px";
  oDrag.style.top =
    (document.documentElement.clientHeight - oDrag.offsetHeight) / 2 + "px";
};


  /*-------------------------- +
 改变大小函数
 +-------------------------- */
  resize(oParent, handle, isLeft, isTop, lockX, lockY) {
    handle.onmousedown = function(event) {
      var event = event || window.event;
      var disX = event.clientX - handle.offsetLeft;
      var disY = event.clientY - handle.offsetTop;
      var iParentTop = oParent.offsetTop;
      var iParentLeft = oParent.offsetLeft;
      var iParentWidth = oParent.offsetWidth;
      var iParentHeight = oParent.offsetHeight;
      document.onmousemove = event => {
        var event = <MouseEvent>(event || window.event);
        var iL = event.clientX - disX;
        var iT = event.clientY - disY;
        var maxW =
          document.documentElement.clientWidth - oParent.offsetLeft - 2;
        var maxH =
          document.documentElement.clientHeight - oParent.offsetTop - 2;
        var iW = isLeft ? iParentWidth - iL : handle.offsetWidth + iL;
        var iH = isTop ? iParentHeight - iT : handle.offsetHeight + iT;
        isLeft && (oParent.style.left = iParentLeft + iL + "px");
        isTop && (oParent.style.top = iParentTop + iT + "px");
        iW < this.dragMinWidth && (iW = this.dragMinWidth);
        iW > maxW && (iW = maxW);
        lockX || (oParent.style.width = iW + "px");
        iH < this.dragMinHeight && (iH = this.dragMinHeight);
        iH > maxH && (iH = maxH);
        lockY || (oParent.style.height = iH + "px");
        if (
          (isLeft && iW == this.dragMinWidth) ||
          (isTop && iH == this.dragMinHeight)
        )
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
    var disX = 0;
    var disY = 0;
    var oMin = this.elementRef.nativeElement.getElementsByClassName("min")[0];
    var oMax = this.elementRef.nativeElement.getElementsByClassName("max")[0];
    var oRevert = this.elementRef.nativeElement.getElementsByClassName("revert")[0];
    var oClose = this.elementRef.nativeElement.getElementsByClassName("close")[0];
    handle = handle || oDrag;
    handle.style.cursor = "move";
    handle.onmousedown = function(event) {
      var event = event || window.event;
      disX = event.clientX - oDrag.offsetLeft;
      disY = event.clientY - oDrag.offsetTop;
      document.onmousemove = function(event) {
        var event = <MouseEvent>(event || window.event);
        var iL = event.clientX - disX;
        var iT = event.clientY - disY;
        var maxL = document.documentElement.clientWidth - oDrag.offsetWidth;
        var maxT = document.documentElement.clientHeight - oDrag.offsetHeight;
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

    //最大化按钮
    oMax.onclick = function() {
      oDrag.style.top = oDrag.style.left = 0;
      oDrag.style.width = document.documentElement.clientWidth - 2 + "px";
      oDrag.style.height = document.documentElement.clientHeight - 2 + "px";
      this.style.display = "none";
      oRevert.style.display = "block";
    };
    //还原按钮
    oRevert.onclick = function() {
      oDrag.style.width = this.dragMinWidth + "px";
      oDrag.style.height = this.dragMinHeight + "px";
      oDrag.style.left =
        (document.documentElement.clientWidth - oDrag.offsetWidth) / 2 + "px";
      oDrag.style.top =
        (document.documentElement.clientHeight - oDrag.offsetHeight) / 2 + "px";
      this.style.display = "none";
      oMax.style.display = "block";
    };
    //最小化按钮
    oMin.onclick = oClose.onclick = ()=> {
      oDrag.style.display = "none";
      var oA = document.createElement("a");
      oA.className = "open";
      oA.href = "javascript:;";
      oA.title = "还原";
      document.body.appendChild(oA);
      oA.onclick = function() {
        oDrag.style.display = "block";
        document.body.removeChild(this);
        this.onclick = null;
      };
      
    this.loginEmitter.emit(false);
    };
    //阻止冒泡
    oMin.onmousedown = oMax.onmousedown = oClose.onmousedown = function(event) {
      this.onfocus = function() {
        this.blur();
      };
      (event || window.event).cancelBubble = true;
    };
  }



  closeLoginDialog() {
    this.loginEmitter.emit(false);
  }

  login(value) {
    let username = value["login"];
    let password = value["password"];
    this.http
      .post(
        "/api2/auth-token/",
        "username=" + username + "&&password=" + password,
        {
          headers: new HttpHeaders({
            "Content-Type": "application/x-www-form-urlencoded"
          })
        }
      )
      .subscribe(
        value => {
          if (value["token"]) {
            this.loginEmitter.emit(false);
            alert("登录成功" + value["token"]);
            this.http
              .get("/api2/avatars/user/"+username+"/resized/80/", {
                headers: new HttpHeaders({
                  Authorization: "Token " + value["token"]
                })
              })
              .subscribe(res => {
                let avatarUrl = res["url"];
                this.http
                  .get(avatarUrl, { responseType: "blob" })
                  .subscribe((data: Blob) => {
                    console.log(data);
                  });
              });
          }
        },
        error => {
          console.log(error);
          alert("登录失败" + error["error"]["non_field_errors"]);
        }
      );
  }
}
