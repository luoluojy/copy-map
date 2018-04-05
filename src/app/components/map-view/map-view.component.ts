import { Component, OnInit, OnDestroy, ComponentFactoryResolver, ViewChild, Type, AfterViewInit } from '@angular/core';
import { MapDirective } from './map.directive';
import { CesiumComponent } from '../map/cesium/cesium.component';

/**
 * 地图视图
 */
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MapDirective) mapHost: MapDirective;

  /**
   *
   * @param componentFactoryResolver
   */
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    // this.loadComponent();
  }

  ngOnDestroy() {

  }

  /**
   *
   */
  ngAfterViewInit() {
    this.loadMapComponent();
  }

  /**
   * 加载地图组件
   */
  private loadMapComponent() {

    let component: Type<any> = CesiumComponent;

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    let viewContainerRef = this.mapHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);

  }
}
