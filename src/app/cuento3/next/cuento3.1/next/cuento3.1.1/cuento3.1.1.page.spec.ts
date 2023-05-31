import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento311Page } from './cuento3.1.1.page';

describe('Cuento311Page', () => {
  let component: Cuento311Page;
  let fixture: ComponentFixture<Cuento311Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento311Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
