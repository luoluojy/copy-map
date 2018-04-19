
/**
 *
 */
export class AppInfo {

  /**
   *
   */
  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  /**
   *
   */
  private _tilte: string;
  public get title(): string {
    return this._tilte;
  }
  public set title(value: string) {
    this._tilte = value;
  }

  /**
   *
   */
  private _copyright: string;
  public get copyright(): string {
    return this._copyright;
  }
  public set copyright(value: string) {
    this._copyright = value;
  }
}
