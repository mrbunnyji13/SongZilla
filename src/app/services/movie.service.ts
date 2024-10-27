import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '49c8db1ca644570009eb9d660d7ace81';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http:HttpClient) { }

  searchMovies(query: string){
    return this.http.get(`${this.apiUrl}/search/movie?query=${query}&api_key=${this.apiKey}`);
  }
  getMovieDetails(movieId: string) {
    return this.http.get(`${this.apiUrl}/movie/${movieId}?this.api_key=${this.apiKey}`);
  }
}
