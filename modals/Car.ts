export class Car {

    name:String;
    brand:String;
    price:Number;

    constructor(name:string,brand:string,price:number){
        this.name = name;
        this.brand = brand;
        this.price = price;
    }

    getModal () : string {
        return `This is ${this.brand}'s car.`;
    }
}

export class User<N,S>{

    firstName : S;
    lastName : S;
    age : N;
    
    constructor(firstName:S,lastName:S,age:N){        
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFirstName ():S{
        return this.firstName ;
    }

    getLastName ():S{
        return this.lastName ;
    }
    
    getAge() :N{
        return this.age;
    }
}