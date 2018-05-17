import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatListModule } from "@angular/material/list";

import { ToolBarModule } from "./components/tool-bar/tool-bar.module";
import { ControlModule } from "./components/controls/control.module";
import { MapModule } from "./components/map/map.module";

import { CustomMaterialModule } from "./custom-material.module";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MapViewComponent } from "./components/map-view/map-view.component";
import { ToolBarComponent } from "./components/tool-bar/tool-bar.component";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { ControlViewComponent } from "./components/control-view/control-view.component";
import { DataViewComponent } from "./components/data-view/data-view.component";
import { ContentViewComponent } from "./components/content-view/content-view.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MenuComponent } from "./components/menu/menu.component";

import { ControlViewDirective } from "./components/control-view/control-view.directive";
import { MapViewDirective } from "./components/map-view/map-view.directive";

import { AppService } from "./app.service";
import { AppCommandService } from "./app-command.service";
import { MapViewService } from "./components/map-view/map-view.service";
import { MenuBarService } from "./components/menu-bar/menu-bar.service";
import { ToolBarService } from "./components/tool-bar/tool-bar.service";
import { DataViewService } from "./components/data-view/data-view.service";
import { ContentViewService } from "./components/content-view/content-view.service";
import { FooterService } from "./components/footer/footer.service";
import { MenuService } from "./components/menu/menu.service";
import { ControlViewService } from "./components/control-view/control-view.service";
import { AppSettingsService } from "./services/app-settings.service";
import { BaseMapService } from "./services/base-map.service";
import { ScenarioService } from "./services/scenario.service";

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
    AppCommandService
  ],
  entryComponents: [MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
