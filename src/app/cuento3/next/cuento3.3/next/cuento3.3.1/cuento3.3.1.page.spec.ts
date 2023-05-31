import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento331Page } from './cuento3.3.1.page';

describe('Cuento331Page', () => {
  let component: Cuento331Page;
  let fixture: ComponentFixture<Cuento331Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento331Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
