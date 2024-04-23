import { IFly } from "./ifly";
import { Hero } from "./hero";
export class FlyingHero extends Hero implements IFly  
{
    flyingMethod: string;
    flyingSpeed: number;
    constructor(name: string, power: number,fm:string,fs:number,rs:number)
    {
        super(name, power,rs);
        this.flyingMethod = fm;
        this.flyingSpeed = fs;
    }
    fly() 
    {
       this.about.push( "Метод польоту - " + this.flyingMethod + " швидкість = " + this.flyingSpeed);
    }
  
}