import { Injectable } from '@angular/core';
import { AppSettingsService } from '../../../services/app-settings.service';
import { OpenlayersComponent } from './openlayers.component';
import Map from "ol/map";
import View from "ol/view";
import TileLayer from "ol/layer/tile";
import OSM from "ol/source/osm";
import Proj from "ol/proj";
import Control from "ol/control";
import ScaleLine from 'ol/control/scaleline';

/**
 * Openlayers地图引擎服务
 */
@Injectable()
export class OpenlayersService {

  /**
   * 构造函数
   * @param appSetting
   */
  constructor(private appSettings: AppSettingsService) { }

  /**
   * 服务所属的组件
   */
  private _owner: OpenlayersComponent;
  public get owner(): OpenlayersComponent {
    return this._owner;
  }
  public set owner(value: OpenlayersComponent) {
    this._owner = value;
  }
  /**
   * 初始化OSM
   * @param mapTag 地图标签
   */
  public initOSM(mapTag: string) {
    let map = new Map({
      target: mapTag,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: Proj.fromLonLat([118.78, 32.04]),
        zoom: 9
      }),
      controls: Control.defaults({
        attribution: false,
        rotate: false,
        zoom: true
      })
    });
    map.addControl(new ScaleLine())
  }


}
