import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { ExamDetailsComponent } from './exam-details/exam-details.component';
import { ExamScheduleModule } from './exam-schedule/exam-schedule.module';
import { FooterModule } from '../shared/footer/footer.module';
import { StudentDetailsModule } from '../shared/student-details/student-details.module';

@Component({
  selector: 'app-admit-card',
  standalone: true,
  imports: [HeaderComponent,StudentDetailsModule,ExamDetailsComponent, ExamScheduleModule, FooterModule],
  templateUrl: './admit-card.component.html',
  styleUrls: ['./admit-card.component.css']
})
export class AdmitCardComponent { }
