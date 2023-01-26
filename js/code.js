// Write to a document
// document.write("Hello Deviant");
// document.write("<br>My Name Is Nom De Guerre");
// document.write("<br>Am a Developer Of Destruction");
/*
You are
Awesome
*/
// let userName = 'MatthewJesseThomas';
// let userAGE = 22;
// console.log(userName);
// console.log(userAGE);
// console.log(typeof userName);

//Revision//
// numb1 = 8; 
// let useName = 'Deviant';
// const vat = .16;
// var surname = "Avernos";
// var data;
// console.log(data);
// let numb1 = 'Deviant'+9+11;
// console.log(numb1);
//5
// let numb1 = prompt("Please Enter numb1");
//5
// let numb2 = prompt("Please Enter numb2");
// let addition = numb1 + numb2;
// console.log(addition);
// let numb1 = 4;
// let numb2 = 3;
// let product = eval (`${numb1}*${numb2}`);
// console.log(product);
// let firstName = "Matthew";
// let age = 22;
// console.log
//FUNCTION-First Approach:make use of function//
// let firstName = prompt("Please enter your name:");
// let surName = prompt("Please enter your surname:");
// let salary = prompt("Please enter your salary:", 0);
// document.write(`Name:${firstName}<br>
// Surname:${surName}<br>
// Salary:R${eval(`${salary}+500`)}`);
//Function-Example:Use of Eval//
// let userName = prompt("Enter Work UserName:");
// let firstName = prompt("Enter Work FirstName:");
// let surName = prompt("Enter Work SurName:");
// let userId = prompt("Enter Work ID:");
// let salary = prompt("Enter Work Salary:", 0);
// document.write(`User:${userName}<br>Name:${firstName}<br>SurName:${surName}<br>WorkID:${userId}<br>Salary:R${eval(`${salary}*1.15`)}`);

//Function-Normal//
// function addition() {
//     return 9 + 2;
// }
// document.write(`Sum:${addition()}`);
//End Of Function-Normal//

//Arrow-Function|UnNamed-Function//
// let addition = ()=>{
//     document.write(8 + 4);
// }
// addition();
//End Of Arrow-Function//

//Array//
// let students = [
//     'Aromus', 'Hertz',
//     'Vega', 'Nestro',
//     'Nomu', 'Giga',
//     'Tenma', 'Jogu'
// ];
// let size = students.length;
// console.log(students);
// console.log(students[0]);
// console.log(students[3]);
//Last Element
// console.log(students[size-1]);
//Second-Last Element
// console.log(students[size-2]);
//Middle-Element
// console.log(students[(size-1)/2]);
//Joel-Array//
// let students = [
//     'Gift', 'Asandile',
//     'Deno', 'Javier',
//     'Sakhe', 'Mkhuseli',
//     'John', 'Thando',
//     'Seth',
// ];
// let size = students.length
//Middle-Element-Of-Array-For-Odd-Amount-Of-Elements//
// console.log(students[parseInt((size-1)/2)]);
//Middle-Element-Of-Array-For-even-Amount-Of-Elements//
// console.log(students[(size-1)/2]);
//Comparison Operators
// let numb1 = 6;
// let numb2 = 7;
// console.log(numb1 < numb2);
// console.log(numb1 <= numb2);
// console.log(numb1 >= numb2);
// console.log(numb1 != numb2);
// console.log(numb1 == numb2);
// console.log(numb1 === numb2);
//End-Of-Comparison//
// let salary = parseInt (prompt("Enter your salary"));
// let age = parseInt(prompt("Enter your age"));

// let qualified = (salary >= 5000) && 
// (age > 17);

// console.log(qualified);
// let qualified = (salary >= 5000) || 
// (age > 17);

// console.log(qualified);
// let qualified = !(salary >= 5000);
// console.log(qualified);

//Relational Operator: in
// let numbers = [9, 7, 4, 3, 15];
//Membership Operator
// let person = {
//     name: 'User name',
//     surname: 'User surname',
// }
// let search = 'name';
// console.log(search in person);

//Increment and Decrement: 
// let numb1 = 8;
// console.log(numb1++);
// console.log(numb1);
// console.log(++numb1);

//Ternary Operator//
/*{ ? : }*/
// let age = 22;
// console.log(
//     age >17 ? "You are qualified" :
//     "You are not qualified");
//Exercise for Ternary Operators//
// let firstName = prompt("Enter Work FirstName:");
// let salary = prompt("Enter Work Salary:", 0);

// document.write(salary >5000 ? `Name:${firstName}<br>Salary:R${eval(`${salary}+1000`)}` : "Nothing 4 U");