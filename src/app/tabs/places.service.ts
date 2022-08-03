import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [];

  constructor(private db: HttpClient) {}

  get places() {
    return [...this._places];
  }

  updatePlace(p: Place) {
    return this.db
      .put(
        `https://ionictest-319dc-default-rtdb.europe-west1.firebasedatabase.app/places/${p.id}.json`,
        p
      )
      .pipe(
        map(() => {
          this._places = [...this._places.filter((r) => r.id !== p.id), p];
        })
      );
  }

  addPlace(p: Place) {
    return this.db
      .post(
        'https://ionictest-319dc-default-rtdb.europe-west1.firebasedatabase.app/places.json',
        p
      )
      .pipe(
        map((id: string) => {
          p.id = id;
          this._places.push(p);
        })
      );
  }
  getPlace(id: string) {
    return this.db
      .get(
        `https://ionictest-319dc-default-rtdb.europe-west1.firebasedatabase.app/places/${id}.json`
      )
      .pipe(
        map((p) => {
          return p;
        })
      );
  }

  getPlaces(force = false) {
    if (force || !this._places.length) {
      return this.db
        .get(
          'https://ionictest-319dc-default-rtdb.europe-west1.firebasedatabase.app/places.json'
        )
        .pipe(
          map((r: Place[]) => {
            if (r) {
              Object.keys(r).map((id) => {
                const p: Place = r[id];
                p.id = id;
                this._places.push(p);
              });
            }
          })
        );
    }
    return EMPTY;
  }
}
