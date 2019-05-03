import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondNavigationComponent } from './second-navigation.component';

describe('SecondNavigationComponent', () => {
  let component: SecondNavigationComponent;
  let fixture: ComponentFixture<SecondNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
