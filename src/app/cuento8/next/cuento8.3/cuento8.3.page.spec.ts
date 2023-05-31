import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento83Page } from './cuento8.3.page';

describe('Cuento83Page', () => {
  let component: Cuento83Page;
  let fixture: ComponentFixture<Cuento83Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento83Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
