import { Component } from '@angular/core';
import {
  DatePipe,
  CurrencyPipe,
  DecimalPipe,
  UpperCasePipe,
  CommonModule,
} from '@angular/common';

@Component({
  selector: 'app-example1',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, DecimalPipe, UpperCasePipe, CommonModule],
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.scss',
})
export class Example1Component {
  myDate = new Date();
  myNumber = 3.1415;
  myMoney = 225.25;
  myText = 'Hello Olena!!!!';
}
