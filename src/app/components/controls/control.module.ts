import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NewProjectComponent } from './new-project/new-project.component';
import { OpenProjectComponent } from './open-project/open-project.component';
import { SaveProjectComponent } from './save-project/save-project.component';
import { MaintainProjectComponent } from './maintain-project/maintain-project.component';
import { ProjectContentComponent } from './project-content/project-content.component';
import { DataResourceComponent } from './data-resource/data-resource.component';
import { AnalysisTaskComponent } from './analysis-task/analysis-task.component';

import { NewProjectService } from './new-project/new-project.service';
import { OpenProjectService } from './open-project/open-project.service';
import { SaveProjectService } from './save-project/save-project.service';
import { MaintainProjectService } from './maintain-project/maintain-project.service';
import { ProjectContentService } from './project-content/project-content.service';
import { DataResourceService } from './data-resource/data-resource.service';
import { AnalysisTaskService } from './analysis-task/analysis-task.service';
import { BasemapResourceComponent } from './basemap-resource/basemap-resource.component';
import { BasemapResourceService } from './basemap-resource/basemap-resource.service';

/**
 * 功能控制模块
 */
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NewProjectComponent,
    OpenProjectComponent,
    SaveProjectComponent,
    MaintainProjectComponent,
    ProjectContentComponent,
    DataResourceComponent,
    AnalysisTaskComponent,
    BasemapResourceComponent
  ],
  entryComponents: [
    NewProjectComponent,
    OpenProjectComponent,
    SaveProjectComponent,
    MaintainProjectComponent,
    ProjectContentComponent,
    DataResourceComponent,
    AnalysisTaskComponent,
    BasemapResourceComponent
  ],
  providers: [
    NewProjectService,
    OpenProjectService,
    SaveProjectService,
    MaintainProjectService,
    ProjectContentService,
    DataResourceService,
    AnalysisTaskService,
    BasemapResourceService
  ],
})
export class ControlModule { }
