import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenlayersComponent } from './openlayers/openlayers.component';
import { CesiumComponent } from './cesium/cesium.component';
import { OpenlayersService } from './openlayers.service';
import { CesiumService } from './cesium.service';
import { MapService } from './map.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OpenlayersComponent,
    CesiumComponent
  ],
  entryComponents: [ OpenlayersComponent, CesiumComponent ],
  providers:[
    OpenlayersService,
    CesiumService,
    MapService
  ]
})
export class MapModule { }
