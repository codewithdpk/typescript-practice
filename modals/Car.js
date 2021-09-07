"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(name, brand, price) {
        this.name = name;
        this.brand = brand;
        this.price = price;
    }
    Car.prototype.getModal = function () {
        return "This is " + this.brand + "'s car.";
    };
    return Car;
}());
exports["default"] = Car;
