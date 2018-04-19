import { TestBed, inject } from '@angular/core/testing';

import { OpenScenarioService } from './open-scenario.service';

describe('OpenScenarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenScenarioService]
    });
  });

  it('should be created', inject([OpenScenarioService], (service: OpenScenarioService) => {
    expect(service).toBeTruthy();
  }));
});
