import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TalePage } from './tale.page';

describe('TalePage', () => {
  let component: TalePage;
  let fixture: ComponentFixture<TalePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
