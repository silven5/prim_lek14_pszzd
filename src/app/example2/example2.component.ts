import { Component } from '@angular/core';
import { Message } from './stringarray/string-array/message';
import {
  DatePipe,
  CurrencyPipe,
  DecimalPipe,
  UpperCasePipe,
  CommonModule,
} from '@angular/common';
import { FormatPipe } from './Pipe/format.pipe';
import { StringArrayComponent } from './stringarray/string-array/string-array.component';
import { MessagePipe } from './Pipe/message.pipe';
@Component({
  selector: 'app-example2',
  standalone: true,
  templateUrl: './example2.component.html',
  styleUrl: './example2.component.scss',
  imports: [
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    UpperCasePipe,
    CommonModule,
    FormatPipe,
    StringArrayComponent,
    MessagePipe,
  ],
})
export class Example2Component {
  message: Message = new Message([]);
  constructor() {}
  //Метод для отримання даних з дочірньої форми
  newMessage(event: any) {
    this.message = event;
    console.log(this.message);
  }
  X(x: string) {
    return parseFloat(x);
  }
}
