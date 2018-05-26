
/* api类型接口 */
interface API{
  id:number;
  description:string;
  url:string;
}
export const CloudStorageAPIs: API[] = [
  {
    id: 0,
    description: 'exchange token',
    url: '/crimeanalysis/storage/api2/auth-token/',
  },{
    id:1,
    description:'get avatar',
    url:'/crimeanalysis/storage/api2/avatars/user/email/resized/80/',
  },{
    id:2,
    description: 'get default library',
    url:'/crimeanalysis/storage/api2/default-repo/'
  },{
    id:3,
    description: 'list directory entities',
    url:'/crimeanalysis/storage/api2/repos/repos_id/dir/'
  },{
    id:4,
    description: 'download directory ',
    url:'/crimeanalysis/storage/api/v2.1/repos/repos_id/zip-task/?parent_dir=/&dirents=dirname'
  },{
    id:5,
    description: 'download file ',
    url:'/crimeanalysis/storage/api2/repos/repos_id/file/?p=/filename&reuse=1'
  },{
    id:6,
    description: 'query task progress and  generate directory download url with the zip_token ',
    url:'/crimeanalysis/storage/api/v2.1/query-zip-progress/?token=zip-token'
  }

];
