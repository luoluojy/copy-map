import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBarComponent } from './map-bar.component';

describe('MapBarComponent', () => {
  let component: MapBarComponent;
  let fixture: ComponentFixture<MapBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
