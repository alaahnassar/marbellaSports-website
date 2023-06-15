import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o'
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit  {
  data:any;
  constructor(private gallerySer:GalleryService){}
  ngOnInit(): void {
    this.gallerySer.get().subscribe({
      next:(res)=>{
        this.data = res
        this.data = this.data.activity},
      error:(err)=>{console.log(err)}
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    margin:10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
     autoplay:true,
    autoplayTimeout:1700,
    autoplayHoverPause:true,
    navText: ['', ''],
    // navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
