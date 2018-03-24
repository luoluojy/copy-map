import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { openedReducer} from './common/reducer'; 
import { AppComponent } from './app.component';

import { MenuModule } from './core/modules/menu/menu.module';
import { ToolsToggleDirective } from './core/directives/tools-toggle.directive';
import { ToolsWatchDirective } from './core/directives/tools-watch.directive';
import { MapsToggleDirective } from './core/directives/maps-toggle.directive';
import { MapsWatchDirective } from './core/directives/maps-watch.directive';
import { UserWatchDirective } from './core/directives/user-watch.directive';
import { UserToggleDirective } from './core/directives/user-toggle.directive';
import { ToolsComponent } from './core/components/tools/tools.component';
import { MapsComponent } from './core/components/maps/maps.component';
import { UserComponent } from './core/components/user/user.component';
import { BottomContainerComponent } from './core/components/bottom-container/bottom-container.component';
import { BottomContainerWatchDirective } from './core/directives/bottom-container-watch.directive';
import { BottomContainerToggleDirective } from './core/directives/bottom-container-toggle.directive';
import { SearchContainerWatchDirective } from './core/directives/search-container-watch.directive';
import { SearchContainerToggleDirective } from './core/directives/search-container-toggle.directive';
import { SearchContainerComponent } from './core/components/search-container/search-container.component';
import { RegionContainerComponent } from './core/components/region-container/region-container.component';
import { RegionContainerWatchDirective } from './core/directives/region-container-watch.directive';
import { RegionContainerToggleDirective } from './core/directives/region-container-toggle.directive';
import { NoticeContainerComponent } from './core/components/notice-container/notice-container.component';
import { NoticeContainerToggleDirective } from './core/directives/notice-container-toggle.directive';
import { NoticeContainerWatchDirective } from './core/directives/notice-container-watch.directive';
import { CommonClickDirective } from './core/directives/common-click.directive';


@NgModule({
  declarations: [
    AppComponent,
    ToolsToggleDirective,
    ToolsWatchDirective,
    MapsToggleDirective,
    MapsWatchDirective,
    UserWatchDirective,
    UserToggleDirective,
    ToolsComponent,
    MapsComponent,
    UserComponent,
    BottomContainerComponent,
    BottomContainerWatchDirective,
    BottomContainerToggleDirective,
    SearchContainerWatchDirective,
    SearchContainerToggleDirective,
    SearchContainerComponent,
    RegionContainerComponent,
    RegionContainerWatchDirective,
    RegionContainerToggleDirective,
    NoticeContainerComponent,
    NoticeContainerToggleDirective,
    NoticeContainerWatchDirective,
    CommonClickDirective,
    
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    StoreModule.forRoot({opened:openedReducer}),
    MenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
