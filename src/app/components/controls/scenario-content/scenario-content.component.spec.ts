import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScenarioContentComponent } from './scenario-content.component';

describe('ScenarioContentComponent', () => {
  let component: ScenarioContentComponent;
  let fixture: ComponentFixture<ScenarioContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScenarioContentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
