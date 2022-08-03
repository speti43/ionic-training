import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EMPTY } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Place } from 'src/app/tabs/place.model';
import { PlacesService } from 'src/app/tabs/places.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  place: Place;
  constructor(
    route: ActivatedRoute,
    private placesService: PlacesService,
    private navCtrl: NavController
  ) {
   route.params
      .pipe(
        switchMap((r) => {
          if (this.placesService.places.length) {
            this.place = this.placesService.places.find((p) => p.id === r.placeId);
            return EMPTY;
          } else {
            return this.placesService.getPlace(r.placeId);
          }
        })
      )
      .subscribe((p: Place) => {
        this.place = p;
      });
  }

  ngOnInit() {}

  save() {
    this.placesService.updatePlace(this.place).subscribe(() => {
      this.navCtrl.navigateBack('/tabs/offers');
    });
  }
}
