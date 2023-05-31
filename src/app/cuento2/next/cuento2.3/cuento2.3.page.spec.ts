import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento23Page } from './cuento2.3.page';

describe('Cuento23Page', () => {
  let component: Cuento23Page;
  let fixture: ComponentFixture<Cuento23Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento23Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
