import { Component, OnInit } from '@angular/core';
import { Movie } from '../_models';
import { MoviesService } from '../_services';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: Movie[] = [];
  constructor(
    private moviesService: MoviesService,
  ) { }

  ngOnInit() {
    this.moviesService.getAll().subscribe((response) => {
      return this.movies = response.data;

    });
  }

}
