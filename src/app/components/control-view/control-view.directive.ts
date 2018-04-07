import { Directive, ComponentFactoryResolver, ViewContainerRef, Type } from '@angular/core';
import { NewProjectComponent } from '../controls/new-project/new-project.component';
import { OpenProjectComponent } from '../controls/open-project/open-project.component';
import { MaintainProjectComponent } from '../controls/maintain-project/maintain-project.component';
import { ProjectContentComponent } from '../controls/project-content/project-content.component';
import { DataResourceComponent } from '../controls/data-resource/data-resource.component';
import { AnalysisTaskComponent } from '../controls/analysis-task/analysis-task.component';

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
  public createNewProjectComponent() {
    let component: Type<any> = NewProjectComponent;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }
  /**
   * 创建打开项目组件
   */
  public createOpenProjectComponent() {
    let component: Type<any> = OpenProjectComponent;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }
  /**
   * 创建项目管理组件
   */
  public createMaintainProjectComponent() {
    let component: Type<any> = MaintainProjectComponent;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }
  /**
   * 创建项目内容组件
   */
  public createProjectContentComponent() {
    let component: Type<any> = ProjectContentComponent;
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
}
