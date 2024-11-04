import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestorganisationComponent } from './testorganisation.component';

describe('TestorganisationComponent', () => {
  let component: TestorganisationComponent;
  let fixture: ComponentFixture<TestorganisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestorganisationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestorganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
