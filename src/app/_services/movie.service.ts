import { Injectable, ɵisListLikeIterable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewMovie, Movie, MovieAttributes } from '../_models';
import { environment } from '../../environments/environment';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';
import { visitAll } from '@angular/compiler';

const host: string = environment.host;

interface ResponseMovie {
  message: string;
  product: Movie;
}

interface MoviePaginated {
  meta: any;
  data: Movie[];
}

interface ResponseMovieDetail {
  data: Movie;
  meta: any;
}

  

@Injectable({ providedIn: 'root' })
export class MoviesService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<MoviePaginated> {
    return this.http.get<MoviePaginated>(`${host}/movies?populate=image`);
  }

  public show(id: string): Observable<ResponseMovieDetail> {
    return this.http.get<ResponseMovieDetail>(`${host}/movies/${id}?populate=image,reviews`);
  }

  public addMovie(data: NewMovie): Observable<ResponseMovie> {
    return this.http.post<ResponseMovie>(`${host}/movies`, { data });
  }

  public editMovie(id: number, data: MovieAttributes): Observable<ResponseMovie> {
    return this.http.put<ResponseMovie>(`${host}/movies/${id}`, { data });
  }

  public deleteMovies(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${host}/movies/${id}`);
  }

}



