import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainScenarioComponent } from './maintain-scenario.component';

describe('MaintainScenarioComponent', () => {
  let component: MaintainScenarioComponent;
  let fixture: ComponentFixture<MaintainScenarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MaintainScenarioComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
