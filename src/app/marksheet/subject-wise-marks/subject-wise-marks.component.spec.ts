import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectWiseMarksComponent } from './subject-wise-marks.component';

describe('SubjectWiseMarksComponent', () => {
  let component: SubjectWiseMarksComponent;
  let fixture: ComponentFixture<SubjectWiseMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectWiseMarksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectWiseMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
