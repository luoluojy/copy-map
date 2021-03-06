import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenlayersComponent } from './openlayers/openlayers.component';
import { CesiumComponent } from './cesium/cesium.component';
import { OpenlayersService } from './openlayers/openlayers.service';
import { CesiumService } from './cesium/cesium.service';

/**
 *
 */
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
  ]
})
export class MapModule { }
