import { Injectable } from '@angular/core';
import { UserInfo } from "./user-info";
import { Scenario } from '@geomatrix/scenario';

/**
 * 项目服务
 */
@Injectable()
export class ScenarioService {

  constructor() { }

  /**
   * 应用当前场景
   */
  public scenario: Scenario;
}
