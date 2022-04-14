import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../_models';
import { MoviesService } from '../_services';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Movie;
  id: number;
  type: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.type = params.type;
    });

    this.moviesService.show(String(this.id)).subscribe((response) => {
      return this.movie = response.data;

    });
  }

}
