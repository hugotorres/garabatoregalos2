import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GNavigationComponent } from './g-navigation.component';

describe('GNavigationComponent', () => {
  let component: GNavigationComponent;
  let fixture: ComponentFixture<GNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
