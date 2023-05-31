import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento73Page } from './cuento7.3.page';

describe('Cuento73Page', () => {
  let component: Cuento73Page;
  let fixture: ComponentFixture<Cuento73Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento73Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
