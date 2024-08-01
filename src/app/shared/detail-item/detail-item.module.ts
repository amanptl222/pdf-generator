import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetailItemComponent } from './detail-item.component';


@NgModule({
    imports: [ CommonModule ],
    declarations: [ DetailItemComponent ],
    exports: [ DetailItemComponent, CommonModule ],
 })

 export class DetailItemModule { }
