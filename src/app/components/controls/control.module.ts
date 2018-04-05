import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NewProjectComponent } from './new-project/new-project.component';
import { OpenProjectComponent } from './open-project/open-project.component';
import { MaintainProjectComponent } from './maintain-project/maintain-project.component';
import { ProjectContentComponent } from './project-content/project-content.component';

/**
 *
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
  ]
})
export class ControlModule { }
