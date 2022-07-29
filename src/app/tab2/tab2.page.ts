import { Component } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Place } from '../tabs/place.model';
import { PlacesService } from '../tabs/places.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements ViewWillEnter {

  constructor(public placesService: PlacesService) {}

  ionViewWillEnter() {
  }

  remove(p: Place) {
    this.placesService.places = this.placesService.places.filter(
      (r) => r.id !== p.id
    );
  }
}
