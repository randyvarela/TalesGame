import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento7Page } from './cuento7.page';

describe('Cuento7Page', () => {
  let component: Cuento7Page;
  let fixture: ComponentFixture<Cuento7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
