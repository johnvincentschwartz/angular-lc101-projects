import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];
   error: boolean = false;

   constructor() { }

   ngOnInit() {
   }

   addMovie (newTitle: string) {
      if (!this.movies.includes(newTitle) && newTitle !== ""){
         this.error = false
         this.movies.push(newTitle)
      } else {
         this.error = true
      }
   }
}