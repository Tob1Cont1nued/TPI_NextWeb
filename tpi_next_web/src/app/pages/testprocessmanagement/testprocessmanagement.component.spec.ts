import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprocessmanagementComponent } from './testprocessmanagement.component';

describe('TestprocessmanagementComponent', () => {
  let component: TestprocessmanagementComponent;
  let fixture: ComponentFixture<TestprocessmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestprocessmanagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestprocessmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
