import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { SidernavToggleDirective } from '../../directives/sidernav-toggle.directive';
import { SidenavWatchDirective } from '../../directives/sidenav-watch.directive';
import { ActionComponent } from '../../../core/components/action/action.component';
import { NewProjectComponent } from '../../../core/components/new-project/new-project.component';
import { OpenProjectComponent } from '../../..//core/components/open-project/open-project.component';
import { ManageProjectComponent } from '../../../core/components/manage-project/manage-project.component';
import { ContentComponent } from '../../../core/components/content/content.component';
import { DataQueryComponent } from '../../../core/components/data-query/data-query.component';
import { DataAnalysisComponent } from '../../../core/components/data-analysis/data-analysis.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SidenavComponent,
    SidernavToggleDirective,
    SidenavWatchDirective
  ],
  declarations: [
    SidenavComponent,
    SidernavToggleDirective,
    SidenavWatchDirective,
    ActionComponent, 
    NewProjectComponent,
    OpenProjectComponent,
    ManageProjectComponent,
    ContentComponent,
    DataQueryComponent,
    DataAnalysisComponent
  ]
})
export class MenuModule { }
