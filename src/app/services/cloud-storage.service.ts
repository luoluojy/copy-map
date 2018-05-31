import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CloudStorageAPIsService } from "./cloud-storage-apis.service";

@Injectable()
export class CloudStorageService {
  constructor(private http: HttpClient,private cloudStorageAPIsService:CloudStorageAPIsService) {}

//   /* 
//   登录
// */
//   loginCommand(username, password) {
//      this.http
//       .post(
//         // CloudStorageAPIs[0].url,
//         'https://58.213.133.181:7774/api2/auth-token/',
//         "username=" + username + "&&password=" + password,
//         {
//           headers: new HttpHeaders({
//             "Content-Type": "application/x-www-form-urlencoded"
//           })
//         }
//       ).subscribe((res)=>{
//         let token = res["token"]
//         if(token){
//           alert('登录成功！')
//         }else{
//           console.log(res)
//           alert('登录失败！')
//         }
//         //保存token到localStorage中
//         localStorage.setItem('cloudStorageToken',token);
//       });
//   }

//   /* 
//   获取头像
//  */
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
//       ).pipe(map(res => {
//         let avatarUrl = res["url"];
//         // this.getLibraryFiles(token);
//         return this.http.get(avatarUrl, { responseType: "blob" }).toPromise();
//       }))
//       .toPromise();
//   }

//   /**
//    * 获取用户存储库文件实体
//    */
//   getLibraryFilesCommand(token) {
//     // 涉及到的Seafile API:
//     // 1. 获取用户默认私人存储库
//     // 2. 列举库中所有目录文件
//     // 3. 获取目录信息详情
//     // 4. 获取文件信息详情
//    return this.http.get(CloudStorageAPIs[2].url, {
//         headers: new HttpHeaders({
//           Authorization: `Token ${token}`
//         })
//       })
//       .pipe(map(defaultRepo => {
//         if (defaultRepo["exists"]) {
//           let repo_id =defaultRepo["repo_id"];
//           // 列举获取库中所有目录文件
//           return this.http.get(CloudStorageAPIs[3].url.replace("repos_id", repo_id), {
//               headers: new HttpHeaders({
//                 Authorization: `Token ${token}`
//               })
//             }).pipe(map((entities: any) => {
//               entities = entities.map((file, index) => {
//                 return {
//                   id:file['id'],position: index + 1, name:file['name'], mtime:new Date(file['mtime'] * 1000).toLocaleString(), type:file['type']
//                 }
//               })
//               return {repo_id:repo_id,entities:entities};
//             })).toPromise()
//         } else {
//           return null;
//         }
//       })).toPromise().then(entities=>{
//         return entities;
//       })
//   }

//   // 获取文件下载链接
//   downloadFile(token,repos_id,filename){
//     return this.http.get(CloudStorageAPIs[5].url.replace('repos_id',repos_id).replace('filename',filename),{
//       headers: new HttpHeaders({
//         Authorization: `Token ${token}`
//       })
//     })
//   }
  
//   // 获取目录下载链接
//   downloadDir(token,repos_id,dirname){
//     return this.http.get(CloudStorageAPIs[4].url.replace('repos_id',repos_id).replace('dirname',dirname),{
//       headers: new HttpHeaders({
//         Authorization: `Token ${token}`
//       })
//     }).pipe(
//       map((zipToken:string)=>{
//         console.log(zipToken['zip_token'])
//       return this.http.get(CloudStorageAPIs[6].url.replace('zip-token',zipToken['zip_token']),{
//         headers: new HttpHeaders({
//           Authorization: `Token ${token}`
//         })}).pipe(map((progress)=>{
//           console.log(progress)
//           return {zipToken:zipToken['zip_token'],progress:progress}
//         }))
//     }))
//   }

  loginCommand(username,password){
    // 调用getToken()
    this.cloudStorageAPIsService.getToken(username,password).then((tokenInfo)=>{
      let token = tokenInfo['token'];
      alert('登录成功');
      if(!localStorage.getItem('cloudStorageToken')){
        this.cloudStorageAPIsService.CloudStorageToken = token
      }
      // 保存token到localStorage
      localStorage.setItem('cloudStorageToken',token);
      // 登录成功后，关闭对话框
    }).catch((err)=>{
      if(err){
        alert('登录失败');
        console.log(err);
      }
    });
  }

  async listLibraryEntitiesCommand(){
    // 调用getDefaultLibrary()
    await this.cloudStorageAPIsService.getDefaultLibrary().then(async (repos_id)=>{
      // 调用getLibraryEntities()
      localStorage.setItem('repos_id',repos_id);
     await this.cloudStorageAPIsService.getLibraryEntities(repos_id).then((repos_entities)=>{
        localStorage.setItem('repos_entities',JSON.stringify(repos_entities));
        // 保存所有实体(目录和文件)元数据信息到localStorage
      })

    })
  }
  
  downloadDirCommand(parent_dir,dirname){
    // 调用handleDirZipTask()
    // 调用getDirUrl(parent_dir,dirname)
    // 保存该目录的下载地址到localStorage
  }

  downloadFileCommand(filename){
    // 调用getFileUrl(filename)
    // 保存该文件的下载地址到localStorage
  }

}
