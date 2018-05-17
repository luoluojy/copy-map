import { TestBed, inject } from '@angular/core/testing';

import { SaveScenarioService } from './save-scenario.service';

describe('SaveProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveScenarioService]
    });
  });

  it('should be created', inject([SaveScenarioService], (service: SaveScenarioService) => {
    expect(service).toBeTruthy();
  }));
});
