import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento313Page } from './cuento3.1.3.page';

describe('Cuento313Page', () => {
  let component: Cuento313Page;
  let fixture: ComponentFixture<Cuento313Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento313Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
