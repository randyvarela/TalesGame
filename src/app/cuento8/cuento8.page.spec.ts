import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento8Page } from './cuento8.page';

describe('Cuento8Page', () => {
  let component: Cuento8Page;
  let fixture: ComponentFixture<Cuento8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
