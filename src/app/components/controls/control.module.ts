import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NewProjectComponent } from './new-project/new-project.component';
import { OpenProjectComponent } from './open-project/open-project.component';
import { MaintainProjectComponent } from './maintain-project/maintain-project.component';
import { ProjectContentComponent } from './project-content/project-content.component';

import { ControlService } from './control.service';

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
  ],
  entryComponents: [NewProjectComponent, OpenProjectComponent, MaintainProjectComponent, ProjectContentComponent],
  providers: [ControlService],
})
export class ControlModule { }
