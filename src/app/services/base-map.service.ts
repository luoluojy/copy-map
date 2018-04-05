import { Injectable } from '@angular/core';

import { BaseMapItem } from './base-map-item';
import { BaseMapItems } from './mock-base-map-items';

/**
 *
 */
@Injectable()
export class BaseMapService {

  /**
   * 构造函数
   */
  constructor() { }

  /**
   * 返回地理底图列表
   */
  public getBaseMapItems(): BaseMapItem[] {
    return BaseMapItems;
  }

}
