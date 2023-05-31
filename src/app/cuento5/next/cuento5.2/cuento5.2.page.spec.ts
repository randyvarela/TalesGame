import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento52Page } from './cuento5.2.page';

describe('Cuento52Page', () => {
  let component: Cuento52Page;
  let fixture: ComponentFixture<Cuento52Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento52Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
