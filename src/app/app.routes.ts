import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { YesComponent } from './components/yes/yes.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'yes', component: YesComponent },
  { path: '**', redirectTo: '' }
];
