import { TestBed, inject } from '@angular/core/testing';

import { ControlViewService } from './control-view.service';

describe('ControlViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControlViewService]
    });
  });

  it('should be created', inject([ControlViewService], (service: ControlViewService) => {
    expect(service).toBeTruthy();
  }));
});
