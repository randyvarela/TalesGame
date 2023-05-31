import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento81Page } from './cuento8.1.page';

describe('Cuento81Page', () => {
  let component: Cuento81Page;
  let fixture: ComponentFixture<Cuento81Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento81Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
