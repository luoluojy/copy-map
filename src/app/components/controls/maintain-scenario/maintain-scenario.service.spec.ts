import { TestBed, inject } from '@angular/core/testing';

import { MaintainScenarioService } from './maintain-scenario.service';

describe('MaintainScenarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaintainScenarioService]
    });
  });

  it('should be created', inject([MaintainScenarioService], (service: MaintainScenarioService) => {
    expect(service).toBeTruthy();
  }));
});
