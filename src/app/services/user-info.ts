/**
 * 用户信息
 */
export class UserInfo {

  /**
   * 用户标识
   */
  private _userID:string;
  public get userID():string{
    return this._userID;
  }
  public set userID(value:string){
    this._userID = value;
  }
  /**
   * 用户姓名
   */
  private _userName: string;
  public get userName(): string {
    return this._userName;
  }
  public set userName(value: string) {
    this._userName = value;
  }
  /**
   * 邮箱地址
   */
  private _email: string;
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  /**
  * 用户口令
  */
  private _password: string;
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }
  /**
   * 用户授权令牌
   */
  private _token: string;
  public get token(): string {
    return this._token;
  }
  public set token(value: string) {
    this._token = value;
  }
  /**
   * 用户工作辖区
   */
  private _domain: string;
  public get domain(): string {
    return this._domain;
  }
  public set domain(value: string) {
    this._domain = value;
  }

}
