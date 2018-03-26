import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ViewPanelComponent } from './components/view-panel/view-panel.component';
import { MapBarComponent } from './components/map-bar/map-bar.component';
import { MainBarComponent } from './components/main-bar/main-bar.component';
import { MenuPanelComponent } from './components/menu-panel/menu-panel.component';
import { FooterInfoComponent } from './components/footer-info/footer-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewPanelComponent,
    MainBarComponent,
    MapBarComponent,
    MenuPanelComponent,
    FooterInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
