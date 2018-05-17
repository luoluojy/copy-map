import { Directive, ComponentFactoryResolver, ViewContainerRef, Type } from '@angular/core';
import { NewScenarioComponent } from '../controls/new-scenario/new-scenario.component';
import { OpenScenarioComponent } from '../controls/open-scenario/open-scenario.component';
import { SaveScenarioComponent } from '../controls/save-scenario/save-scenario.component';
import { MaintainScenarioComponent } from '../controls/maintain-scenario/maintain-scenario.component';
import { ScenarioContentComponent } from '../controls/scenario-content/scenario-content.component';
import { DataResourceComponent } from '../controls/data-resource/data-resource.component';
import { AnalysisTaskComponent } from '../controls/analysis-task/analysis-task.component';
import { BasemapResourceComponent } from '../controls/basemap-resource/basemap-resource.component';

@Directive({
  selector: '[action-host]'
})
export class ControlViewDirective {

  /**
   * 构造函数
   * @param componentFactoryResolver
   * @param viewContainerRef 获取对容器视图的访问权
   */
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef) {
  }

  /**
   * 创建新建项目组件
   */
  public createNewScenarioComponent() {
    let component: Type<any> = NewScenarioComponent;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }
  /**
   * 创建打开项目组件
   */
  public createOpenScenarioComponent() {
    let component: Type<any> = OpenScenarioComponent;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }
  /**
   * 创建保存项目组件
   */
  public createSaveScenarioComponent() {
    let component: Type<any> = SaveScenarioComponent;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }
  /**
   * 创建项目管理组件
   */
  public createMaintainScenarioComponent() {
    let component: Type<any> = MaintainScenarioComponent;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }
  /**
   * 创建项目内容组件
   */
  public createScenarioContentComponent() {
    let component: Type<any> = ScenarioContentComponent;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }
  /**
   * 创建数据查询组件
   */
  public createDataResourceComponent() {
    let component: Type<any> = DataResourceComponent;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }
  /**
   * 创建数据分析组件
   */
  public creatAnalysisTaskComponent() {
    let component: Type<any> = AnalysisTaskComponent;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }
  /**
   * 创建地理底图组件
   */
  public createBasemapResourceComponent() {
    let component: Type<any> = BasemapResourceComponent;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }
}
