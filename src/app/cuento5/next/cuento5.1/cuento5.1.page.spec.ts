import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento51Page } from './cuento5.1.page';

describe('Cuento51Page', () => {
  let component: Cuento51Page;
  let fixture: ComponentFixture<Cuento51Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento51Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
