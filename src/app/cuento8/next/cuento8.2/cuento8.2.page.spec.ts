import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento82Page } from './cuento8.2.page';

describe('Cuento82Page', () => {
  let component: Cuento82Page;
  let fixture: ComponentFixture<Cuento82Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento82Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
