import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';

export const routes: Routes = [
  {
      path: 'players',
      redirectTo: '/players',
      pathMatch: 'full',
  },
  {
      path: '',
      component: HomeComponent,
  },
];
