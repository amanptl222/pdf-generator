// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { AdmitCardComponent } from './admit-card/admit-card.component';

export const routes: Routes = [
  { path: 'marksheet', component: MarksheetComponent },
  { path: 'admit-card', component: AdmitCardComponent },
  { path: '', redirectTo: '/marksheet', pathMatch: 'full' }
];
