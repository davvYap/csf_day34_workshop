import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from './model';
import { Observable, filter, lastValueFrom, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  constructor(private http: HttpClient) {}

  getJokeAsObservable(): Observable<Joke> {
    return this.http.get<Joke>(
      'https://official-joke-api.appspot.com/random_joke'
    );
  }

  getJokeAsPromise(): Promise<Joke> {
    return lastValueFrom(
      this.http.get<Joke>('https://official-joke-api.appspot.com/random_joke')
    );
  }

  getProgrammingJokeAsObservable(): Observable<Joke> {
    return this.http
      .get<Joke>('https://official-joke-api.appspot.com/random_joke')
      .pipe(
        // to show each joke in console
        tap((joke) => console.log(joke)),
        filter((joke) => joke.type === 'programming')
      );
  }
}
