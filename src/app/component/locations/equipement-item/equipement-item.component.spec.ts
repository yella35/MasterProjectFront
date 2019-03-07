import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementItemComponent } from './equipement-item.component';

describe('EquipementItemComponent', () => {
  let component: EquipementItemComponent;
  let fixture: ComponentFixture<EquipementItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipementItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipementItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
