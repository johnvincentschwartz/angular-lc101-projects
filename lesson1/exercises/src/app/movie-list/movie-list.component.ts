import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Network', 'Hedwig and the Angry Inch', 'The Wages of Fear', 'The Evil Dead', 'Clue'];

   constructor() { }

   ngOnInit() {
   }

}
