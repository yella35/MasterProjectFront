import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDetailedComponent } from './location-detailed.component';

describe('LocationDetailedComponent', () => {
  let component: LocationDetailedComponent;
  let fixture: ComponentFixture<LocationDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
