function Car(brand, color, maxSpeed, chassisNumber) {
  this.brand = brand;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.chassisNumber = chassisNumber;

  this.drive = function () {
    console.log(`${this.brand} ${this.color} is driving`);
  };
}

const car1 = new Car("Toyota", "rose", 200, "to-1");
car1.drive();
typeof car1;

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }

  *getSides() {
    yield this.height;
    yield this.width;
  }
}


