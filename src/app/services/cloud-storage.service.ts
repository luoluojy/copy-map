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
        CloudStorageAPIs[0].url,
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
        this.getAvatar(username, token);
      });
  }

  /* 
    获取头像
  */
  getAvatar(username, token) {
    this.http
      .get(CloudStorageAPIs[1].url.replace("email", username), {
        headers: new HttpHeaders({
          Authorization: `Token ${token}`
        })
      })
      .subscribe(res => {
        let avatarUrl = res["url"];
        this.http.get(avatarUrl, { responseType: "blob" }).map((data: Blob) => {
          console.log(data);
        });
      });
  }
}
