import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento1Page } from './cuento1.page';

describe('Cuento1Page', () => {
  let component: Cuento1Page;
  let fixture: ComponentFixture<Cuento1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
