import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class CloudStorageAPIsService {

    constructor(private http: HttpClient) {
        this.token = localStorage.getItem('cloudStorageToken');
        this.headers = {
            headers: new HttpHeaders({
                Authorization: `Token ${this.token}`
            })
        }
    }
    token:string;
    headers:object;

    public get CloudStorageToken(){
        return this.token;
    }
    public set CloudStorageToken(token){
        this.token = token;
        this.headers = {
            headers: new HttpHeaders({
                Authorization: `Token ${this.token}`
            })
        }
    }


    /**
     * 用户密码匹配时，获取token
     * @param username 用户名或邮箱
     * @param password 密码
     */
    getToken(username, password) {
        // 发送post请求 url: '/crimeanalysis/storage/api2/auth-token/'
        return this.http.post('/crimeanalysis/storage/api2/auth-token/', "username=" + username + "&&password=" + password, {
            headers: new HttpHeaders({
                "Content-Type": "application/x-www-form-urlencoded"
            })
        }).toPromise()
    }

    /**
     * 获取头像信息
     */
    getAvatarInfo() {
        // 发送get请求 url:'/crimeanalysis/storage/api2/avatars/user/email/resized/80/'
    }

    /**
     * 获取用户默认文件库
     */
    getDefaultLibrary() {
        // 发送get请求 url:'/crimeanalysis/storage/api2/default-repo/'
        return this.http.get('/crimeanalysis/storage/api2/default-repo/', this.headers).pipe(map((libInfo) => {
            return libInfo['repo_id'];
        })).toPromise();
    }

    /**
     * 获取所有实体(目录和文件)
     */
    getLibraryEntities(repos_id) {
        // 发送http请求 url:'/crimeanalysis/storage/api2/repos/repos_id/dir/'
        let url = '/crimeanalysis/storage/api2/repos/repos_id/dir/'.replace('repos_id', repos_id);
        return this.http.get(url, this.headers).pipe((map((entities: any) => {
            entities = entities.map((file, index) => {
                return {
                    id: file['id'], position: index + 1, name: file['name'], mtime: new Date(file['mtime'] * 1000).toLocaleString(), type: file['type']
                }
            })
            return { entities: entities };
        }))).toPromise();
    }

    /**
     * 根据父亲目录路径parent_dir对目录名称为dirname进行压缩处理
     * @param parent_dir 下载目录的父亲目录路径
     * @param dirname 下载目录名称
     */
    handleDirZipTask(parent_dir, dirname) {
        // 发送get请求 url:'/crimeanalysis/storage/api/v2.1/repos/repos_id/zip-task/?parent_dir=/&dirents=dirname'
    }

    /**
     * 返回目录下载信息
     */
    getDirUrl() {
        // 发送get请求 url:'/crimeanalysis/storage/api/v2.1/query-zip-progress/?token=zip-token'
    }

    /**
     * 获取下载文件url
     * @param filename 文件名
     */
    getFileUrl(filename) {
        // 发送get请求 url:'/crimeanalysis/storage/api2/repos/repos_id/file/?p=/filename&reuse=1'
    }
}
