import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento3Page } from './cuento3.page';

describe('Cuento3Page', () => {
  let component: Cuento3Page;
  let fixture: ComponentFixture<Cuento3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
