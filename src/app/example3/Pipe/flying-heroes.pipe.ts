import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../class/hero';
import { FlyingHero } from '../class/fluinghero';

@Pipe({
  name: 'flyingHeroes',
  standalone: true,
  //!Для того, щоб зробити impure треба розкоментувати рядок
  //pure: false,
})
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: Hero[]): Hero[] {
    return allHeroes.filter((hero) => hero instanceof FlyingHero);
  }
}
