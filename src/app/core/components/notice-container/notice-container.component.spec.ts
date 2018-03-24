import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeContainerComponent } from './notice-container.component';

describe('NoticeContainerComponent', () => {
  let component: NoticeContainerComponent;
  let fixture: ComponentFixture<NoticeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
