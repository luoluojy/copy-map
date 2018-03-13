import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { SidernavToggleDirective } from '../../directives/sidernav-toggle.directive';
import { SidenavWatchDirective } from '../../directives/sidenav-watch.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    SidenavComponent,
    SidernavToggleDirective,
    SidenavWatchDirective
  ],
  declarations: [
    SidenavComponent,
    SidernavToggleDirective,
    SidenavWatchDirective
  ]
})
export class MenuModule { }
