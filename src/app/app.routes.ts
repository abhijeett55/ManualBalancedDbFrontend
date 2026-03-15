import { Routes } from '@angular/router';
import { Dashboard } from './_components/dashboard/dashboard';
import { Files } from './_components/files/files';
import { Uploads } from './_components/uploads/uploads';
import { Insights } from './_components/insights/insights';
import { Docs } from './_components/docs/docs';
import { AdminConsole } from './_components/admin-console/admin-console';
import { Home } from './_components/home/home';


export const routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'dashboard', component: Dashboard },
    { path: 'files', component: Files },
    { path: 'uploads', component: Uploads },
    { path: 'insights', component: Insights },
    { path: 'docs', component: Docs },
    { path: 'home', component: Home },
    { path: 'admin-console', component: AdminConsole },
    { path: '**', redirectTo: '' },

];
