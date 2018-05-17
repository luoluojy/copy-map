import { TestBed, inject } from '@angular/core/testing';

import { ContentViewService } from './content-view.service';

describe('ContentViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentViewService]
    });
  });

  it('should be created', inject([ContentViewService], (service: ContentViewService) => {
    expect(service).toBeTruthy();
  }));
});
