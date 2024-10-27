import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';  // Import if you use forms
import { HttpClientModule } from '@angular/common/http';  // Import for HTTP requests
import { RouterModule } from '@angular/router';  // Import if using routing
import { SearchComponent } from './search/search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SoundtrackListComponent } from './soundtrack-list/soundtrack-list.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    SearchComponent,
    SoundtrackListComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),  // Add routes if needed
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }