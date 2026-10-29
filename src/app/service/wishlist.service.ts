import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private apiKey = environment.tmdbApiKey;
  private apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=1`;

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => {
        return response.results.map((movie: any) => ({
          title: movie.title,
          date: movie.release_date,
          rating: Math.round(movie.vote_average / 2),
          reviews: movie.vote_count,
          image: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
          description: movie.overview
        }));
      })
    );
  }
}
