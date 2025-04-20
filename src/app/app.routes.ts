import { Routes } from '@angular/router';
import { UnoComponent } from './uno/uno.component';
import { HomeComponent } from './home/home.component';
import { TrucoComponent } from './truco/truco.component';
import { ChinchonComponent } from './chinchon/chinchon.component';
import { EscobaComponent } from './escoba/escoba.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige a 'uno' por defecto
    { path: 'Uno', component: UnoComponent },
    { path: 'Truco', component: TrucoComponent },
    { path: 'Chinchon', component: ChinchonComponent },
    { path: 'Escoba', component: EscobaComponent },
    {path: 'home', component: HomeComponent}
];
