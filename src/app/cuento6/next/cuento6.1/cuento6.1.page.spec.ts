import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento61Page } from './cuento6.1.page';

describe('Cuento61Page', () => {
  let component: Cuento61Page;
  let fixture: ComponentFixture<Cuento61Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento61Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
