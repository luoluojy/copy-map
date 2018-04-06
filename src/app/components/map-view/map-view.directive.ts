import { Directive, ViewContainerRef } from '@angular/core';

/**
 *
 */
@Directive({
  selector: '[map-host]'
})
export class MapViewDirective {

  /**
   *
   * @param viewContainerRef
   */
  constructor(public viewContainerRef: ViewContainerRef) { }

}
