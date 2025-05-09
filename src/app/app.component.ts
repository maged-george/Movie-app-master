import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishlistComponent } from './components/wish-list/wish-list.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    WishlistComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Movie-app';
}
