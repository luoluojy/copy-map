import { TestBed, inject } from '@angular/core/testing';

import { MaintainProjectService } from './maintain-project.service';

describe('MaintainProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaintainProjectService]
    });
  });

  it('should be created', inject([MaintainProjectService], (service: MaintainProjectService) => {
    expect(service).toBeTruthy();
  }));
});
