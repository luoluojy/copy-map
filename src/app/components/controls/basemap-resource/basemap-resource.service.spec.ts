import { TestBed, inject } from '@angular/core/testing';

import { BasemapResourceService } from './basemap-resource.service';

describe('BasemapResourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasemapResourceService]
    });
  });

  it('should be created', inject([BasemapResourceService], (service: BasemapResourceService) => {
    expect(service).toBeTruthy();
  }));
});
