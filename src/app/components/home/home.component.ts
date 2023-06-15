import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  mybtn: any;
  ngOnInit(): void {
    this.mybtn = window.document.getElementById('btn-back-to-top');
    window.addEventListener('scroll', () => {
      this.scrollFunction();
    });
  }
  scrollFunction() {
    if (
      window.document.body.scrollTop > 50 ||
      window.document.documentElement.scrollTop > 50
    ) {
      this.mybtn.style.display = 'block';
    } else {
      this.mybtn.style.display = 'none';
    }
  }
}
