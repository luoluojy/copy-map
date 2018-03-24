import { TestBed, inject } from '@angular/core/testing';

import { InitCesiumService } from './init-cesium.service';

describe('InitCesiumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitCesiumService]
    });
  });

  it('should be created', inject([InitCesiumService], (service: InitCesiumService) => {
    expect(service).toBeTruthy();
  }));
});
