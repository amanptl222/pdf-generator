import { Component } from '@angular/core';
import { ItemModule } from '../../shared/item/item.module';

@Component({
  selector: 'app-exam-details',
  standalone: true,
  imports: [ItemModule],
  templateUrl: './exam-details.component.html',
  styleUrl: './exam-details.component.css'
})
export class ExamDetailsComponent {

}
