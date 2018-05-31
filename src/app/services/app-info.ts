
/**
 * 系统信息
 */
export class AppInfo {
  /**
   * 应用系统名称
   */
  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  /**
   * 应用系统标题
   */
  private _tilte: string;
  public get title(): string {
    return this._tilte;
  }
  public set title(value: string) {
    this._tilte = value;
  }
  /**
   * 版权信息
   */
  private _copyright: string;
  public get copyright(): string {
    return this._copyright;
  }
  public set copyright(value: string) {
    this._copyright = value;
  }
  /**
   * 关于我们网页地址
   */
  private _aboutUrl: string;
  public get aboutUrl(): string {
    return this._aboutUrl;
  }
  public set aboutUrl(value: string) {
    this._aboutUrl = value;
  }
  /**
   * 关于联系我们地址
   */
  private _contactUrl: string;
  public get contactUrl(): string {
    return this._contactUrl;
  }
  public set contactUrl(value: string) {
    this._contactUrl = value;
  }
  /**
   * 平台帮助网页地址
   */
  private _helpUrl: string;
  public get helpUrl(): string {
    return this._helpUrl;
  }
  public set helpUrl(value: string) {
    this._helpUrl = value;
  }
  /**
   * 用户反馈网页地址
   */
  private _feedbackUrl: string;
  public get feedbackUrl(): string {
    return this._feedbackUrl;
  }
  public set feedbackUrl(value: string) {
    this._feedbackUrl = value;
  }
}
