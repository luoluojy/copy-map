import { BaseMapItem } from './base-map-item';
import { OpenlayersComponent } from '../components/map/openlayers/openlayers.component';
import { CesiumComponent } from '../components/map/cesium/cesium.component';

/**
 * 测试用地理底图配置
 */
export const BaseMapItems: BaseMapItem[] = [
  {
    name: 'Mr. Nice',
    component: OpenlayersComponent,
    setting: ''
  },
  {
    name: 'Narco',
    component: CesiumComponent,
    setting: ''
  },

];
