import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento5Page } from './cuento5.page';

describe('Cuento5Page', () => {
  let component: Cuento5Page;
  let fixture: ComponentFixture<Cuento5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
