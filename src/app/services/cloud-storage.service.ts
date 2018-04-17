import { Injectable } from "@angular/core";

import { CloudStorageAPIs } from "./cloud-storage-apis";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CloudStorageService {

  constructor(private http: HttpClient) {}
  /* 
  登录
*/
  login(username, password) {
    this.http
      .post(
        // CloudStorageAPIs[0].url,
        'https://58.213.133.181:7774/api2/auth-token/',
        "username=" + username + "&&password=" + password,
        {
          headers: new HttpHeaders({
            "Content-Type": "application/x-www-form-urlencoded"
          })
        }
      )
      .subscribe(res => {
        if (res["token"]) {
          alert("登陆成功！");
        }
        let token: string = res["token"];
        console.log(token);
        this.getAvatar(username, token);
      });
  }

  /* 
    获取头像
  */
  getAvatar(username, token) {
    this.http
      .get(
        // CloudStorageAPIs[1].url.replace("email", username), 
        `https://58.213.133.181:7774/api2/avatars/user/${username}/resized/80/`,
        {
        headers: new HttpHeaders({
          Authorization: `Token ${token}`
        })
      })
      .subscribe(res => {
        let avatarUrl = res["url"];
        this.http.get(avatarUrl, { responseType: "blob" }).subscribe((data: Blob) => {
          console.log(data);
        });
      });
  }
}
