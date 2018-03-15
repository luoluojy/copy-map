import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionContainerComponent } from './region-container.component';

describe('RegionContainerComponent', () => {
  let component: RegionContainerComponent;
  let fixture: ComponentFixture<RegionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
