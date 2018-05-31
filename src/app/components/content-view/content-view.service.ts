import { Injectable } from '@angular/core';
import { Workspace } from '../../services/workspace';
import { ContentViewComponent } from './content-view.component';

/**
 * 内容管理组件服务
 */
@Injectable()
export class ContentViewService {

  /**
   * 构造函数
   * @param workspace
   */
  constructor(private workspace: Workspace) { }

  /**
   * 服务所属的组件
   */
  private _owner: ContentViewComponent;
  public get owner(): ContentViewComponent {
    return this._owner;
  }
  public set owner(value: ContentViewComponent) {
    this._owner = value;
  }

  /**
   *
   */
  private _isConrolViewVisible: boolean;
  public get isConrolViewVisible(): boolean {
    return this._isConrolViewVisible;
  }
  public set isConrolViewVisible(value: boolean) {
    this._isConrolViewVisible = value;
  }
  /**
  *
  */
  private _isDataViewVisible: boolean;
  public get isDataViewVisible(): boolean {
    return this._isDataViewVisible;
  }
  public set isDataViewVisible(value: boolean) {
    this._isDataViewVisible = value;
  }


}
