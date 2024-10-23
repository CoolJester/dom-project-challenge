import { Routes } from '@angular/router';
import { CounterComponent } from './apps/counter/counter.component';
import { AppsComponent } from './apps/apps.component';

export const routes: Routes = [
    {path: '', component: AppsComponent},
    {path: 'counter', component: CounterComponent}
];
