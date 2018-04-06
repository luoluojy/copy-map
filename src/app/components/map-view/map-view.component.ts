import { Component, OnInit, OnDestroy, ComponentFactoryResolver, ViewChild, Type, AfterViewInit } from '@angular/core';
import { MapViewDirective } from './map-view.directive';
import { CesiumComponent } from '../map/cesium/cesium.component';
import { AppSettingService } from '../../app-setting.service';
import { AppCommandService } from '../../app-command.service';

/**
 * 地图视图
 */
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MapViewDirective) mapHost: MapViewDirective;

  /**
   *
   * @param appSetting
   * @param appCommands
   * @param componentFactoryResolver
   */
  constructor(
    private appSetting: AppSettingService,
    private appCommands: AppCommandService,
    private componentFactoryResolver: ComponentFactoryResolver) {

    this.appCommands.mapView = this;

  }

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
