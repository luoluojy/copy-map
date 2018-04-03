import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations/locations.component';
import { AtlasComponent } from './atlas/atlas.component';
import { UtilsComponent } from './utils/utils.component';
import { NoticeComponent } from './notice/notice.component';
import { UserComponent } from './user/user.component';
import { ToolBarStatusService } from './tool-bar-status.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LocationsComponent,
    AtlasComponent,
    UtilsComponent,
    NoticeComponent,
    UserComponent
  ],
  providers: [
    ToolBarStatusService,
  ],
  exports: [
    LocationsComponent,
    AtlasComponent,
    UtilsComponent,
    NoticeComponent,
    UserComponent
  ]
})
export class ToolBarModule { }
