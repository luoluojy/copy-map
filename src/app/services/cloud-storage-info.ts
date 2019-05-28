
export class CloudStorageInfo {


    /**
     * 用户密码匹配时，获取token
     * @param username 用户名或邮箱
     * @param password 密码
     */
    getToken(username, password) {
        // 发送post请求 url: '/crimeanalysis/storage/api2/auth-token/'
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
    }

    /**
     * 获取所有实体(目录和文件)
     */
    getLibraryEntities() {
        // 发送http请求 url:'/crimeanalysis/storage/api2/repos/repos_id/dir/'
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
