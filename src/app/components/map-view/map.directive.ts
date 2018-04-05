import { Directive, ViewContainerRef } from '@angular/core';

/**
 *
 */
@Directive({
  selector: '[map-host]'
})
export class MapDirective {

  /**
   *
   * @param viewContainerRef
   */
  constructor(public viewContainerRef: ViewContainerRef) { }

}
