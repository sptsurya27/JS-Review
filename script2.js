//Variables
var firstName;
firstName = 'Suryameet'; 
var lastName;
lastName = 'Singh';
var age;
age = '23';


//String Concatenation
// var fullName = firstName.concat(" ", LastName);
var fullName;
fullName = firstName + " " + lastName;
console.log(fullName);


//Expressions & Operators
var num1 = 10;
var num2 = 5;
var numberResult = '';

numResult = num1 + num2;
numResult = num1 - num2;
numResult = num1 * num2;
numResult = num1 % num2;
numResult = num1 / num2;

//Linking JavaScript to HTML File
//<script type="text/javascript" src="script.js"></script>


//Operators, Boolean Logic, and Conditionals

var num5 = 5;
let num4 = 4;

if(num5 === num4) {
    console.log("It's true");
} else {
    console.log("It's False");
}

if(num5 > num4) {
    console.log("It's more");
} else {
    console.log("It's less!");
}

//Arrays
var menu = ["Home", "Portfolio", "About", "Contact"];

//Loops
var menu = ["Home", "Portfolio", "About", "Contact"];
for (var i in menu) {
  console.log(menu[i]);

//Switch Statements
switch (mood().gethungry()) {
    case happy:
        text = "I'm feeling great!";
        break; 
    case sad:
        text = "I'm feeling sad!";
        break;
    case tired:
        text = "I'm feeling sleepy!";

//Functions
function myFunction(firstName,lastName)
function 

//Objects
var person(fullName, age, gender, location );

var res = fullName.toUpperCase();

//DOM
//The Document Object Model is a programming API for documents

//Git and Github


//Bonus - Fizz Buzz

for (var i=1; i <= 20; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
