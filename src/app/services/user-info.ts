/**
 *
 */
export class UserInfo {

  /**
   *
   */
  private _userName: string;
  public get userName(): string {
    return this._userName;
  }
  public set userName(value: string) {
    this._userName = value;
  }
  /**
  *
  */
  private _password: string;
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }
  /**
   *
   */
  private _token: string;
  public get token(): string {
    return this._token;
  }
  public set token(value: string) {
    this._token = value;
  }



}
