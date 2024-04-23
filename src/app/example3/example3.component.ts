import { Component } from '@angular/core';
import { Hero } from './class/hero';
import { FlyingHero } from './class/fluinghero';
import { CommonModule } from '@angular/common';
import { FlyingHeroesPipe } from './Pipe/flying-heroes.pipe';

@Component({
  selector: 'app-example3',
  standalone: true,
  templateUrl: './example3.component.html',
  styleUrl: './example3.component.scss',
  imports: [CommonModule, FlyingHeroesPipe],
})
export class Example3Component {
  allHero: Hero[] = [];
  constructor() {
    let hero1 = new Hero('кінь', 1, 25);
    hero1.show();
    hero1.run();
    this.allHero.push(hero1);
    let hero2 = new FlyingHero('пегас', 2, 'крила', 50, 15);
    hero2.show();
    hero2.run();
    hero2.fly();
    this.allHero.push(hero2);
  }
  addFlyingHero(name: any, power: any, fm: any, fs: any, speed: any) {
    let hero = new FlyingHero(name, power, fm, fs, speed);
    hero.show();
    hero.run();
    hero.fly();
    this.allHero.push(hero);
  }
}
