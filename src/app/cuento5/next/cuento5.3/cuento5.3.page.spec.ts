import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento53Page } from './cuento5.3.page';

describe('Cuento53Page', () => {
  let component: Cuento53Page;
  let fixture: ComponentFixture<Cuento53Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento53Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
