import { TestBed, inject } from '@angular/core/testing';

import { ScenarioContentService } from './scenario-content.service';

describe('ScenarioContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScenarioContentService]
    });
  });

  it('should be created', inject([ScenarioContentService], (service: ScenarioContentService) => {
    expect(service).toBeTruthy();
  }));
});
