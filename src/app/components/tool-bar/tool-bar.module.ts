import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionsComponent } from './regions/regions.component';
import { MapsComponent } from './maps/maps.component';
import { ToolsComponent } from './tools/tools.component';
import { NoticeComponent } from './notice/notice.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    RegionsComponent,
    MapsComponent,
    ToolsComponent,
    NoticeComponent,
    UserComponent
  ],
  exports: [
    RegionsComponent,
    MapsComponent,
    ToolsComponent,
    NoticeComponent,
    UserComponent
  ]
})
export class ToolBarModule { }
