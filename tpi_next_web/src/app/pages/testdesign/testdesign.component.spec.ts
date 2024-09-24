import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdesignComponent } from './testdesign.component';

describe('TestdesignComponent', () => {
  let component: TestdesignComponent;
  let fixture: ComponentFixture<TestdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestdesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
