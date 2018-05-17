import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenScenarioComponent } from './open-scenario.component';

describe('OpenScenarioComponent', () => {
  let component: OpenScenarioComponent;
  let fixture: ComponentFixture<OpenScenarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpenScenarioComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
