import { TestBed, inject } from '@angular/core/testing';

import { BaseMapService } from './base-map.service';

describe('BaseMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseMapService]
    });
  });

  it('should be created', inject([BaseMapService], (service: BaseMapService) => {
    expect(service).toBeTruthy();
  }));
});
