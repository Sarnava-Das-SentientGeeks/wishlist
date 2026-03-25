import { TestBed } from '@angular/core/testing';

import { WishService } from './WishService';

describe('Wish', () => {
  let service: WishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
