import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsDisplayComponent } from './book-details-display.component';

describe('BookDetailsDisplayComponent', () => {
  let component: BookDetailsDisplayComponent;
  let fixture: ComponentFixture<BookDetailsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDetailsDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDetailsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
