import { Injectable } from '@angular/core';

declare let Cesium: any;

/**
 * Cesium引擎地图服务
 */
@Injectable()
export class CesiumService {

  constructor() { }

  /**
   * 初始化BingMap
   */
  public initBingMap() {
    let a = document.getElementById('cesiumContainer');
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
