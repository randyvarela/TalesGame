import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento63Page } from './cuento6.3.page';

describe('Cuento63Page', () => {
  let component: Cuento63Page;
  let fixture: ComponentFixture<Cuento63Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento63Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
