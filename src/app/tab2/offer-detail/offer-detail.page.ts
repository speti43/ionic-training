import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Place } from 'src/app/tabs/place.model';
import { PlacesService } from 'src/app/tabs/places.service';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.page.html',
  styleUrls: ['./offer-detail.page.scss'],
})
export class OfferDetailPage implements OnInit {
  place: Place;
  constructor(private pService: PlacesService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((r) => {
          if (this.pService.places.length) {
            this.place = this.pService.places.find((p) => p.id === r.placeId);
            return EMPTY;
          } else {
            return this.pService.getPlace(r.placeId);
          }
        })
      )
      .subscribe((p: Place) => {
        this.place = p;
      });
  }
}
