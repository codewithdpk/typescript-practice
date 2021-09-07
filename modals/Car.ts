class Car {

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

export default Car;