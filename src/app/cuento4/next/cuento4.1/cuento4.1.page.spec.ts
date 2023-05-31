import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento41Page } from './cuento4.1.page';

describe('Cuento41Page', () => {
  let component: Cuento41Page;
  let fixture: ComponentFixture<Cuento41Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento41Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
