import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';

import { Destination } from '@src/app/travel/destination.model';
import { DestinationService } from '@src/app/travel/destination.service';
import { environment } from '@src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-details',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.css'],
})
export class DestinationDetailComponent implements OnInit {
  destination: Destination;

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;

  constructor(
    private destinationService: DestinationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.destination = this.destinationService.getDestination(id);
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(environment.mapbox.accessToken);
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
  });
  // Add map controls
  this.map.addControl(new mapboxgl.NavigationControl());

  }
}
