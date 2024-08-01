import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { SubjectWiseMarksModule } from './subject-wise-marks/subject-wise-marks.module';
import { RemarksComponent } from './remarks/remarks.component';
import { FooterModule } from '../shared/footer/footer.module';
import { StudentDetailsModule } from '../shared/student-details/student-details.module';

@Component({
  selector: 'app-marksheet',
  standalone: true,
  imports: [HeaderComponent,StudentDetailsModule,SubjectWiseMarksModule, FooterModule, RemarksComponent],
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})
export class MarksheetComponent {  }

