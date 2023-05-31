import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuento21Page } from './cuento2.1.page';

describe('Cuento21Page', () => {
  let component: Cuento21Page;
  let fixture: ComponentFixture<Cuento21Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuento21Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
