import { Directive, ViewContainerRef, ComponentFactoryResolver, Type } from '@angular/core';
import { CesiumComponent } from '../map/cesium/cesium.component';

/**
 *
 */
@Directive({
  selector: '[map-host]'
})
export class MapViewDirective {

  /**
   *
   * @param componentFactoryResolver
   * @param viewContainerRef 获取对容器视图的访问权
   */
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef) {
  }

  /**
   *
   */
  public CreateCesium() {
    let component: Type<any> = CesiumComponent;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }

}
