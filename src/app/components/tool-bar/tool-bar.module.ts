import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations/locations.component';
import { AtlasComponent } from './atlas/atlas.component';
import { ToolsComponent } from './tools/tools.component';
import { NoticeComponent } from './notice/notice.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LocationsComponent,
    AtlasComponent,
    ToolsComponent,
    NoticeComponent,
    UserComponent
  ],
  exports: [
    LocationsComponent,
    AtlasComponent,
    ToolsComponent,
    NoticeComponent,
    UserComponent
  ]
})
export class ToolBarModule { }
