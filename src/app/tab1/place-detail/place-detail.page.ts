import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from 'src/app/tabs/place.model';
import { PlacesService } from 'src/app/tabs/places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  constructor(
    private navCtrl: NavController,
    private pService: PlacesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((r) => {
      this.place = this.pService.places.find((p) => p.id === r.placeId);
    });
  }

  onBookPlace() {
    this.navCtrl.navigateBack('/tabs/discover');
  }
}
