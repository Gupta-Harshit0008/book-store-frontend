import { TestBed } from '@angular/core/testing';

import { BooksDisplayService } from './books-display.service';

describe('BooksDisplayService', () => {
  let service: BooksDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
