import { Component } from '@angular/core';

@Component({
  selector: 'app-exam-schedule',
  templateUrl: './exam-schedule.component.html',
  styleUrl: './exam-schedule.component.css'
})


export class ExamScheduleComponent {
  columns: string[] = ['Subject', 'Marks', 'Teacher', 'Date', 'Start Time', 'End Time'];
  rows: any[] = [
    { subject: 'English', marks: 100, teacher: 'Abhi Shah', date: '10/06/21', startTime: '3:00pm', endTime: '5:00pm' },
    { subject: 'English', marks: 100, teacher: 'Abhi Shah', date: '10/06/21', startTime: '3:00pm', endTime: '5:00pm' },
    { subject: 'English', marks: 100, teacher: 'Abhi Shah', date: '10/06/21', startTime: '3:00pm', endTime: '5:00pm' },
    { subject: 'English', marks: 100, teacher: 'Abhi Shah', date: '10/06/21', startTime: '3:00pm', endTime: '5:00pm' },
    { subject: 'English', marks: 100, teacher: 'Abhi Shah', date: '10/06/21', startTime: '3:00pm', endTime: '5:00pm' }
  ];
}

