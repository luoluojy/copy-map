import { TestBed, inject } from '@angular/core/testing';

import { DataResourceService } from './data-resource.service';

describe('DataResourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataResourceService]
    });
  });

  it('should be created', inject([DataResourceService], (service: DataResourceService) => {
    expect(service).toBeTruthy();
  }));
});
