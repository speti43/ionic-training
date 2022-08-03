import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Place } from 'src/app/tabs/place.model';
import { PlacesService } from 'src/app/tabs/places.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  place: Place = {
    id: null,
    description: '',
    imageUrl: '',
    price: 20,
    title: '',
  };
  constructor(
    private placesService: PlacesService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  save() {
    this.placesService.addPlace(this.place).subscribe();
    this.navCtrl.navigateBack('/tabs/offers');
  }
}
