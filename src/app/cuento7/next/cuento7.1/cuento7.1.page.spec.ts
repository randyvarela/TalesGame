import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento71Page } from './cuento7.1.page';

describe('Cuento71Page', () => {
  let component: Cuento71Page;
  let fixture: ComponentFixture<Cuento71Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento71Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
