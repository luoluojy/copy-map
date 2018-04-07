import { TestBed, inject } from '@angular/core/testing';

import { OpenProjectService } from './open-project.service';

describe('OpenProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenProjectService]
    });
  });

  it('should be created', inject([OpenProjectService], (service: OpenProjectService) => {
    expect(service).toBeTruthy();
  }));
});
