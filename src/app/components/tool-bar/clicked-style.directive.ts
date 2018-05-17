import {
  Directive,
  Input,
  ElementRef,
  OnChanges,
  SimpleChanges
} from "@angular/core";

@Directive({
  selector: "[appClickedStyle]"
})
export class ClickedStyleDirective implements OnChanges {
  
  // 当前指令对应的div
  @Input() selfDiv: HTMLElement;

  // 点击时 样式更改状态
  @Input("appClickedStyle") clickedStyleStatus: boolean;

  constructor(private elementRef: ElementRef) {}

  // 检测到状态变化时，就更改当前div的样式
  ngOnChanges(changes: SimpleChanges) {
    if (changes["appClickedStyle"]) {
      this.clickedStyleStatus = changes["appClickedStyle"].currentValue;
    }
    this.selfDiv = this.elementRef.nativeElement;
    let angleIcon = this.selfDiv.getElementsByTagName("i")[1];
    if (this.clickedStyleStatus == true) {
      this.selfDiv.style.color = "#0C88E8";
      // angleIcon.setAttribute("class", "fas fa-angle-up  fa-lg");
      angleIcon.innerHTML = 'keyboard_arrow_up';
    } else {
      this.selfDiv.style.color = "#9A9A9A";
      // angleIcon.setAttribute("class", "fas fa-angle-down  fa-lg");
      angleIcon.innerHTML = 'keyboard_arrow_down';
    }
  }
}
