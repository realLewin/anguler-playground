import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-example',
  templateUrl: './some-example.component.html',
  styleUrls: ['./some-example.component.css'],
})
export class SomeExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // const images = document.querySelectorAll('[data-src]');
  // config = {
  //   rootMargin: '0px 0px 50px 0px',
  //   threshold: 0,
  // };
  // loaded = 0;

  // observer = new IntersectionObserver(function (entries, self) {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       // console.log(`Image ${entry.target.src} is in the viewport!`);
  //       preloadImage(entry.target);
  //       // Stop watching and load the image
  //       self.unobserve(entry.target);
  //     }
  //   });
  // }, this.config);

  // images.forEach(image => {
  //   observer.observe(image);
  // });

  // preloadImage(img) {
  //   const src = img.getAttribute('data-src');
  //   if (!src) { return; }
  //   img.src = src;
  //   _updateMonitoring();
  // }

  // // // Just for the monitoring purpose. Isn't needed in real projects
  // _updateMonitoring() {
  //   const container = document.getElementById('isIntersecting');
  //   const placeholder = container.querySelector('.placeholder')
  //   loaded += 1;
  //   placeholder.innerHTML = loaded;
  //   container.style.opacity = 1;
  // }
}
