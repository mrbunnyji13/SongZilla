import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

export const appRoutes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'movie/:id', component: MovieDetailsComponent}
];
