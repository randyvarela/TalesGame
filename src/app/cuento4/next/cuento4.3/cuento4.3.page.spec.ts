import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento43Page } from './cuento4.3.page';

describe('Cuento43Page', () => {
  let component: Cuento43Page;
  let fixture: ComponentFixture<Cuento43Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento43Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
