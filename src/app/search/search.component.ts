import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  movies: any[]= [];
  searchQuery: string ='';
  constructor(private movieService:MovieService){}

  onSearch(){
    this.movieService.searchMovies(this.searchQuery).subscribe((response:any)=>{this.movies = response.results;
    });
    }

}
