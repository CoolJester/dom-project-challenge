import { Routes } from '@angular/router';
import { CounterComponent } from './apps/counter/counter.component';
import { AppsComponent } from './apps/apps.component';
import { DadjokesComponent } from './apps/dadjokes/dadjokes.component';
import { FormComponent } from './apps/form/form.component';
import { RandomuserComponent } from './apps/randomuser/randomuser.component';
import { MorseComponent } from './apps/morse/morse.component';
import { DynamicAlertComponent } from './apps/dynamic-alert/dynamic-alert.component';
import { SpaceNewsComponent } from './apps/space-news/space-news.component';
import { ResizableComponent } from './apps/resizable/resizable.component';

export const routes: Routes = [
    {path: '', component: AppsComponent},
    {path: 'counter', component: CounterComponent},
    {path: 'dadjokes', component: DadjokesComponent},
    {path: 'form', component: FormComponent},
    {path: 'random-user', component: RandomuserComponent},
    {path: 'morse-code', component: MorseComponent},
    {path: 'dynamic-alert', component: DynamicAlertComponent},
    {path: 'space-flight-news', component: SpaceNewsComponent},
    {path: 'resizable', component: ResizableComponent},
    {path: '**', redirectTo: ''}
];
