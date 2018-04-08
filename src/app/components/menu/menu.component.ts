import { Component, OnInit, ElementRef, HostListener, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
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
export class MenuComponent implements OnInit, OnChanges {

  /**
   * 构造函数
   * @param service
   * @param appCommands
   */
  constructor(private service: MenuService, private appCommands: AppCommandService) {
    this.service.owner = this;
  }

  ngOnInit() { }

  /**
   * 应用标题
   */
  public get appTile(): string {
    return this.service.appTile;
  }
  public set appTile(value: string) {
    this.service.appTile = value;
  }

  @Input() shown;

  @Output() shownEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() actionEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() menuBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() createProjectEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnChanges(changes: SimpleChanges) {

  }

  clsoeMenu() {
    this.shownEmitter.emit(false);
    this.menuBarEmitter.emit(true);
  }

  onNewProjectClick() {
    this.shownEmitter.emit(false);
    this.actionEmitter.emit(true)
    let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
    distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) + 410 + 'px'

    this.appCommands.executeCommand(AppCommand.NewProject);
  }

  onOpenProjectClick() {
    this.shownEmitter.emit(false);
    this.actionEmitter.emit(true)
    let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
    distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) + 410 + 'px'

    this.appCommands.executeCommand(AppCommand.OpenProject);
  }

  onSaveProjectClick() {
    this.shownEmitter.emit(false);
    this.actionEmitter.emit(true)
    let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
    distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) + 410 + 'px'

    this.appCommands.executeCommand(AppCommand.SaveProject);
  }

  onMaintaiProjectClick() {
    this.shownEmitter.emit(false);
    this.actionEmitter.emit(true)
    let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
    distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) + 410 + 'px'

    this.appCommands.executeCommand(AppCommand.MaintainProject);
  }

  onProjectContentClick() {
    this.shownEmitter.emit(false);
    this.actionEmitter.emit(true)
    let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
    distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) + 410 + 'px'

    this.appCommands.executeCommand(AppCommand.ProjectContent);
  }

  onDataResourceClick() {
    this.shownEmitter.emit(false);
    this.actionEmitter.emit(true)
    let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
    distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) + 410 + 'px'

    this.appCommands.executeCommand(AppCommand.DataResource);
  }

  onAnalysisTaskClick() {
    this.shownEmitter.emit(false);
    this.actionEmitter.emit(true)
    let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
    distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) + 410 + 'px'

    this.appCommands.executeCommand(AppCommand.AnalysisTask);
  }

  onBasemapResourceClick() {
    this.shownEmitter.emit(false);
    this.actionEmitter.emit(true)
    let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
    distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) + 410 + 'px'

    this.appCommands.executeCommand(AppCommand.BasemapResource);
  }

  // onCreateProjectClick() {
  //   this.shownEmitter.emit(false);
  //   this.createProjectEmitter.emit(true);

  //   this.appCommands.executeCommand(AppCommand.NewProject);
  // }

}
