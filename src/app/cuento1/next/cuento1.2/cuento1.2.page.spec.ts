import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento12Page } from './cuento1.2.page';

describe('Cuento12Page', () => {
  let component: Cuento12Page;
  let fixture: ComponentFixture<Cuento12Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
