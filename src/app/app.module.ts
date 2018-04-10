import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToolBarModule } from './components/tool-bar/tool-bar.module';
import { ControlModule } from './components/controls/control.module';
import { MapModule } from './components/map/map.module';


import { AppComponent } from './app.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ControlViewComponent } from './components/control-view/control-view.component';
import { DataViewComponent } from './components/data-view/data-view.component';
import { ContentViewComponent } from './components/content-view/content-view.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';

import { ModalComponent } from './components/modal/modal.component';

import { ControlViewDirective } from './components/control-view/control-view.directive';
import { MapViewDirective } from './components/map-view/map-view.directive';

import { AppSettingService } from './app-setting.service';
import { AppService } from './app.service';
import { MapViewService } from './components/map-view/map-view.service';
import { MenuBarService } from './components/menu-bar/menu-bar.service';
import { ToolBarService } from './components/tool-bar/tool-bar.service';
import { DataViewService } from './components/data-view/data-view.service';
import { ContentViewService } from './components/content-view/content-view.service';
import { FooterService } from './components/footer/footer.service';
import { MenuService } from './components/menu/menu.service';
import { ControlViewService } from './components/control-view/control-view.service';
import { AppCommandService } from './app-command.service';
import { BaseMapService } from './services/base-map.service';
import { ProjectService } from './services/project.service';

/**
 * 根应用模块
 */
@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    ToolBarComponent,
    MenuBarComponent,
    ControlViewComponent,
    DataViewComponent,
    ContentViewComponent,
    FooterComponent,
    MenuComponent,
    ModalComponent,
    MapViewDirective,
    ControlViewDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToolBarModule,
    ControlModule,
    MapModule,
    HttpClientModule,
  ],
  providers: [
    AppSettingService,
    AppService,
    MapViewService,
    MenuBarService,
    ToolBarService,
    ControlViewService,
    DataViewService,
    ContentViewService,
    FooterService,
    MenuService,
    BaseMapService,
    ProjectService,
    AppCommandService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
