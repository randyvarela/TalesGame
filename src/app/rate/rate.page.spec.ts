import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatePage } from './rate.page';

describe('RatePage', () => {
  let component: RatePage;
  let fixture: ComponentFixture<RatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
