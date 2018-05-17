import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisTaskComponent } from './analysis-task.component';

describe('AnalysisTaskComponent', () => {
  let component: AnalysisTaskComponent;
  let fixture: ComponentFixture<AnalysisTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
