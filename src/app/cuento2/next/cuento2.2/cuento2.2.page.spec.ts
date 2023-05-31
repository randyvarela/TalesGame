import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento22Page } from './cuento2.2.page';

describe('Cuento22Page', () => {
  let component: Cuento22Page;
  let fixture: ComponentFixture<Cuento22Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento22Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
