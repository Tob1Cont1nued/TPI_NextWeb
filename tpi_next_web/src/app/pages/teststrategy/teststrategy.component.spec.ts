import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeststrategyComponent } from './teststrategy.component';

describe('TeststrategyComponent', () => {
  let component: TeststrategyComponent;
  let fixture: ComponentFixture<TeststrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeststrategyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeststrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
