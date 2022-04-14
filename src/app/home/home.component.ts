import { Component, OnInit } from '@angular/core';
import { Movie } from '../_models';
import { MoviesService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  moviesTheater: Movie[] = [];
  movies: Movie[] = [];
  errorMsg = '';
  constructor(
    private moviesService: MoviesService,
  ) { }

  ngOnInit() {
    this.moviesService.getAll().subscribe((response) => {
      this.moviesTheater = response.data.filter((movie) => !movie.attributes.popular);
      return this.movies = response.data.filter((movie) => movie.attributes.popular);

    });
  }

}
