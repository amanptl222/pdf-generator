import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StudentDetailsComponent } from './student-details.component';
import { DetailItemModule } from '../detail-item/detail-item.module';


@NgModule({
    imports: [ CommonModule, DetailItemModule ],
    declarations: [ StudentDetailsComponent ],
    exports: [ StudentDetailsComponent, CommonModule ],
 })

 export class StudentDetailsModule { }
