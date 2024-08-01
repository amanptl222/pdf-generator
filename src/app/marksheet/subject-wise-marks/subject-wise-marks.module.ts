import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SubjectWiseMarksComponent } from './subject-wise-marks.component'; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SubjectWiseMarksComponent },
    ])
  ],
  exports:[
    SubjectWiseMarksComponent
  ],
  declarations: [
    SubjectWiseMarksComponent 
  ],
})
export class SubjectWiseMarksModule { }