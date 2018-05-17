import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoTasksComponent } from './repo-tasks.component';

describe('RepoTasksComponent', () => {
  let component: RepoTasksComponent;
  let fixture: ComponentFixture<RepoTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
