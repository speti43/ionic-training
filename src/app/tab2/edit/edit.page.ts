import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from 'src/app/tabs/place.model';
import { PlacesService } from 'src/app/tabs/places.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  place: Place;
  constructor(route: ActivatedRoute, private placesService: PlacesService, private navCtrl:NavController) {
    route.paramMap.subscribe(
      (r) =>
        (this.place = placesService.places.find(
          (p) => p.id === r.get('placeId')
        ))
    );
  }

  ngOnInit() {}

  save() {
    this.placesService.updatePlace(this.place);
    this.navCtrl.navigateBack('/tabs/offers');
  }
}
