import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento11Page } from './cuento1.1.page';

describe('Cuento11Page', () => {
  let component: Cuento11Page;
  let fixture: ComponentFixture<Cuento11Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
