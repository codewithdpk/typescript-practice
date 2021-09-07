"use strict";
exports.__esModule = true;
exports.User = exports.Car = void 0;
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
exports.Car = Car;
var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.getFirstName = function () {
        return this.firstName;
    };
    User.prototype.getLastName = function () {
        return this.lastName;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
exports.User = User;
