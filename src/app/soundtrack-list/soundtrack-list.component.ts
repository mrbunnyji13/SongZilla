import { Component, Input, input, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-soundtrack-list',
  templateUrl: './soundtrack-list.component.html',
  styleUrl: './soundtrack-list.component.css'
})
export class SoundtrackListComponent implements OnInit {
  @Input() movieName: string = '';
  soundtracks:any[]=[];
  
  constructor(private movieService: MovieService){ }

  ngOnInit(): void {
    if (this.movieName){
      this.movieService.getSoundTrack(this.movieName).subscribe((response:any)=>{
        this.soundtracks=response.album || [];
      });
    }
  }
}
