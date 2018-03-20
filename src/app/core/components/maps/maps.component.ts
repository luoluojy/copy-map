import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { AppState } from '../../../common/reducer';
import * as OpenActions from '../../../common/action';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }

  

  initMapBarClick(){
    let mapBars = document.getElementsByClassName('map-bar');
    let regions:HTMLElement=<HTMLElement>mapBars[0];
    let maps:HTMLElement = <HTMLElement>mapBars[1];
    let tools:HTMLElement = <HTMLElement>mapBars[2];
    
    regions.addEventListener('click',()=>{
      this.store.dispatch(new OpenActions.OpenRegionContainerAction())
    })
  }
}
