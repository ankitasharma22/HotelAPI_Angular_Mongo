import { TestBed, inject } from '@angular/core/testing';
import { HoteltestService } from './get-hotels.service';

describe('GetHotelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HoteltestService]
    });
  });

  /*it('should be created', inject([ HoteltestService], (service:  HoteltestService) => {
    expect(service).toBeTruthy();
  }));*/
});
