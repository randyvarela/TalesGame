import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento333Page } from './cuento3.3.3.page';

describe('Cuento333Page', () => {
  let component: Cuento333Page;
  let fixture: ComponentFixture<Cuento333Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento333Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
