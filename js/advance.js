//                                        Topic 1

// Call Stack

// var globlVar=`Sheda`

// function a(){
//     debugger;
//     console.log(`Calling First line of function a`);

//     b();
//     console.log(`Calling second line of function a`);
// }

// var b=()=>{
//     debugger;
//     console.log(`Calling of function b`);

//     c();
// }
// var c=()=>{
// console.log(`calling Function C`);
// debugger;
// }

// debugger;
// a();

// `                                      topic 2

// creation Phase Execution Phase and Hoisting
//   ||
//    v
// Note Book

//Function Hoisting in JS
/*
console.log(sum(10,7));
function sum(a,b){
return a+b
}


This is oly posssible in Simple Function
Not in Arrow Function and other in which function is written after someThing Esle
*/

// Variable Hoisting
/*
console.log(`I am a ${job}`);
var job=`Web Developer`;
console.log(`I am A ${job}`);

function WhoAmI(){
    console.log(`I am a ${job}`);
    var job=`Full Stack`;
    console.log(`I am A ${job}`);

}
WhoAmI();
*/

// Scope Chain
// Lexical Scoping
// defination on Note Book
/*
var a="Hello Friends"
function First(){
    var b='I am Muhammad '
    second()
    function second(){
        var c='Usman'
        console.log(a+b+c);
    }
}
First();
*/

// Parent can't Access on Child Variables But Chld Can access The Parent Varibales

//                                     Topic #3

// "Use strict"
/*
'use strict'

sum(10,20)
function sum(a,b){
var add=a+b
console.log(add);
}
*/

//                                      Topic #4

//  "This" Keyword
// The JS This Keyword refer to object it belongs to

//It has Different Values Depending Upon it is used
// i) "Alnoe "it refers to the Global object
// ii) In the regular function it also refer to the global fuction
/*
function sum(){
    a=10;b=9;
    add=a+b;
    console.log(`This is the sum of two numbers ${add}`);
    console.log(this);
}
sum();
*/
// iii) In the mothod "this" refers to the Owner Object

// Methods are the functions stored as objects
/*
var myData ={
    name:'Usman',
    age:19,
    sum :function(){
        var add=2+2;
        console.log(`This is add function ${add}`);
        console.log(this);

    }
}
myData.sum()
*/

// iv) In the "use Strict" the value of this is undefined
/*
"use strict"
function sum(){
    var a=10; var b=9;
    var add=a+b;
    console.log(`This is the sum of two numbers ${add}`);
    console.log(this);
}
sum();
*/
// Exercise

/*
var myData ={
    name:'Usman',
    age:19,
    sum :function(){
        var add=2+2;
        console.log(`This is add function ${add}`);
        console.log(this);

        function Child(){
            var name='Muhammad Usman'
            console.log(`My Name Is ${name}`);
            // Because of regular function it refer to the Window as the parent object
            console.log(this);
        }
        Child();
    }
}
myData.sum()
*/

// objects and its types

// Primitive Data Type and Non Primative data type

// Primative

// Number String null undefined Boolean Symbol

// Non Primative

// Every thing without Primative Data Type is "OBJECTS"
/*
var Check={
    name:"Usman",
    age:19,

}
Check.prof="WebDeveloper"
console.log(Check);
console.log(typeof({}));
console.log(typeof(function(){}));

var fun=()=>{
    var num1="This is Number 1"
}

fun.num2="I am Also Here"
console.log(fun.num2);
*/
/*
var array=[1,2,3]
console.log(array);

var arrObj={
    0 : 1,
    1 : 2,
    2 : 3
}
console.log(arrObj);

// Both Have Same Output soo We Called ayyar also an object 
*/
/*
// the isArray() is a method which returns a object is array or not 
// If object is array then it returns true else false

var array=[1,2,3]
var arrObj={
    0 : 1,
    1 : 2,
    2 : 3
}
console.log(array);
console.log(arrObj);
console.log(Array.isArray(arrObj));

console.log(Array.isArray(array));
*/

// Pass By Value & Pass By Reference

// i) Pass By value
/*
let a=5;
let b=a;
b+=5;
console.log(a);
console.log(b);
// Just Value is Passed
// Once the Value is passed then it does not depend the of each other
*/
/*
// ii) Pass By reference 

// In this the ojects are belongs to he same memory so when once is change it also chnaged into he memory so
// The value of every object that is passed is Gonna Chnaged
// They Have SAme Memory Address

var obj1={
    name:"Usman",
    rollNo:2521340
}
var obj2=obj1;
obj2.name="Muhamad Usman"
console.log(obj1);
console.log(obj2);

// Example For Array

const arr1=[1,2,3,4]
const arr2=arr1;
arr1.push(5)

console.log(arr1);
console.log(arr2);

// if we wants to chang only in one array then use this method 

const arr1=[1,2,3,4]
const arr2=[].concat(arr1);

// arr1.push(5)
arr2.unshift(5)

console.log(arr1);
console.log(arr2);

*/

// Exercise #3
/*
var likes=100;

var obj1={
    name:"Muhammad Usman",
    RollNo:2521340,
}
var fun1=(a,b)=>{
a='Sheda';
b.RollNo=2312321
}
// fun1();
fun1(likes,obj1);
console.log(name);
console.log(obj1.RollNo);
*/

//                                     Topic #5

//       Functions in Js In Details

// Function are first Class Citizen

// A Programming Language is said to have First-Class function when functions are treated
// like anyother Variables
/*
// i) In Js We Can assign a function to a Variable also as Methods 

// Explain in Function

var Name=function sum(a,b){
    var add=a+b;
    console.log(add);
} 
Name(10,20);

// Explaintion in objects
const obj1={
    name:"Usman",
    fullName:function (){
        console.log("Muhammad Usman");
    }
}
console.log(obj1.name);
obj1.fullName();

//   ii)   pasing a function as an argument into another function 

// call BackFunction 
// the function that is passed as an argument from another function 
const fun1=()=>"hello"
const fun2=(a,b)=>{
    console.log(a,b);
}
fun2(fun1(),' Hi')


// returning Functions 

function a(){
    return function b(){
        console.log("I am Muhammd Usman");
    }
}

// waysHow to call the reruring function 
// a()()
const c=a();
c();
*/

/*
// call BackFunction 
// the function that is passed as an argument from another function 

// Call Back Funcction is the way to make sure certain code is not executed 
// until h eother code is finsihed execution

function perOne(Friend,callFrnd){
    console.log(`Hey! I am busy right Now with ${Friend} and i will call you later`);
    callFrnd();
}
function perTwo(){
    console.log(`Hey! Now i am free and calling you `);
}
perOne('Sheda',perTwo)
*/

// Higher Order Function

// if a function is reruring a function then this parent function
// called higher Order function
/*
Exercise 
const topicName=["UI","ML","SE","CS","AI"]
var RandTopics=Math.floor(Math.random()*topicName.length);
const topic=topicName[RandTopics]
console.log(topic);
 const name=prompt();
 const AskQuestion=(name)=>{
    if(name==="usman"){
        return function (topic){
            console.log(`Asslam 0 alaikum ${name} .Please explain this What is  ${topic}`);
        }
    }
    else if(name==="Sheda"){
        return function (topic){
            console.log(`Asslam 0 alaikum ${name} .Please explain this What is  ${topic}`);
        }
    }
    else if(name==="papu")
    return function (topic){
        console.log(`Asslam 0 alaikum ${name} .Please explain this What is  ${topic}`);
    }
 }
 AskQuestion(name)(topic)
 
 
 // Immediately invoke Function Expression 
 /*
 (function (){
     console.log(`I am Muhammad Usman`);
 })();



 //  clouser Function Variables

 // Def==> clouser in action that is inner function can have access to the outer function
 //  variables as well as all the global variables

 var d=5;
 const fun1=(a)=>{
 let b=5;
 const innerFun=()=>{
     let add=a+b + d;
     console.log(`The Sum of Numbers is ${add}`);
 }
 return innerFun;
 }
 let inner=fun1(5);
 console.dir(inner);
 inner();

 */

//  Exercise #5 on Clouser
/*
const topicName=["UI","ML","SE","CS","AI"]
var RandTopics=Math.floor(Math.random()*topicName.length);
const topic=topicName[RandTopics]
console.log(topic);
 const name=prompt();
 const AskQuestion=(name)=>{
     return function (topic){
    if(name==="usman"){
            console.log(`Asslam 0 alaikum ${name} .Please explain this What is  ${topic}`);
        }
        else if(name==="Sheda"){
                console.log(`Asslam 0 alaikum ${name} .Please explain this What is  ${topic}`);
            }
        else if(name==="papu")
            console.log(`Asslam 0 alaikum ${name} .Please explain this What is  ${topic}`);   
    }
 }
 let Name=AskQuestion(name)(topic);
*/

//                  "Different Methods in js"
/*
// #1)  call() method in JS  
// It is predefined Js Method 
// with call(),an object can use a method whic belongs to another object

let student1={
    name:"Usman",
    city:"Faislabad",
    Details:function(rating){
        console.log(`${this.name} is a good Boy.He lives in ${this.city}. But I don't Like him. I wil rate you ${rating}`);
    }
}
// student1.Details();
let student2={
name:"Kch Bhi",
city:"Mjy Kya Pata",
}
student1.Details.call(student2,5)
*/

// #2) apply() Method in js
/*
// apply() is similar to the call() method

// call() method take arguments as sepretely 
// applay() method takes the arguments as the array.
let student1={
    name:"Usman",
    city:"Faislabad",
    Details:function(rating,rollNo){
        console.log(`${this.name} is a good Boy.He lives in ${this.city}. But I don't Like him. I wil rate you ${rating} and his Roll no is ${rollNo}`);
    }
}
// student1.Details();
let student2={
name:"Kch Bhi",
city:"Mjy Kya Pata",
}
student1.Details.apply(student2,[5,"Mjy Kya pata"])

// find max number in arr
let findMax=Math.max.apply(null,[1,2,3,4,8])
console.log(findMax); 
//  otherwise 

// let fimdMax=Math.max(2,3,5,8)
// console.log(fimdMax); 

*/

// #3) bind() Method in JS

// By this function we can bind an object to the common function,
//  so that the function gives the different results when its need
/*
let student1={
    name:"Usman",
    city:"Faislabad",
}
let student2={
    name:"Sheda",
    city:"Faislabad"
}
let student3={
    name:"Papu",
    city:"Faislabad"
}
// student1.Details();

var Details=()=>{
    console.log(`${this.name} is a good Boy.He lives in ${this.city}. But I don't Like him`);
}
let student= Details.bind(student1);
student();

*/

// Topic #6

//               "Loops (itetartors) in Js In Details"

//   1 #) ForEach() Method

// The Foreach Mehthod call a function once for each element in array, in Order

// Syntax: Array.foreach(callbackfunction(currentValue[index,[arr]])[this.String])

// array.forEach(element => {

// });
/*
const ProgrammingLanguage=["JS","Python","PHP","C++","C","ETC"]

for (let index = 0; index < ProgrammingLanguage.length; index++) {
    const element = ProgrammingLanguage[index];
    console.log(element);
}

ProgrammingLanguage.forEach(function(CurrentValu,index){
    console.log(index+"---"+CurrentValu);
})
*/
/*
// Create the array and update the each value of the with 200 

const newArr=[10,20,30,40,50,60,70,80,90];

newArr.forEach((cValue,index,arr)=>{
// console.log(index+" --"+(cValue+100));
// second way 
console.log(arr[index]+100);
})
*/

// 2#) For Of loop

// for (const iterator of object) {
//     //code Block to be executed
// }
// It is only works on iterable objects
// iterables objects are thing which is checked One by One
// Example---> array or strings
/*
const ProgrammingLanguage=["JS","Python","PHP","C++","C","ETC"] 

for (const iterator of ProgrammingLanguage) {
    console.log(iterator);
}
const object="Muhammad Usman"
for (const iterator of object) {
    console.log(iterator);
}

*/

// 3#) for in Loop

// To check the properties in the object
/*
const MyData={
    name:"Usman",
    age:19,
    city:"FSD"
}
//  enumariting 

//  What is enumariting?
//  +==> It means " countable" It simply means that the property are shown up 

for(prop in MyData){
    console.log(prop);
}
*/

//              Topic # 7

// ES6 Ecamscript 2015

// Topic #1

//  "let" VS "const" VS "var"

// variables declare with var is function scope
// variables declare with const and let are block scope

// TOpic #2

// Template literails
// var myName="usman"
// console.log(`My Name is ${myName}`);

// topic #3

// string Methods
/*
var myName="Usman"
var lastName="Mirza"
console.log(`${myName}`.startsWith("u"));
console.log(`${myName}`.endsWith("n"));
console.log(`${myName}`.includes("ma"));
console.log(`${myName} ${lastName} \n`.repeat(10));
*/

// topic #4

// Array Destructuring
/*
// The destruturing assignment syntax is a JavaScript 
// expression that makes to unpack the values arrays
// or properrties from objects,into distinct variables

let progLang=["JS","PHP","java","Python","C++"]

// let [Lang1,lang2,lang3,lang4,lang5]=progLang;
// console.log(`The Programmin languages in 2022 you should learn ${Lang1} ${lang2} ${lang3} ${lang4} ${lang5}`);

let [js,,,,c]=progLang;
console.log(`My Fvrt Programming language is ${js} and least fvrt is ${c}`);

*/

// Topic #5
/*
// Swap two numbers 

let a=7;
let b=4;
var temp;
// 1. 
// a=a+b;
// b=a-b;
// a=a-b;
// 2.
// temp=a;
// a=b;
// b=temp;
// 3. 
[a,b]=[b,a]
console.log(`a= ${a}`);
console.log(`b= ${b}`);
*/

// Tpoic # 6

// Objects destructuring
/*
let MyData={
    name:"usman",
    city:"FSD",
    age:19,
    hobb:{
        first:`Listneing songs`,
        last:"click Photos"
    }
}
// let {name,city,age}=MyData;
// console.log(`My Name is ${name} and i lives in ${city} and my age is ${age}`);
let {name:myName,city,age,hobb}=MyData;
console.log(`My Name is ${myName} and i lives in ${city} and my age is ${age} and my First hobby is ${hobb.first} and second is ${hobb.last}`);
*/

// topic #7
/*
// Arrow Function in js

// let sum=()=>{
//     let a=5;
//     const b=10;
//     return a+b;
// }
// console.log(sum());

// let a=4;
// let b=8;
// let sum=()=>a+b;
// console.log(sum());

// let sum=(a,b)=>a+b;
// console.log(sum(12,3));
*/

// Topic #8
/*
// Default Parameters in JS
// ==> default parameter functions allows the named parameters to e inatilize 
// with default values if no value or undefine is passed 

const sum=(a,b=5)=>{
return a+b;
}
console.log(`The sum of a and b is ${sum(3)}`);
*/

// Topic #9

// Rest Parameter
// ==>Rest Parameter is an improved way to handling function parameter
// The rest parameter sytax allow us to represent the indefinite number of aguments as an array
/*
function sum(...input){
console.log(...input);
}


sum(1,2,3,4,4,5,6,7,8,9,"Sheda");

// sum of the whole array 
// function sum(...input){
// console.log(...input);
// let total=0;
// for(let i of input){
// total+=i;

// }
// console.log(total);
// sum(1,2,3,4,5,5,6,7,8,8)

let fun=(a,b,...c)=>{
console.log(`${a} ${b}`);
console.log(`${c}`);
console.log(`${c[0]}`);
console.log(`${c.length}`);
console.log(`${c.indexOf("Chawal")}`);
}

fun("Sheda","Papu","Nikka","Tali","Chawal")

*/

// Topic #8

// Spread Operator
/*
// old method 
// let sum=(a,b,c)=>{
// console.log(a+b+c);
// }
// var arrValue=[9,5,3]
// sum.apply(null,arrValue)

// ES 6
// let sum=(a,b,c)=>{
//     console.log(a+b+c);
//     }
//     var arrValue=[9,5,3]
//     sum(...arrValue)

// concat()

// let arr1=[1,2,3,4]
// let arr2=[5,6,7,8,9,0]
// arr1=arr1.concat(arr2)
// console.log(arr1);

// let arr1=[1,2,3,4]
// let arr2=[5,6,7,8,9,0]
// arr1=[...arr1,...arr2]
// console.log(arr1);

// copy() 

// old way 
// let arr1=[1,2,3,4,5]
// let arr2=arr1;
// arr2.unshift(7,8)
// arr2.push(7,8)
// console.log(arr2);
// console.log(arr1);

// ES 6

let arr1=[1,2,3,4,5]
let arr2=[...arr1,7,8];
console.log(arr2);
console.log(arr1);
*/

// Topic #10

// Math() objects in js ES 6

// sign()
// trunc()
/*
// let num=121.12;
// let num1=-12;
// let num2=0;
// console.log(Math.sign(num));
// console.log(Math.sign(num1));
// console.log(Math.sign(num2));

let num=121.12;
let num1=-12.897;
let num2=0;
// It remove the number after the decimals
console.log(Math.trunc(num));
console.log(Math.trunc(num1));
console.log(Math.trunc(num2));

*/

// topic #11
// Number and Global Methods in ES 6

// isFinite() method
// The isFinite reurn the false if the argument is infinite or NaN

// isNaN() method
// it returns the false if the argument is NAN.Else false

// the Number.isInteger() Method
// it returns the false if the argument is integer.Else false

//                                      Topic #6

//  OOP in Js

// Topic # 1
// Classes

// Def:
// ==> A class is a type of function but indstead of using keyword function to initiate it
// we use keyword class and the properties are assigned inside a constructor method

// ==> A class is a user define prototype from which objects are created.
//  it represents the set of properties and methods that are common to all objects one type;

// class student{
//     constructor(name,age,cls){
//         this.myName=name;
//         this.myage=age;
//         this.mycls=cls;
//     }
//     BioData(){
//         console.log(`I am student of class${this.myName}. my name is ${this.myName}. and i am ${this.age} years Old. `);
//     }
// }

// let obj1=new student("BS.SE",19,"Usman")
// obj1.BioData()

// Topic #2

//  inheritance
/*
class student{
    constructor(name,age,cls){
        this.myName=name;
        this.myage=age;
        this.mycls=cls;
    }
    BioData(){
        return `I am student of class${this.mycls}. my name is ${this.myName}. and i am ${this.age} years Old. `;
    }
}

class player extends student{
    constructor(name,age,cls,game){
        super(name,age,cls)
        this.game=game
    }
    Player_Data(){
        // console.log(`iam player of ${this.game}. my name is ${this.myName}. i am ${this.myage} years old. And i i am student of ${this.mycls}`);
        return `iam player of ${this.game}. ${super.BioData()}`;
    }
}
let obj=new player("Usman",19,"SE","Cricket")
console.log(obj.Player_Data());;
// let obj1=new student("BS.SE",19,"Usman")
// obj1.BioData()
*/

//                              Topic #7

// Synchronous VS ASynchronous

// Synchronous
// A Synchronous request the blocked the client until the operation completes
// In snch case JS engine of Browser is Blocked

// ASynchronous
// In snch case JS engine of Browser is Blocked
// A Synchronous request the responsive the client He can Done other tasks

//                              Topic #8

// Call Back Hell

/*
let StudentData=()=>{
    setTimeout(()=>{
        let Roll_num=[1,2,3,4,5]
        console.log(Roll_num);
        console.log(`Caling First Function`);
        setTimeout((roll_num) => {
            const bioData={
                name:"Usman",
                age:19
            }
            console.log(`My name is ${bioData.name}. I am ${bioData.age} Years old. My Roll no is ${roll_num}`);
            setTimeout((gender) => {
                bioData.gender='male';
                console.log(`My name is ${bioData.name}. I am ${bioData.age} Years old. My Roll no is ${roll_num} and i am ${bioData.gender}`);
            }, 2000,bioData.name);
        }, 2000,Roll_num[2]);
    },2000)

}

StudentData()
*/

//                                      Topic #9

// Promises in Js

// A promise in Js is a object that keep track about the whatever the
//  cerain event is has  happened already or not
// Determines what hapen after the event

// Primise has 3 Three Stages
// i)      Panding
// ii)     resolve---> Fullifiled
// iii)    rejected

// Syntax
// let PromObj=new Promise((resolve,rejected)=>{

// })

// the method
// ====> Promise.then(), Promise.catch(), and Promise.finally()
// are used to associate further action with a promise that becomes settled

// Promises produce
/*
let PromObj=new Promise((resolve,rejected)=>{
setTimeout(() => {
    let Rol_no=[1,2,3,4,5]
    resolve(Rol_no)
    rejected(`Chla Ja Bhosriwla`)
}, 2000);
})
let BioData=(roll_num)=>{
    return new Promise((resolve, reject) => {
        setTimeout((roll_num) => {
            myData={
                name:"usman",
                age:18
            }
           resolve(`My name is ${myData.name}. I am ${myData.age} Years Old. My Roll No is ${roll_num}`);
        }, 2000,roll_num);
    })
}
// Promise consume 
PromObj.then((rollno)=>{
console.log(rollno);
BioData(rollno[2]).then((uff)=>{
    console.log(uff);
})
}).catch((erroe)=>{
    console.log(erroe);
})

*/

//                          Topic #10

// ASYNC/AWAIT in JS

/*
// There's a Special syntax to work with the  promises in a more more comfortab;e fashion,
// called "Async/Await".it's surprisingly easy to understand and use

// The word "async" before a function means one one simple thing:
// a function always returns a promises

// So the async keyword is added to functions to tell tehm to retun a promises
// rather than directly retuning the value

// we can use await when calling any function that returnsa Promise,
//  including web API function

// the keyword await makes js wait untill that the promises settled
// and returns its results

let PromObj = new Promise((resolve, rejected) => {
  setTimeout(() => {
    let Rol_no = [1, 2, 3, 4, 5];
    resolve(Rol_no);
    rejected(`Chla Ja Bhosriwla`);
  }, 2000);
});
let BioData = (roll_num) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (roll_num) => {
        myData = {
          name: "usman",
          age: 18,
        };
        resolve(
          `My name is ${myData.name}. I am ${myData.age} Years Old. My Roll No is ${roll_num}`
        );
      },
      2000,
      roll_num
    );
  });
};
// Promise consume

// PromObj.then((rollno)=>{
// console.log(rollno);
// BioData(rollno[2]).then((uff)=>{
//     console.log(uff);
// })
// }).catch((erroe)=>{
//     console.log(erroe);
// })

// async function getdata(){
//     let myGetDAta=await PromObj;
//     console.log(myGetDAta);
//     let bio=await BioData(myGetDAta[2])
//     // console.log(bio); 
//    return bio;
// }
// // getdata()
// let mybio=getdata().then((myName)=>{
//     console.log(myName);
// })
// console.log(mybio);


// Error handdling in Js 
try{
    async function getdata(){
            let myGetDAta=await PromObj;
            console.log(myGetDAta);
            let bio=await BioData(myGetDAta[2])
            // console.log(bio); 
           return bio;
        }
    console.log(getdata().then((dta)=>{
        console.log(dta);
    }));
    
}catch(error){
console.log(`The Error is ${error}`);
}
*/


//                          Topic #11

//    ==> AJAX 
// It stands for asynchronous javaScript and XML 
// ?It is not a programmong language Rather than it is set of existing technologies 
// Ajax Helps in fetching Data asynchronouly without interfearing the existing page
// No page reload/Refresh
// Modren websites use JSON instead of XML

// ===>Why Use AJAX

// NO page reload
// Better user experience 
// Saves NetworkBand
// Very intreactive

// ===>How it works 

// ajax Uses XTMLhttpRequest object(also called "xhr" ) to achieve this 
// Modren websites uses json instead of "xtml"



//                                Topic #12
// ===>Fetch Api()
console.log("i am Starting line");
let btn=document.querySelector("#FetchBtn");
let content=document.querySelector("#content");

// btn.addEventListener('click',getData);

// function getData(){
//     console.log("I am Function");
// url="Usman.txt"

// fetch(url).then((response)=>{
//     console.log(`First Promise`);
//     return response.text();
// }).then((data)=>{
//     console.log(data);
// })


// function getData(){
//     console.log("I am Function");
// url="https://api.github.com/users"

// fetch(url).then((response)=>{
//     console.log(`First Promise`);
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// })
// }

/*
function postData(){
    console.log("I am Function");
url="https://dummy.restapiexample.com/api/v1/create"
data='{"name":"Usn","salary":"123","age":"23"}'
parms={
    method:'post',
    header:{
        'Tontent-Type':'Application/json'
    },
    data:data
}
fetch(url,parms).then(response=> response.json())
.then(data=>console.log(data))
}

postData()

// getData();
*/


//                          Topic #11

// Local storage
// Methods 
/*
in Get fisrt parameter is key and the value of the key
localStorage.getItem()
only Pass Key in set items
localStorage.setItem()

localStorage.removeItem();
*/


//                          Topic #12

// Google Translate 
























