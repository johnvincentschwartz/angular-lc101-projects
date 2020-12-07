import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Mean animals';
  image1 = 'https://i.pinimg.com/474x/f9/04/9d/f9049d3ce71b0c8856dd1ea9217a0543.jpg';
  image2 = 'https://www.thesun.co.uk/wp-content/uploads/2020/02/NINTCHDBPICT000560869477.jpg';
  image3 = 'https://evilgerbilface.yolasite.com/resources/gerbil.jpg';

  constructor() { }

  ngOnInit() {
  }

}