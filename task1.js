// Object

let person ={
    name : 'Mohsin',
    age : 21
};

//Dot Notation
person.name = 'Ali';

//Bracket Notation
person['name'] = 'Mary';

console.log(person);

//Arrays
let selectedColors = ['red','yellow'];
//Add another element in array
selectedColors[2]='green';

//Output
console.log(selectedColors);
console.log(selectedColors[1]);
console.log(selectedColors[2]);
console.log(selectedColors.length);

//FUNCTIONS

function greet(){
    console.log('Hello func');
}

greet();

function fn(name){
    console.log('Hell0 ' + name);
}
fn('Mohsin');
fn('Moh');

function square(number){
    return number * number;
}

console.log(square(23));