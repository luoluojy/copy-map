import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DataViewComponent } from './components/data-view/data-view.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapComponent } from './components/map/map.component';
import { ActionComponent } from './components/action/action.component';
import { TopComponent } from './components/top/top.component';
import { RegionsComponent } from './components/tool-bar/regions/regions.component';
import { MapsComponent } from './components/tool-bar/maps/maps.component';
import { ToolsComponent } from './components/tool-bar/tools/tools.component';
import { NoticeComponent } from './components/tool-bar/notice/notice.component';
import { UserComponent } from './components/tool-bar/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    DataViewComponent,
    MenuBarComponent,
    ToolBarComponent,
    MenuComponent,
    FooterComponent,
    ActionComponent,
    MapComponent,
    TopComponent,
    RegionsComponent,
    MapsComponent,
    ToolsComponent,
    NoticeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
