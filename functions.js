//nested functions = functions inside other functions

let userName ="Eren";
let userInbox =0;

login();

function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log(`Welcome ${userName}`);
    }
    
    function displayUserInbox() {
        console.log(`You have ${userInbox} new messages`);
    }
}

//Map =object that holds key value pairs of any data type

const store = new Map([
   ["t-shirt",20],
   ["jeans",30],
   ["socks",10],
   ["underwear",50]
]);

store.set("hat",40);
store.delete("hat");

console.log(store.has("hat"));

console.log(store.size);

let shoppingCart=0;

shoppingCart += store.get("t-shirt");
shoppingCart += store.get("underwear");


console.log(shoppingCart);

store.forEach((value,key) => console.log(`${key} $${value}`));

//object properties methods use.

//class

class Player{
    score=0;

    pause(){
        console.log("You paused the game");
    }
    exit(){
        console.log("You exited the game");
    }
}

const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

player1.score +=1;

console.log(player1.score);
console.log(player2.score);

player1.pause();
player2.exit();

//constructor=special method of a class



class Student{

    static numberOfCars = 0;
    constructor(name,age,gpa){
        this.name=name;
        this.age=age;
        this.gpa=gpa;
        Student.numberOfCars += 1;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 =new Student("Spongebob",30,3.7);
const student2 =new Student("Patrick",35,0.79);
const student3 =new Student("Squidward",45,2.5);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();

console.log(student3.name);
console.log(student3.age);
console.log(student3.gpa);
student3.study();

console.log(Student.numberOfCars);

//inheritance=a child class can inherit all the methods and properties
//from another class
//super=refers to parent class

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    alive=true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{
    
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed= swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
    }
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit("rabbit",1,40);
const fish= new Fish("fish",2,80);
const hawk = new Hawk("hawk",3,200);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.run();
rabbit.eat();

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
fish.swim();

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);
hawk.fly();
hawk.sleep();


//getter setter

class Car{


    constructor(model,year,color,power){
        this.model =model;
        this.year = year;
        this.color =color;
        this._gas = 25;
        this._power = power;
    }
    get power(){
        return `${this._power} hp`;//protected property
    }
    get gas(){
        return `${this._gas} L (${this._gas / 50 *100}%)`;//protected property
    }
    set gas(value){
        if(value > 50){
            value =50;
        }
        else if (value < 0) {
            value=0;
        } 
        this._gas =value;
    }
}

const car1 =new Car("Mustang",2023,"red",50,500);
const car2 =new Car("Corvette",2024,"blue",25,600);
const car3 =new Car("Lambo",2022,"yellow",70,300);

const cars =[car1,car2,car3];

console.log(cars[0].model);
console.log(cars[1].model);
console.log(cars[2].model);


car3.gas =  20;

displayInfo(car3);//object as an argument

function displayInfo(car){
    console.log(car.gas);
}

console.log(`This car's horse power is ${car3.power} !`);
console.log(`This car's gas capacity is ${car3.gas} !`);

function startRace(cars){
    for(const car of cars){
        car.displayInfo();
    }
}

//anonymuous objects

class Card{
    constructor(value,suit){
        this.value =value;
        this.suit = suit;
    }
}



let cards =[new Card("A","Hearts"),
new Card("A","Spades"),
new Card("A","Diamonds"),
new Card("A","Clubs"),

new Card("2","Hearts"),
new Card("2","Spades"),
new Card("2","Diamonds"),
new Card("2","Clubs")];

cards.forEach(card => console.log(`${card.value} ${card.suit}`))



const myClock = document.getElementById("myClock");

update();
setInterval(update,1000);

function update(){
   let date =new Date();
   myClock.innerHTML = formatTime(date);

   function formatTime(){
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am";

    hours = (hours % 12 ) || 12;

    hours = formatZeroes(hours);
    minutes = formatZeroes(minutes);
    seconds = formatZeroes(seconds);

    return `${hours}: ${minutes}: ${seconds} ${amOrPm}`;
   }
   function formatZeroes(time) {
    time = time.toString();
    return time.length < 2? "0" + time : time
   }
}

//synchronous code ordered sequence
//step by step linear instructions
//start now finish now

//asynchronous code out of sequence 
//exp. access database fetch a file tasks that take time
//start now finish later

console.log("Start");
console.log("this step is in synchro");
console.log("end");

console.log("Start");
setTimeout(() => console.log("This is asynchronous"),5000);
console.log("end");

//promise object that encapsulates the result of an asynchronous operation
//it changes asynchronous methods return values like synchronous methods

async function loadFile(){
    let fileLoaded =true;

    if(fileLoaded){
        return"File loaded";
    }
    else{
        throw "File NOT loaded";
    }
}

async function startProcess(){
   try{
    let message = await loadFile();
    console.log(message);
   }
   catch(error){
    console.log(error);
   }
}

startProcess();


//ES6 modules


import * as MathUtil from "./math.js";

console.log(MathUtil.PI);

let circumference = MathUtil.getCircumference(10);
console.log(circumference);

let area=MathUtil.getArea(10)
console.log(area);

//DOM document object model(API)
//an interface for changing the content of a page

console.log(document.title);
console.log(document.URL);

document.title ="Functions etc.";


document.body.style.backgroundColor ="skyblue";


//element selcetors
let element= document.getElementById("myMenu");
element.style.backgroundColor = "green";

let fruits = document.getElementsByName("fruits");

fruits.forEach(fruit =>{
        if(fruit.checked){
            console.log(fruit.value);
        }
    })

let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor ="lightgray";

let desserts =document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor ="red";

let elements =document.querySelectorAll(".desserts");
elements.forEach(element2 =>{
   element2.style.backgroundColor ="pink";
})

//DOM traversal

let element3 =document.querySelector("#vegetables");
let children = Array.from(element3.children);
children.forEach(child =>child.style.backgroundColor ="white");

