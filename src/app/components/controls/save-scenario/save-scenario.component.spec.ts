import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveScenarioComponent } from './save-scenario.component';

describe('SaveProjectComponent', () => {
  let component: SaveScenarioComponent;
  let fixture: ComponentFixture<SaveScenarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveScenarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
