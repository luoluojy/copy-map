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

  /**
   * 地图创建指令
   */
  @ViewChild(MapViewDirective) mapHost: MapViewDirective;

  /**
   *
   * @param appSetting
   * @param appCommands
   */
  constructor(
    private appSetting: AppSettingService,
    private appCommands: AppCommandService) {

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
    this.mapHost.CreateCesium();
  }

}
