
import { IRun } from "./irun";
export class Hero implements IRun
{
    name: string;
    power: number;
    runningSpeed: number;
    about: string[];
    constructor(name: string, power: number,rs:number)
    {
        this.name = name;
        this.power = power;
        this.runningSpeed = rs;
        this.about = [];
        
    }
    show()
    {
        this.about.push( "Герой на ім'я " + this.name + " сила = " + this.power);
    }
      run() 
    {
        this.about.push( ("Герой вміє бігати " + " швидкість = " + this.runningSpeed));
    }
}