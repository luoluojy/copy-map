import { TestBed, inject } from '@angular/core/testing';

import { CesiumService } from './cesium.service';

describe('CesiumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CesiumService]
    });
  });

  it('should be created', inject([CesiumService], (service: CesiumService) => {
    expect(service).toBeTruthy();
  }));
});
