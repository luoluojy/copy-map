import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatListModule } from "@angular/material/list";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppCommandService } from "./app-command.service";
import { AppComponent } from "./app.component";
import { AppService } from "./app.service";
import { ContentViewComponent } from "./components/content-view/content-view.component";
import { ContentViewService } from "./components/content-view/content-view.service";
import { ControlViewComponent } from "./components/control-view/control-view.component";
import { ControlViewDirective } from "./components/control-view/control-view.directive";
import { ControlViewService } from "./components/control-view/control-view.service";
import { ControlModule } from "./components/controls/control.module";
import { DataViewComponent } from "./components/data-view/data-view.component";
import { DataViewService } from "./components/data-view/data-view.service";
import { FooterComponent } from "./components/footer/footer.component";
import { FooterService } from "./components/footer/footer.service";
import { MapViewComponent } from "./components/map-view/map-view.component";
import { MapViewDirective } from "./components/map-view/map-view.directive";
import { MapViewService } from "./components/map-view/map-view.service";
import { MapModule } from "./components/map/map.module";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { MenuBarService } from "./components/menu-bar/menu-bar.service";
import { MenuComponent } from "./components/menu/menu.component";
import { MenuService } from "./components/menu/menu.service";
import { ToolBarComponent } from "./components/tool-bar/tool-bar.component";
import { ToolBarModule } from "./components/tool-bar/tool-bar.module";
import { ToolBarService } from "./components/tool-bar/tool-bar.service";
import { CustomMaterialModule } from "./custom-material.module";
import { AppSettingsService } from "./services/app-settings.service";
import { BaseMapService } from "./services/base-map.service";
import { CloudStorageAPIsService } from './services/cloud-storage-apis.service';
import { CloudStorageService } from './services/cloud-storage.service';
import { ScenarioService } from "./services/scenario.service";
import { Workspace } from "./services/workspace";






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
    MapViewDirective,
    ControlViewDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    ToolBarModule,
    ControlModule,
    MapModule,
    CustomMaterialModule
  ],
  providers: [
    AppSettingsService,
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
    ScenarioService,
    CloudStorageService,
    CloudStorageAPIsService,
    Workspace,
    AppCommandService
  ],
  entryComponents: [MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
