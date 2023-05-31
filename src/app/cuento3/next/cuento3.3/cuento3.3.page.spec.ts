import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento33Page } from './cuento3.3.page';

describe('Cuento33Page', () => {
  let component: Cuento33Page;
  let fixture: ComponentFixture<Cuento33Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento33Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
