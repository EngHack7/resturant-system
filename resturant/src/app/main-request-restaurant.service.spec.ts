import { TestBed } from '@angular/core/testing';

import { MainRequestRestaurantService } from './main-request-restaurant.service';

describe('MainRequestRestaurantService', () => {
  let service: MainRequestRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainRequestRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
