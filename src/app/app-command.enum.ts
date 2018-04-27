/**
 * 应用程序命令指令
 */
export enum AppCommand {
  /**
   * 进入待命状态
   */
  EnterOrderCommand,
  /**
   * 退出待命状态
   */
  ExitOrderCommand,
  /**
   * 进入准备状态
   */
  EnterReadyCommand,
  /**
   * 进入操作状态
   */
  EnterOperationCommand,
  /**
   * 展开数据视图
   */
  CollapseDataViewCommand,
  /**
   * 新建场景
   */
  NewScenarioCommand,
  /**
   * 打开场景
   */
  OpenScenarioCommand,
  /**
   * 保存场景
   */
  SaveScenarioCommand,
  /**
   * 管理场景
   */
  MaintainScenarioCommand,
  /**
   * 场景内容
   */
  ScenarioContentCommand,
  /**
   * 数据资源
   */
  DataResourceCommand,
  /**
   * 数据分析
   */
  AnalysisTaskCommand,
  /**
   * 地理底图
   */
  BasemapResourceCommand,
  /**
   * 关闭数据视图
   */
  CloseDataViewCommand,
  /**
   * 最大化数据视图
   */
  MaxDataViewCommand,
  /**
   * 最小化数据视图
   */
  MinDataViewCommand,
  /**
   * 关闭tabpage
   */
  CloseTabpageCommand,

}
