import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  /**
   * 构造函数
   * @param service
   */
  constructor(private service: FooterService) {
    this.service.owner = this;
  }
    /**
  *
  * @param changes
  */
 public get appCopyright(): string {
   if (this.service.appInfo == undefined) {
     return "";
   }
   return this.service.appInfo.copyright;
 }

 public get appAboutUrl():string{
  if (this.service.appInfo == undefined) {
    return "";
  }
  return this.service.appInfo.aboutUrl;
 }

 public get appHelpUrl():string{
  if (this.service.appInfo == undefined) {
    return "";
  }
  return this.service.appInfo.helpUrl;
 }

 public get appFeedbackUrl():string{
  if (this.service.appInfo == undefined) {
    return "";
  }
  return this.service.appInfo.feedbackUrl;
 }

  ngOnInit() {
  }

}
