import { TestBed, inject } from '@angular/core/testing';

import { ProjectContentService } from './project-content.service';

describe('ProjectContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectContentService]
    });
  });

  it('should be created', inject([ProjectContentService], (service: ProjectContentService) => {
    expect(service).toBeTruthy();
  }));
});
