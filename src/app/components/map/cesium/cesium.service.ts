import { Injectable } from '@angular/core';
import { CesiumComponent } from './cesium.component';
import { Workspace } from '../../../services/workspace';

declare let Cesium: any;

/**
 * Cesium引擎地图服务
 */
@Injectable()
export class CesiumService {

  /**
   * 构造函数
   * @param workspace
   */
  constructor(private workspace: Workspace) { }

  /**
   * 服务所属的组件
   */
  private _owner: CesiumComponent;
  public get owner(): CesiumComponent {
    return this._owner;
  }
  public set owner(value: CesiumComponent) {
    this._owner = value;
  }

  /**
   * 初始化BingMap
   * @param mapTag 地图标签
   */
  public initBingMap(mapTag: string) {
    let a = document.getElementById(mapTag);
    Cesium.BingMapsApi.defaultKey = "AtCjSjc6kRhasDrx-5bt8VIkUvI6fNAVz3zRK_8cD9kqS_EwiT8ohYDMwVrPSYfO";
    let viewer = new Cesium.Viewer('cesiumContainer', {
      animation: false,
      fullscreenButton: false,
      vrButton: false,
      homeButton: false,
      timeline: false,
      navigationHelpButton: false,
      baseLayerPicker: false,
      geocoder: false,
      sceneModePicker: false,
    });
    let camera = viewer.camera;
    let point = Cesium.Cartesian3.fromDegrees(118.78, 32.04, 5000.0);
    camera.setView({
      destination: point,
      orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-90.0),
        roll: 0.0
      }
    });
    viewer.bottomContainer.style.display = 'none';
    let options: any = {};
    options.defaultResetView = Cesium.Cartesian3.fromDegrees(118.78, 32.04, 5000.0);
    options.enableCompass = true;
    options.enableZoomControls = false;
    options.enableDistanceLegend = false;
    options.enableCompassOuterRing = true;
    viewer.extend(Cesium.viewerCesiumNavigationMixin, options);
  }

}
