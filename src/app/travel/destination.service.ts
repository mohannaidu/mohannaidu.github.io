import { Injectable } from '@angular/core';
import { Destination } from '@src/app/travel/destination.model';
import  *  as  data  from  './../data.json';

@Injectable()
export class DestinationService {
  // private destinations = new Array<Destination>(
  //   { id: 1, name: 'Petronas Twin Towers', role: 'Goalkeeper' },
  //   { id: 3, name: 'Batu Caves', role: 'Defender' },
  //   { id: 4, name: 'KL Tower', role: 'Midfielder' },
  //   { id: 5, name: 'Genting', role: 'Midfielder' },
  //   { id: 6, name: 'Chinatown', role: 'Midfielder' },
  //   { id: 7, name: 'Jalan Alor', role: 'Midfielder' },
  //   { id: 8, name: 'Central Market', role: 'Midfielder' },
  //   { id: 9, name: 'Botanical Garden', role: 'Forward' },
  //   { id: 10, name: 'Merdea', role: 'Forward' },
  // );
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
