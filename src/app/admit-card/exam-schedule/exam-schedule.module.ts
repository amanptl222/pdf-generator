import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExamScheduleComponent } from './exam-schedule.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ExamScheduleComponent },
    ])
  ],
  exports:[
    ExamScheduleComponent
  ],
  declarations: [
    ExamScheduleComponent 
  ],
})
export class ExamScheduleModule { }