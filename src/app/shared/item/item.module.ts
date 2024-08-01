import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemComponent } from './item.component';


@NgModule({
    imports: [ CommonModule ],
    declarations: [ ItemComponent ],
    exports: [ ItemComponent, CommonModule ],
 })

 export class ItemModule { }
