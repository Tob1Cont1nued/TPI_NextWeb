import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodicalApproachComponent } from './methodical-approach.component';

describe('MethodicalApproachComponent', () => {
  let component: MethodicalApproachComponent;
  let fixture: ComponentFixture<MethodicalApproachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MethodicalApproachComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MethodicalApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});