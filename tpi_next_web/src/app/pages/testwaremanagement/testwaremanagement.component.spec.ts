import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestwaremanagementComponent } from './testwaremanagement.component';

describe('TestwaremanagementComponent', () => {
  let component: TestwaremanagementComponent;
  let fixture: ComponentFixture<TestwaremanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestwaremanagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestwaremanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
