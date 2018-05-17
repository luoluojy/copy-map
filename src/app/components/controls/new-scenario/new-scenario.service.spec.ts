import { TestBed, inject } from '@angular/core/testing';

import { NewScenarioService } from './new-scenario.service';

describe('NewScenarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewScenarioService]
    });
  });

  it('should be created', inject([NewScenarioService], (service: NewScenarioService) => {
    expect(service).toBeTruthy();
  }));
});
