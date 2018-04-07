import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataResourceComponent } from './data-resource.component';

describe('DataResourceComponent', () => {
  let component: DataResourceComponent;
  let fixture: ComponentFixture<DataResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
