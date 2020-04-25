import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class HomeComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [
    'assets/img/capa-05-900-500.jpg',
    'assets/img/capa-06-900-500.jpg',
    'assets/img/capa-01-900-500.jpg',
    'assets/img/capa-02-900-500.jpg',
    'assets/img/capa-03-900-500.jpg',
    'assets/img/capa-04-900-500.jpg',
  ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.wrap = true;
  }

  ngOnInit(): void {
  }

}
