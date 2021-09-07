"use strict";
exports.__esModule = true;
var Car_1 = require("./modals/Car");
var myCar = new Car_1.Car('Vento', 'Volksvagon', 14.7);
var newUser = new Car_1.User('Kamlesh', 'Suthar', 19);
console.log(newUser.getFirstName());
console.log(myCar.getModal());
