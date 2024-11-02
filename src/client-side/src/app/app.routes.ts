import { Routes } from '@angular/router';
import { CounterComponent } from './apps/counter/counter.component';
import { AppsComponent } from './apps/apps.component';
import { DadjokesComponent } from './apps/dadjokes/dadjokes.component';
import { FormComponent } from './apps/form/form.component';

export const routes: Routes = [
    {path: '', component: AppsComponent},
    {path: 'counter', component: CounterComponent},
    {path: 'dadjokes', component: DadjokesComponent},
    {path: 'form', component: FormComponent}
];
