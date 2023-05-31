import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento13Page } from './cuento1.3.page';

describe('Cuento13Page', () => {
  let component: Cuento13Page;
  let fixture: ComponentFixture<Cuento13Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
