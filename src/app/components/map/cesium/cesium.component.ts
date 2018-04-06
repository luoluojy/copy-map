import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { MapComponent } from '../map-component';
import { CesiumService } from './cesium.service';

declare let Cesium: any;
/**
 * Cesium地图组件
 */
@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.css']
})
export class CesiumComponent implements MapComponent, OnInit, OnDestroy, AfterViewInit {

  /**
   * 地图标签
   */
  private _mapTag: string = 'cesiumContainer';
  public get mapTag(): string {
    return this._mapTag;
  }
  /**
   * 地图配置名称
   */
  public name: string;
  /**
   * 地图配置
   */
  private _setting: any;
  public set setting(value: any) {
    this._setting = value;
  };
  public get setting(): any {
    return this._setting;
  }

  /**
   * 构造函数
   * @param mapService
   */
  constructor(public mapService: CesiumService) {

  }

  /**
   *
   */
  ngOnInit() {
  }
  /**
   *
   */
  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
  }
  /**
   * 视图初始化之后
   */
  ngAfterViewInit() {
    this.mapService.initBingMap(this.mapTag);
  }
}
