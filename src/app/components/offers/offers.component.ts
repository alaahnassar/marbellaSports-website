import { Component, AfterViewInit, OnInit } from '@angular/core';
import { OfferService } from 'src/app/services/offer.service';
// import * as $ from 'jquery';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  data: any;
  constructor(private _offerService: OfferService) {}
  ngOnInit(): void {
    this._offerService.get().subscribe({
      next: (res: any) => {
        this.data = res;
        this.data = this.data.offers;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
