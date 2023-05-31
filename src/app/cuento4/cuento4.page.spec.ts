import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento4Page } from './cuento4.page';

describe('Cuento4Page', () => {
  let component: Cuento4Page;
  let fixture: ComponentFixture<Cuento4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
