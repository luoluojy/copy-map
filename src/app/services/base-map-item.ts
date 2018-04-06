import { MapEngine } from '../components/map/map-engine.enum';

/**
 * 地理底图配置项
 */
export class BaseMapItem {
  /**
   *
   * @param name
   * @param engine
   * @param setting
   */
  constructor(public name: string, public engine: MapEngine, public setting: any) { }
}
