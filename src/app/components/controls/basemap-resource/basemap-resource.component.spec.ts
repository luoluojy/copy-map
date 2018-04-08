import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasemapResourceComponent } from './basemap-resource.component';

describe('BasemapResourceComponent', () => {
  let component: BasemapResourceComponent;
  let fixture: ComponentFixture<BasemapResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasemapResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasemapResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
