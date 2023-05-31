import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento312Page } from './cuento3.1.2.page';

describe('Cuento312Page', () => {
  let component: Cuento312Page;
  let fixture: ComponentFixture<Cuento312Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento312Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
