import { Injectable } from '@angular/core';
import { Destination } from '@src/app/travel/destination.model';
import  *  as  data  from  './../data.json';

@Injectable()
export class DestinationService {

  destinations: Array<Destination>;

  constructor() {
    this.destinations = Array.of(JSON.parse(JSON.stringify(data)))[0].default;
    console.log(this.destinations);
  }


  getDestinations(): Destination[] {
    return this.destinations;
  }
  
  getDestination(id: number): Destination {
    return this.destinations.filter(destination => destination.id === id)[0];
  }
}
