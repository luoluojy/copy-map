import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './tool-bar.component';
import { LocationsComponent } from './locations/locations.component';
import { AtlasComponent } from './atlas/atlas.component';
import { UtilsComponent } from './utils/utils.component';
import { NoticeComponent } from './notice/notice.component';
import { UserComponent } from './user/user.component';
import { RealTimeComponent } from './real-time/real-time.component';
import { ClickedStyleDirective } from './clicked-style.directive';
import { DialogLoginComponent } from './user/dialog-login/dialog-login.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LocationsComponent,
    AtlasComponent,
    UtilsComponent,
    NoticeComponent,
    UserComponent,
    RealTimeComponent,
    ClickedStyleDirective,
    DialogLoginComponent
  ],
  providers: [

  ],
  exports: [
    LocationsComponent,
    AtlasComponent,
    UtilsComponent,
    NoticeComponent,
    UserComponent,
    RealTimeComponent,
    ClickedStyleDirective
  ]
})
export class ToolBarModule { }
