import { TestBed, inject } from '@angular/core/testing';

import { ToolBarService } from './tool-bar.service';

describe('ToolBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToolBarService]
    });
  });

  it('should be created', inject([ToolBarService], (service: ToolBarService) => {
    expect(service).toBeTruthy();
  }));
});
