import { Routes } from '@angular/router';

import { DestinationsComponent } from '@src/app/travel/destinations/destinations.component';
import { DestinationDetailComponent } from '@src/app/travel/destination-detail/destination-detail.component';
import { DestinationService } from '@src/app/travel/destination.service';

export const componentDeclarations: any[] = [
  DestinationsComponent,
  DestinationDetailComponent
];

export const providerDeclarations: any[] = [
  DestinationService
];

export const routes: Routes = [
  { path: 'destinations', component: DestinationsComponent },
  { path: 'destination/:id', component: DestinationDetailComponent },
];
