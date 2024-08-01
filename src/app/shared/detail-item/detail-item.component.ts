import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent {
  @Input() logo: string = '';
  @Input() heading: string = '';
  @Input() subheading: string = '';
}
