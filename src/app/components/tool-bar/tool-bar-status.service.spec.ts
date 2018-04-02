import { TestBed, inject } from '@angular/core/testing';

import { ToolBarStatusService } from './tool-bar-status.service';

describe('ToolBarStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToolBarStatusService]
    });
  });

  it('should be created', inject([ToolBarStatusService], (service: ToolBarStatusService) => {
    expect(service).toBeTruthy();
  }));
});
