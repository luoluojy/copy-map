import { AppInfo } from "./app-info";
import { CloudStorageInfo } from "./cloud-storage-info";

/**
 * 用户设置信息
 */
export class AppSettings {

  /**
* 应用信息
*/
  public appInfo: AppInfo;
  /**
   * 云盘存储信息
   */
  public cloudStorageInfo: CloudStorageInfo;

}
