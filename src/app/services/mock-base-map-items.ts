import { BaseMapItem } from './base-map-item';
import { MapEngine } from '../components/map/map-engine.enum';

/**
 * 测试用地理底图配置
 */
export const BaseMapItems: BaseMapItem[] = [
  {
    name: 'Mr. Nice',
    engine: MapEngine.OpenLayers,
    setting: ''
  },
  {
    name: 'Narco',
    engine: MapEngine.Cesium,
    setting: ''
  },

];
