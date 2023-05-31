import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento31Page } from './cuento3.1.page';

describe('Cuento31Page', () => {
  let component: Cuento31Page;
  let fixture: ComponentFixture<Cuento31Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento31Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
