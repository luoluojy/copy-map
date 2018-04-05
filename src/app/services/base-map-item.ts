import { Type } from '@angular/core';

/**
 * 地理底图配置项
 */
export class BaseMapItem {
  constructor(public name: string, public component: Type<any>, public setting: any) { }
}
