import { Component, OnInit } from '@angular/core';
import { Movie } from '../_models';
import { MoviesService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];
  errorMsg = '';
  constructor(
    private moviesService: MoviesService,
  ) { }

  ngOnInit() {
    this.moviesService.getAll().subscribe((response) => {
      return this.movies = response.data;

    });
  }

}
