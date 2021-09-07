import {Car,User} from "./modals/Car";

const myCar = new Car('Vento','Volksvagon',14.7);

const newUser = new User<number,string>('Kamlesh','Suthar',19);

console.log(newUser.getFirstName())

console.log(myCar.getModal());