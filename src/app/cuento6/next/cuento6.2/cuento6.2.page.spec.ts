import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento62Page } from './cuento6.2.page';

describe('Cuento62Page', () => {
  let component: Cuento62Page;
  let fixture: ComponentFixture<Cuento62Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento62Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
