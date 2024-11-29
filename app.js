// console.log("hello world");
// studentname="Anam";
// price=2600;
// coursename="web programming";
// console.log(studentname);
// console.log(studentname);

// console.log(`i am ${studentname}`);

// var studentname="Anam";
// var coursename="web programming";

let studentname="Anam"; //declare
studentname="Anam Sheikh"; //update
console.log(studentname);

var coursename="web";
coursename="web programming";
console.log(coursename);


//datatype
//string
//number
//bolean
let issold=false;
issold=true;
console.log(issold);

//variable naming
//pascal case is sold

//arithmatic

let something=null;
let anotherthing=undefined;
//null in not undefined
//console.log(null===undefined);

//addition
let num1=15;
let num2=4;

let num1Addnum2=num1+num2;
console.log(`the addition of ${num1} and ${num2} is ${num1Addnum2}`);


let num1Subtractnum2=num1-num2;
console.log(`the subtraction of ${num1} and ${num2} is ${num1Subtractnum2}`);

let num1Multipliedbynum2=num1*num2;
console.log(`the multiplication of ${num1} and ${num2} is ${num1Multipliedbynum2}`);

let divide=num1/num2;
console.log(`the division of ${num1} and ${num2} is ${divide}`);

let power=num1**num2;
console.log(`the power of ${num1} and ${num2} is ${power}`);

let Modulus=num1%num2;
console.log(`the Modulus of ${num1} and ${num2} is ${Modulus}`);

//Assignment operator


let numNumber=10;
let numString="10";

let equal=(numNumber==numString);
console.log(equal);

let notequal=(numNumber===numString);
console.log(notequal);

//not equal
let equalnot=(15!=4);
console.log(equalnot);

//greater than and equal to
let Greater=(num1>num2);
console.log(Greater);
let lesser=(num1<num2);
console.log(lesser);
let greaterandequal=(num1>=num2);
console.log(greaterandequal);

//logical operators 
//and

let x=2;
let y=3;
let z=4;
let w=5;
let and =(x<y) && (w>z);
console.log(and);

let or =(x<y) && (w>z);
console.log(or);

//defination of Array
let fruits=["apple ", "oranges" ,"grapes" ,"melon"  ];
//        0           1         2            3

array1=["apple",false,14]
console.log(typeof array1[2])

array1=["apple" , false ,14];
console.log(fruits);

//accesing the elements of array
console.log(fruits[2]);

//length of array
console.log(fruits.length);

//methods of array
//add

//PURPOSE: The push() method adds new items to the end of an array.
//PURPOSE: The pop() method removes (pops) the last item of an array.
//PURPOSE: The shift() method removes the first item of an array.
//PURPOSE: The unshift() method adds new items to the beginning of an array


//1-push
fruits.push("pine");
console.log(fruits);

//2-unshift
fruits.unshift("banana");
console.log(fruits);
//removal 3-pop ==remove the element in the last of array
fruits.pop(fruits)

//3-shift
fruits.shift
console.log(fruits)

//splice= add and remove the elemnt of your choice
//how it adds
fruits.splice(2,0, "coconut")
console.log(fruits)

//we should write index first where we add the new array ,and write the before one if we do not want it to remove

fruits.splice(1,0,"guava")
console.log(fruits)
fruits.reverse()
console.log(fruits)

//deletion
console.log(`array before splice $("fruits")`)
fruits.splice(1,1)
console.log(`array before splice ${"fruits"}`)

console.log(fruits.indexOf ("banana"))
console.log(fruits)


//objects
//array is a type of object
let product=
{
namenike:"nikeshoes",
description:" high in demand ",
price:50,
rating:5,

}
console.log(product)

console.log(product.price)

let profullname=product.description
let propri=
console.log(`${profullname} ${propri}`)
// console.log(product["price"])


