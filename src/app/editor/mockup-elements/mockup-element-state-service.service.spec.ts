import { TestBed } from '@angular/core/testing';

import { MockupElementStateService } from './mockup-element-state.service';

describe('MockupElementStateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockupElementStateService = TestBed.get(MockupElementStateService);
    expect(service).toBeTruthy();
  });
});
