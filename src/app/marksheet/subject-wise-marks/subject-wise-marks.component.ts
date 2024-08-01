import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-wise-marks',
  templateUrl: './subject-wise-marks.component.html',
  styleUrl: './subject-wise-marks.component.css'
})
export class SubjectWiseMarksComponent {
  columns: string[] = ['Subject', 'Teacher','Total marks', 'Obtained', 'Percentage'];
  rows: any[] = [
    { subject: 'English', marks: 100, teacher: 'Abhi Shah', obtained: 50, percentage: '50%' },
    { subject: 'Maths', marks: 100, teacher: 'Abhi Shah', obtained: 60, percentage: '60%' },
    { subject: 'Science', marks: 100, teacher: 'Abhi Shah', obtained: 70, percentage: '70%' },
    { subject: 'Computer', marks: 100, teacher: 'Abhi Shah', obtained: 80, percentage: '80%' },
    { subject: 'Carft', marks: 100, teacher: 'Abhi Shah', obtained: 90, percentage: '90%' },
  ];
}
