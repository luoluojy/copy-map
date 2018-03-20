import { Component, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
@Component({
  selector: 'app-bottom-container',
  templateUrl: './bottom-container.component.html',
  styleUrls: ['./bottom-container.component.css']
})
export class BottomContainerComponent implements OnInit {
  public style: object = {};
  constructor() { }
  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }
  ngOnInit() {
  }

}
