import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { MenuService } from './menu.service';
import { AppCommandService } from '../../app-command.service';
import { AppCommand } from '../../app-command.enum';


/**
 * 菜单组件
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  /**
   * 构造函数
   * @param service
   * @param appCommands
   */
  constructor(private service: MenuService, private appCommands: AppCommandService,private elementRef:ElementRef) {
    this.service.owner = this;
  }

  ngOnInit() { }

  /**
   * 应用标题
   */
  public get appTitle(): string {
    if (this.service.appInfo == undefined)
    {
      return "";
    }
    return this.service.appInfo.title;
  }

  @Input() outerDrawer:any;
  @Input() innerDrawer:any;

  onCloseClick() {
    let modal = this.elementRef.nativeElement.querySelector('.gisc-modal');
    modal.style.visibility = 'hidden'
    this.outerDrawer.toggle();
    this.appCommands.execute(AppCommand.EnterReadyCommand);
  }

  onNewScenarioClick() {
    let modal = this.elementRef.nativeElement.querySelector('.gisc-modal');
    modal.style.visibility = 'hidden'
    this.outerDrawer.toggle();
    this.innerDrawer.toggle();
    this.appCommands.execute(AppCommand.NewScenarioCommand);
  }

  onOpenScenarioClick() {
    let modal = this.elementRef.nativeElement.querySelector('.gisc-modal');
    modal.style.visibility = 'hidden'
    this.outerDrawer.toggle();
    this.innerDrawer.toggle();
    this.appCommands.execute(AppCommand.OpenScenarioCommand);
  }

  onSaveScenarioClick() {
    let modal = this.elementRef.nativeElement.querySelector('.gisc-modal');
    modal.style.visibility = 'hidden'
    this.outerDrawer.toggle();
    this.innerDrawer.toggle();
    this.appCommands.execute(AppCommand.SaveScenarioCommand);
  }

  onMaintainScenarioClick() {
    let modal = this.elementRef.nativeElement.querySelector('.gisc-modal');
    modal.style.visibility = 'hidden'
    this.outerDrawer.toggle();
    this.innerDrawer.toggle();
    this.appCommands.execute(AppCommand.MaintainScenarioCommand);
  }

  onScenarioContentClick() {
    let modal = this.elementRef.nativeElement.querySelector('.gisc-modal');
    modal.style.visibility = 'hidden'
    this.outerDrawer.toggle();
    this.innerDrawer.toggle();
    this.appCommands.execute(AppCommand.ScenarioContentCommand);
  }

  onDataResourceClick() {
    let modal = this.elementRef.nativeElement.querySelector('.gisc-modal');
    modal.style.visibility = 'hidden'
    this.outerDrawer.toggle();
    this.innerDrawer.toggle();
    this.appCommands.execute(AppCommand.DataResourceCommand);
  }

  onAnalysisTaskClick() {
    let modal = this.elementRef.nativeElement.querySelector('.gisc-modal');
    modal.style.visibility = 'hidden'
    this.outerDrawer.toggle();
    this.innerDrawer.toggle();
    this.appCommands.execute(AppCommand.AnalysisTaskCommand);
  }

  onBasemapResourceClick() {
    let modal = this.elementRef.nativeElement.querySelector('.gisc-modal');
    modal.style.visibility = 'hidden'
    this.outerDrawer.toggle();
    this.innerDrawer.toggle();
    this.appCommands.execute(AppCommand.BasemapResourceCommand);
  }


}
