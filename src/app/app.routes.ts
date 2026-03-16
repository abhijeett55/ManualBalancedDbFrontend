import { Routes } from '@angular/router';
import { Dashboard } from './_components/dashboard/dashboard';
import { Files } from './_components/files/files';
import { Uploads } from './_components/uploads/uploads';
import { Insights } from './_components/insights/insights';
import { Docs } from './_components/docs/docs';
import { AdminConsole } from './_components/admin-console/admin-console';
import { Home } from './_components/home/home';
import { Trash } from './_components/trash/trash';
import { Profile } from './_components/profile/profile';
import { Starred } from './_components/starred/starred';
import { Settings } from './_components/settings/settings';
import { Partition } from './_components/partition/partition';

export const routes: Routes = [
  { path: '', component: Dashboard },
  {
    path: '',
    component: Home,
    children: [
      { path: 'files', component: Files },
      { path: 'partition', component: Partition },
      { path: 'uploads', component: Uploads },
      { path: 'insights', component: Insights },
      { path: 'starred', component: Starred },
      { path: 'profile', component: Profile },
      { path: 'trash', component: Trash },
      { path: 'settings', component: Settings }
    ]
  },
    { path: 'dashboard', component: Dashboard },
    { path: 'docs', component: Docs },
    { path: 'home', component: Home },
    { path: 'admin-console', component: AdminConsole },
    { path: '**', redirectTo: '' }
    
];
