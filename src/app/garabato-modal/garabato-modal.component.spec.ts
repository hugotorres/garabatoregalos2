import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarabatoModalComponent } from './garabato-modal.component';

describe('GarabatoModalComponent', () => {
  let component: GarabatoModalComponent;
  let fixture: ComponentFixture<GarabatoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarabatoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarabatoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
