import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './Movie';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl: string = environment.baseUrl + 'movies';
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  getSpecificMovie(idMovie: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${idMovie}`);
  }
}
