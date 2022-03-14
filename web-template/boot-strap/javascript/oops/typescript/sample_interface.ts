interface Sample{
    name:string;
    email:string;
}

function interfaceAsArgs(person:Sample){
    console.log(person.email);
    console.log(person.name);
}
let personArg:Sample={
    name:"VigneshDevan",
    email:"test@gmail.com"
}
interfaceAsArgs(personArg);