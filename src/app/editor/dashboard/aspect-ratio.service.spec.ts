import { TestBed } from '@angular/core/testing';

import { AspectRatioService } from './aspect-ratio.service';

describe('AspectRatioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AspectRatioService = TestBed.get(AspectRatioService);
    expect(service).toBeTruthy();
  });
});
