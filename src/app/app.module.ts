import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToolBarModule } from './components/tool-bar/tool-bar.module';

import { AppComponent } from './app.component';
import { DataViewComponent } from './components/data-view/data-view.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { ActionComponent } from './components/action/action.component';
import { TopComponent } from './components/top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    DataViewComponent,
    MenuBarComponent,
    ToolBarComponent,
    MenuComponent,
    FooterComponent,
    ActionComponent,
    MapViewComponent,
    TopComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToolBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
