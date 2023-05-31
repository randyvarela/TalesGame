import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento6Page } from './cuento6.page';

describe('Cuento6Page', () => {
  let component: Cuento6Page;
  let fixture: ComponentFixture<Cuento6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
