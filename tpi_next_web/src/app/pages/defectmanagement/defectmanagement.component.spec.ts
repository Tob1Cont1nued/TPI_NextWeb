import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectmanagementComponent } from './defectmanagement.component';

describe('EngagementComponent', () => {
  let component: DefectmanagementComponent;
  let fixture: ComponentFixture<DefectmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefectmanagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefectmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
