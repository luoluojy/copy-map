import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { CloudStorageAPIs } from "./cloud-storage-apis";



@Injectable()
export class CloudStorageService {
  constructor(private http: HttpClient) {}

  avatarImage: Blob;

  /* 
  登录
*/
  login(username, password) {
    return this.http
      .post(
        CloudStorageAPIs[0].url,
        // 'https://58.213.133.181:7774/api2/auth-token/',
        "username=" + username + "&&password=" + password,
        {
          headers: new HttpHeaders({
            "Content-Type": "application/x-www-form-urlencoded"
          })
        }
      ).pipe(map((res: any) => {
        let token = res["token"]
        localStorage.setItem('cloudStorageToken',token);
        return this.getAvatar(username, token);
      }))
      .toPromise()
      .then(res => {
        return res;
      });
  }

  /* 
  获取头像
*/
  getAvatar(username, token) {
    return this.http
      .get(
        CloudStorageAPIs[1].url.replace("email", username),
        // `https://58.213.133.181:7774/api2/avatars/user/${username}/resized/80/`,
        {
          headers: new HttpHeaders({
            Authorization: `Token ${token}`
          })
        }
      ).pipe(map(res => {
        let avatarUrl = res["url"];
        // this.getLibraryFiles(token);
        return this.http.get(avatarUrl, { responseType: "blob" }).toPromise();
      }))
      .toPromise();
  }

  //   /*
  //   登录
  // */
  //   login(username, password) {
  //     return this.http.post(CloudStorageAPIs[0].url,
  //         // 'https://58.213.133.181:7774/api2/auth-token/',
  //         "username=" + username + "&&password=" + password,
  //         {
  //           headers: new HttpHeaders({
  //             "Content-Type": "application/x-www-form-urlencoded"
  //           })
  //         }
  //       ).toPromise().then(res => {
  //         if (res["token"]) {
  //           alert("登陆成功！");
  //         }
  //        this.token = res["token"];
  //         return this.getAvatar(username, this.token).then(data => {
  //           return data;
  //         });
  //       });
  //   }

  //   /*
  //     获取头像
  //   */
  //   getAvatar(username, token) {
  //     return this.http
  //       .get(
  //         CloudStorageAPIs[1].url.replace("email", username),
  //         // `https://58.213.133.181:7774/api2/avatars/user/${username}/resized/80/`,
  //         {
  //           headers: new HttpHeaders({
  //             Authorization: `Token ${token}`
  //           })
  //         }
  //       ).toPromise()
  //       .then(async res => {
  //         let avatarUrl = res["url"];
  //         this.getLibraryFiles()
  //         return await this.http
  //           .get(avatarUrl, { responseType: "blob" })
  //           .toPromise();
  //       });
  //   }

  /**
   * 获取用户存储库文件
   */
  getLibraryFiles(token) {
    // 涉及到的Seafile API:
    // 1. 获取用户默认私人存储库
    // 2. 列举库中所有目录文件
    // 3. 获取目录信息详情
    // 4. 获取文件信息详情
    // 5. 获取目录下载链接
    // 6. 获取文件下载链接
   return this.http.get(CloudStorageAPIs[2].url, {
        headers: new HttpHeaders({
          Authorization: `Token ${token}`
        })
      // }).subscribe((data)=>{
      //   console.log(data);
      })
      .pipe(map(defaultRepo => {
        if (defaultRepo["exists"]) {
          let repo_id =defaultRepo["repo_id"];
          // 列举获取库中所有目录文件
          return this.http.get(CloudStorageAPIs[3].url.replace("repos_id", repo_id), {
              headers: new HttpHeaders({
                Authorization: `Token ${token}`
              })
            }).pipe(map((entities: any) => {
              // 获取存储库中所有目录
              let dirs = entities.filter(entity => {
                return entity["type"] == "dir";
              });
              //获取存储库中所有文件
              let files = entities.filter(entity => {
                return entity["type"] == "file";
              });
              return new RepoEntities(repo_id,dirs,files);
            })).toPromise()
        } else {
          return null;
        }
      })).toPromise().then(entities=>{
        return entities;
      })
  }
}

class RepoEntities{
  repo_id: string;
  dirs: RepoDir[];
  files: RepoFile[];
  constructor(repo_id,dirs,files){
    this.repo_id = repo_id;
    this.dirs = dirs;
    this.files = files;
  }
}
class RepoEntity{
  id: string;
  name:string;
  mtime:number;
  downloadUrl:string;
}
class RepoDir extends RepoEntity{
  
}
class RepoFile extends RepoEntity{

}
