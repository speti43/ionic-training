import { Component } from '@angular/core';
import { Place } from '../tabs/place.model';
import { PlacesService } from '../tabs/places.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  
  constructor(public placesService: PlacesService) {
    this.placesService.getPlaces().subscribe();
   }

 
}
