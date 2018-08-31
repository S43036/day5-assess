import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpEntryComponent } from './lp-entry.component';

describe('LpEntryComponent', () => {
  let component: LpEntryComponent;
  let fixture: ComponentFixture<LpEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
