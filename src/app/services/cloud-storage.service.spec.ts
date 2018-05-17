import { TestBed, inject } from '@angular/core/testing';

import { CloudStorageService } from './cloud-storage.service';

describe('CloudStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CloudStorageService]
    });
  });

  it('should be created', inject([CloudStorageService], (service: CloudStorageService) => {
    expect(service).toBeTruthy();
  }));
});
