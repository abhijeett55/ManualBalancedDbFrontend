import { Routes } from '@angular/router';
import { Header } from './_components/header/header';
import { Dashboard } from './_components/dashboard/dashboard';
import { Footer } from './_components/footer/footer';

export const routes: Routes = [
    { path: 'dashboard', component: Dashboard },
    { path: '**', redirectTo: '/dashboard' }

];
