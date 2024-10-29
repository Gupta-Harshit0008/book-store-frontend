import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FussionComponent } from './fussion.component';

describe('FussionComponent', () => {
  let component: FussionComponent;
  let fixture: ComponentFixture<FussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FussionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
