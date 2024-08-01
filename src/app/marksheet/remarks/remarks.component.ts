import { Component } from '@angular/core';
import { ExamDetailsComponent } from "../../admit-card/exam-details/exam-details.component";
import { ItemModule } from '../../shared/item/item.module';

@Component({
  selector: 'app-remarks',
  standalone: true,
  imports: [ExamDetailsComponent, ItemModule],
  templateUrl: './remarks.component.html',
  styleUrl: './remarks.component.css'
})
export class RemarksComponent {

}
