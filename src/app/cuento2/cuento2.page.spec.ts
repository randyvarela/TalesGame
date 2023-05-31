import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento2Page } from './cuento2.page';

describe('Cuento2Page', () => {
  let component: Cuento2Page;
  let fixture: ComponentFixture<Cuento2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
