import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NewProjectComponent } from './new-project/new-project.component';
import { OpenProjectComponent } from './open-project/open-project.component';
import { MaintainProjectComponent } from './maintain-project/maintain-project.component';
import { ProjectContentComponent } from './project-content/project-content.component';
import { DataResourceComponent } from './data-resource/data-resource.component';
import { AnalysisTaskComponent } from './analysis-task/analysis-task.component';

import { NewProjectService } from './new-project/new-project.service';
import { OpenlayersService } from '../map/openlayers/openlayers.service';
import { MaintainProjectService } from './maintain-project/maintain-project.service';
import { ProjectContentService } from './project-content/project-content.service';
import { DataResourceService } from './data-resource/data-resource.service';
import { AnalysisTaskService } from './analysis-task/analysis-task.service';

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
    MaintainProjectComponent,
    ProjectContentComponent,
    DataResourceComponent,
    AnalysisTaskComponent
  ],
  entryComponents: [
    NewProjectComponent,
    OpenProjectComponent,
    MaintainProjectComponent,
    ProjectContentComponent,
    DataResourceComponent,
    AnalysisTaskComponent
  ],
  providers: [
    NewProjectService,
    OpenlayersService,
    MaintainProjectService,
    ProjectContentService,
    DataResourceService,
    AnalysisTaskService
  ],
})
export class ControlModule { }
