import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalismComponent } from './professionalism.component';

describe('ProfessionalismComponent', () => {
  let component: ProfessionalismComponent;
  let fixture: ComponentFixture<ProfessionalismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalismComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessionalismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
