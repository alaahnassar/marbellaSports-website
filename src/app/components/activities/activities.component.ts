import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {
    customOptions: OwlOptions = {
      
        loop: true,
        margin: 10,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        navSpeed: 700,
        autoplay: true,
        autoplayTimeout: 1700,
        autoplayHoverPause: true,
        navText: ['', ''],
        // navText: ['<i class="fa-solid fa-arrow-left rounded-circle nav"></i>', '<i class="fa-solid fa-arrow-right rounded-circle nav"></i>'],
        responsive: {
          0: {
            items: 1,
          },
          400: {
            items: 1,
          },
          740: {
            items: 1,
          },
        },
        nav: true,
      };

}
