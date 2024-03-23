import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkLocationsComponent } from './work-locations.component';

describe('WorkLocationsComponent', () => {
  let component: WorkLocationsComponent;
  let fixture: ComponentFixture<WorkLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkLocationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
