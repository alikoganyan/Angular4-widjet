import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TownSelectionComponent } from './town-selection.component';

describe('TownSelectionComponent', () => {
  let component: TownSelectionComponent;
  let fixture: ComponentFixture<TownSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TownSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TownSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
