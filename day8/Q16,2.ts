

import {Shape} from "./Q16";

export class Circle implements Shape {
  name: string;
  radius: number;
  area: number;

  constructor(radius: number){
     this.name = "Circle";
     this.radius = radius
     this.area = this.calculateAreaCircle()
  }

  calculateAreaCircle (): number{
    return Math.PI * this.radius * this.radius
  }
}
