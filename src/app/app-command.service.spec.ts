import { TestBed, inject } from '@angular/core/testing';

import { AppCommandService } from './app-command.service';

describe('AppCommandService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppCommandService]
    });
  });

  it('should be created', inject([AppCommandService], (service: AppCommandService) => {
    expect(service).toBeTruthy();
  }));
});
