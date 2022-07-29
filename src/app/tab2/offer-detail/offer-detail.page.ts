import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.route.params.subscribe((r) => {
      this.place = this.pService.places.find((p) => p.id === r.placeId);
    });
  }
}
