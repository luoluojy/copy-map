import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NewScenarioComponent } from './new-scenario/new-scenario.component';
import { OpenScenarioComponent } from './open-scenario/open-scenario.component';
import { SaveScenarioComponent } from './save-scenario/save-scenario.component';
import { MaintainScenarioComponent } from './maintain-scenario/maintain-scenario.component';
import { ScenarioContentComponent } from './scenario-content/scenario-content.component';
import { DataResourceComponent } from './data-resource/data-resource.component';
import { AnalysisTaskComponent } from './analysis-task/analysis-task.component';

import { NewScenarioService } from './new-scenario/new-scenario.service';
import { OpenScenarioService } from './open-scenario/open-scenario.service';
import { SaveScenarioService } from './save-scenario/save-scenario.service';
import { MaintainScenarioService } from './maintain-scenario/maintain-scenario.service';
import { ScenarioContentService } from './scenario-content/scenario-content.service';
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
    NewScenarioComponent,
    OpenScenarioComponent,
    SaveScenarioComponent,
    MaintainScenarioComponent,
    ScenarioContentComponent,
    DataResourceComponent,
    AnalysisTaskComponent,
    BasemapResourceComponent
  ],
  entryComponents: [
    NewScenarioComponent,
    OpenScenarioComponent,
    SaveScenarioComponent,
    MaintainScenarioComponent,
    ScenarioContentComponent,
    DataResourceComponent,
    AnalysisTaskComponent,
    BasemapResourceComponent
  ],
  providers: [
    NewScenarioService,
    OpenScenarioService,
    SaveScenarioService,
    MaintainScenarioService,
    ScenarioContentService,
    DataResourceService,
    AnalysisTaskService,
    BasemapResourceService
  ],
})
export class ControlModule { }
