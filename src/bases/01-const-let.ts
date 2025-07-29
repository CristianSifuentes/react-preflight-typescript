let firstName: string = 'Cristian';
const lastName:string = 'Klerith';


let diceNumber = 5;
diceNumber = 6; // This is allowed because let allows reassignment
// diceNumber = '6'; // This would cause an error because TypeScript infers the type as number


// diceNumber = '6'; // This would cause an error because TypeScript infers the type as number
// const diceNumber = 5; // This would cause an error because const does not allow


lastName.includes('Kleri') ? firstName = 'Cristian' : firstName = 'Juan';
// We need to used const for variables that won't change
// Var is not recommended in modern JavaScript/TypeScript
const fullName = `${firstName} ${lastName}`;


console.log(firstName, lastName, fullName);


const firstName2: string = 'Cristian';
let  diceNumber2     = 6;           // can be reassigned
// var  oldSchool    = true;  