import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento322Page } from './cuento3.2.2.page';

describe('Cuento322Page', () => {
  let component: Cuento322Page;
  let fixture: ComponentFixture<Cuento322Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento322Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
