import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { MapComponent } from '../map-component';
import { AppSettingService } from '../../../app-setting.service';
import { OpenlayersService } from './openlayers.service';

/**
 * Openlayers地图组件
 */
@Component({
  selector: 'app-openlayers',
  templateUrl: './openlayers.component.html',
  styleUrls: ['./openlayers.component.css']
})
export class OpenlayersComponent implements MapComponent, OnInit, OnDestroy, AfterViewInit {
  
  /**
   * 构造函数
   * @param service
   */
  constructor(private service: OpenlayersService) {
    this.service.owner = this;
  }
  
  /**
   * 地图标签
   */
  private _mapTag: string = 'openLayersContainer';
  public get mapTag(): string {
    return this._mapTag;
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
  ngAfterViewInit(): void {
    // throw new Error("Method not implemented.");
    this.service.initOSM(this.mapTag)
  }

  /**
   * 地图配置名称
   */
  @Input()
  public name: string;
  /**
   * 地图配置
   */
  private _setting: any;
  @Input()
  public set setting(value: any) {
    this._setting = value;
  };
  public get setting(): any {
    return this._setting;
  }

}
