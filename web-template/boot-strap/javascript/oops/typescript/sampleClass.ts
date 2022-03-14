class Car{

    car_name:string;
    price:number;

    constructor(name,price){
        this.car_name = name;
        this.price = price;
    }
    printName(){
        console.log(this.car_name);
    }
    printPrice(){
        console.log(this.price);

    } 
}
let carObj = new Car("hyundai",500000);
carObj.printName()
carObj.printPrice()