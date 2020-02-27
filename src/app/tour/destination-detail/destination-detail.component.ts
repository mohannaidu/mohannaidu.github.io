import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Destination } from '@src/app/travel/destination.model';
import { DestinationService } from '@src/app/travel/destination.service';

@Component({
  selector: 'app-details',
  templateUrl: './destination-detail.component.html',
})
export class DestinationDetailComponent implements OnInit {
  destination: Destination;

  constructor(
    private destinationService: DestinationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.destination = this.destinationService.getDestination(id);
  }
}
