import { Component, OnInit } from '@angular/core';
import { AppSettingService } from '../../app-setting.service';
import { AppCommandService } from '../../app-command.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  /**
   * 构造函数
   * @param appSetting
   * @param appCommands
   */
  constructor(
    private appSetting: AppSettingService,
    private appCommands: AppCommandService) {

    this.appCommands.footer = this;
  }

  ngOnInit() {
  }

}
