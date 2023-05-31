import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento321Page } from './cuento3.2.1.page';

describe('Cuento321Page', () => {
  let component: Cuento321Page;
  let fixture: ComponentFixture<Cuento321Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento321Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
