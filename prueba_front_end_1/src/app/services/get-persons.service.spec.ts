import { TestBed } from '@angular/core/testing';

import { GetPersonsService } from './get-persons.service';

describe('GetPersonsService', () => {
  let service: GetPersonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPersonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
