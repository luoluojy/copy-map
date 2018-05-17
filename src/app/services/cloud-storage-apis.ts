
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
    url: '/crimeanalysis/storage/auth-token/',
  },{
    id:1,
    description:'get avatar',
    url:'/crimeanalysis/storage/avatars/user/email/resized/80/',
  },{
    id:2,
    description: 'get default library',
    url:'/crimeanalysis/storage/default-repo/'
  },{
    id:3,
    description: 'list directory entities',
    url:'/crimeanalysis/storage/repos/repos_id/dir/'
  }

];
