import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {CvComponent} from './cv/cv.component';
import {ContactComponent} from './contact/contact.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', component: CvComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: '' }
];
