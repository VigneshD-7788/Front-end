var Car = /** @class */ (function () {
    function Car(name, price) {
        this.car_name = name;
        this.price = price;
    }
    Car.prototype.printName = function () {
        console.log(this.car_name);
    };
    Car.prototype.printPrice = function () {
        console.log(this.price);
    };
    return Car;
}());
var carObj = new Car("hyundai", 500000);
carObj.printName();
carObj.printPrice();
