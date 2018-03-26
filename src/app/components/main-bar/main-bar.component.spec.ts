import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBarComponent } from './main-bar.component';

describe('MainBarComponent', () => {
  let component: MainBarComponent;
  let fixture: ComponentFixture<MainBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
