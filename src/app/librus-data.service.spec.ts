import { TestBed, inject } from '@angular/core/testing';

import { LibrusDataService } from './librus-data.service';

describe('LibrusDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibrusDataService]
    });
  });

  it('should ...', inject([LibrusDataService], (service: LibrusDataService) => {
    expect(service).toBeTruthy();
  }));
});
