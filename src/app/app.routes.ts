import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Tasks } from './components/tasks/tasks';

export const routes: Routes = [
  { path: '', component: Tasks },
  { path: 'about', component: About },
];
