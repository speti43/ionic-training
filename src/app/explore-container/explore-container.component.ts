import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  courseRating: { course: string; rating: number } = { course: '', rating: 0 };
  courseRatings: { course: string; rating: number }[] = [];
  constructor() {}

  ngOnInit() {}

  save() {
    this.courseRatings.push({...this.courseRating});
  }
}
