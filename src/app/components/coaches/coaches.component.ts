import { Component, AfterViewInit, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CoachesService } from 'src/app/services/coaches.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss'],
})
export class CoachesComponent implements OnInit {
  data: any;
  constructor(private coachSer: CoachesService) {}
  ngOnInit(): void {
    this.coachSer.get().subscribe({
      next: (res: any) => {
        this.data = res;
        this.data = this.data.coach;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
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
    // navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
    },
    nav: true,
  };
}
