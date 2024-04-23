import { Component } from '@angular/core';
import { Observable, interval, map, take } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FetchJsonPipe } from './Pipe/fetch-json.pipe';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-example4',
  standalone: true,
  templateUrl: './example4.component.html',
  styleUrl: './example4.component.scss',
  imports: [AsyncPipe, CommonModule, FetchJsonPipe],
  providers: [HttpClientModule, FetchJsonPipe],
})
export class Example4Component {
  //!Приклад1
  message$: Observable<string | unknown>;
  //!Приклад1
  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?',
    'Ще одне повідомлення до героя.',
  ];
  constructor() {
    //!Приклад1
    this.message$ = this.getResendObservable();
  }
  //!Приклад1
  resend() {
    this.message$ = this.getResendObservable();
  }
  //!Приклад1
  private getResendObservable() {
    //Кожні 500мс.
    return interval(500).pipe(
      map((i) => this.messages[i]),
      //*Метод take() приймає як аргумент число - кількість подій потоку,
      //*які потрібно повернути з моменту старту потоку.
      take(this.messages.length)
    );
  }
}
