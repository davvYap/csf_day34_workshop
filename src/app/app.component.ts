import { Component } from '@angular/core';
import { JokeService } from './joke.service';
import { Observable } from 'rxjs';
import { Joke } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'workshop34';

  joke$!: Observable<Joke>;
  jokePromise$!: Promise<Joke>;
  jokeProgramming$!: Observable<Joke>;

  constructor(private jokeService: JokeService) {}

  getJoke() {
    this.joke$ = this.jokeService.getJokeAsObservable();
  }

  getJokeByPromise() {
    this.jokePromise$ = this.jokeService.getJokeAsPromise();
  }

  geProgrammingJokes() {
    this.jokeProgramming$ = this.jokeService.getProgrammingJokeAsObservable();
  }
}
