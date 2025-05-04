import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  images = [
    'assets/DSG-car-img.jpeg',
    'assets/DSG-car-img2.jpeg'
  ];
  currentImageIndex = 0;

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  // Auto-slide every 5 seconds
  ngOnInit() {
    setInterval(() => {
      this.nextImage();
    }, 5000);
  }
}
