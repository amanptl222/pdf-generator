import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() heading: string = '';
  @Input() subheading: string = '';
  @Input() color: string = '';
}
