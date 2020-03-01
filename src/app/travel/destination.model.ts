import { NumberValueAccessor } from "@angular/forms";

export interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;  
  lat: number;
  lng: number;
}
