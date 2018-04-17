
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
    url: '/crimeanalysis/storage/auth-token/'
  },{
    id:1,
    description:'get avatar',
    url:'/crimeanalysis/storage/avatars/user/email/resized/80/'
  }

];
