/**
 * 应用程序命令指令
 */
export enum AppCommand {
  /**
   * 打开功能菜单
   */
  EnterOrderCommand,
  /**
   * 关闭功能菜单
   */
  EnterReadyCommand,
  /**
   * 进入功能操作
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
  BasemapResourceCommand

}
