import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainProjectComponent } from './maintain-project.component';

describe('MaintainProjectComponent', () => {
  let component: MaintainProjectComponent;
  let fixture: ComponentFixture<MaintainProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
