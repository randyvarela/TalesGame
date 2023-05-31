import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento32Page } from './cuento3.2.page';

describe('Cuento32Page', () => {
  let component: Cuento32Page;
  let fixture: ComponentFixture<Cuento32Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
