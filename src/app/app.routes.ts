import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';

export const routes: Routes = [
  {
      path: 'destinations',
      redirectTo: '/destinations',
      pathMatch: 'full',
  },
  {
      path: '',
      component: HomeComponent,
  },
];
