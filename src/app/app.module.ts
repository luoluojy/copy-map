import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToolBarModule } from './components/tool-bar/tool-bar.module';
import { ControlModule } from './components/controls/control.module';

import { AppComponent } from './app.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ControlViewComponent } from './components/control-view/control-view.component';
import { DataViewComponent } from './components/data-view/data-view.component';
import { TopComponent } from './components/top/top.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';

import { ModalComponent } from './components/modal/modal.component';

import { AppSettingService } from './app-setting.service';

/**
 *
 */
@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    ToolBarComponent,
    MenuBarComponent,
    ControlViewComponent,
    DataViewComponent,
    TopComponent,
    FooterComponent,
    MenuComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToolBarModule,
    ControlModule
  ],
  providers: [AppSettingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
