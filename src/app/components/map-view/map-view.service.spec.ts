import { TestBed, inject } from '@angular/core/testing';

import { MapViewService } from './map-view.service';

describe('MapViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapViewService]
    });
  });

  it('should be created', inject([MapViewService], (service: MapViewService) => {
    expect(service).toBeTruthy();
  }));
});
