import { Component } from '@angular/core';
import { GalleryImg } from '../../interfaces/gallery';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  galleryImages: GalleryImg[] = [
    {
      src: './gallery/1.png',
      class: 'md:col-span-4',
    },
    {
      src: './gallery/2.png',
      class: 'md:col-span-4',
    },
    {
      src: './gallery/3.png',
      class: 'md:col-span-4',
    },
    {
      src: './gallery/4.png',
      class: 'md:col-span-9',
    },
    {
      src: './gallery/5.png',
      class: 'md:col-span-3',
    },
  ];
}
