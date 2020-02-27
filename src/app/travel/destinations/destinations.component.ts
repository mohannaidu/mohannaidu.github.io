import { Component, OnInit } from '@angular/core';

import { Destination } from '@src/app/travel/destination.model';
import { DestinationService } from '@src/app/travel/destination.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
})
export class DestinationsComponent implements OnInit {
  destinations: Destination[];

  constructor(private destinationService: DestinationService) { }

  ngOnInit(): void {
    this.destinations = this.destinationService.getDestinations();
  }
}
