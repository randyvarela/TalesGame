import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento42Page } from './cuento4.2.page';

describe('Cuento42Page', () => {
  let component: Cuento42Page;
  let fixture: ComponentFixture<Cuento42Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento42Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
