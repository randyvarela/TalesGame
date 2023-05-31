import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento72Page } from './cuento7.2.page';

describe('Cuento72Page', () => {
  let component: Cuento72Page;
  let fixture: ComponentFixture<Cuento72Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento72Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
