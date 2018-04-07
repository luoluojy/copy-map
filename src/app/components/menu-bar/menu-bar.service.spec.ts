import { TestBed, inject } from '@angular/core/testing';

import { MenuBarService } from './menu-bar.service';

describe('MenuBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuBarService]
    });
  });

  it('should be created', inject([MenuBarService], (service: MenuBarService) => {
    expect(service).toBeTruthy();
  }));
});
