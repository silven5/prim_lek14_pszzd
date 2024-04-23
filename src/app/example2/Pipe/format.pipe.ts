import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format',
  standalone: true,
})
export class FormatPipe implements PipeTransform {
  //Перетворюємо у рядок і замінюємо точку на кому
  transform(value: number, ...args: unknown[]): string {
    return value.toString().replace('.', ',');
  }
}
