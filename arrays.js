let fruits = ["apple","orange","banana"];

fruits.push("lemon");
fruits.pop();
fruits.unshift("mango"); //add element to begining
fruits.shift();//removes element from beginning

let length = fruits.length;

let index = fruits.indexOf("apple");

//looping through an array

let prices = [5,10,15,20];

for(let i =0;i < prices.length;i++){
    console.log(prices[i]);
}
for(let i = prices.length -1 ;i>=0;i--){ //reverse order
    console.log(prices[i]);
}

for(let price of prices){ //alternative
    console.log(price);
}

//array sorting

fruits = fruits.sort();

for (let fruit of fruits){
    console.log("--------");
    console.log(fruit);
    console.log("--------");
}


fruits = fruits.sort().reverse();

for (let fruit of fruits){
    
    console.log(fruit);
    console.log("--------");

}


//2D array

let vegetables = ["carrots","onions","potates"];
let meats =["eggs","chicken","fish"];

let groceryList = [fruits,vegetables,meats];

groceryList[0][0] ="pears";
groceryList[2][2] ="steak";

for(let list of groceryList){
    for(let food of list){
        
        console.log(food);
        console.log("--------");
    }
}

//spread operator ...
//allows an iterable such as an array or string to be expanded
//in places where zero or more arguments are expected
//unpacks elements

let numbers=[1,2,3,4,5,6,7,8,9,10];

let max= Math.max(...numbers);
console.log(max);

//rest parameters packs arguments into an array

/*let a=1;
let b=2;
let c=3;
let d=4;
let e=5;

console.log(sum(a,b,c,d,e))

function sum(...numbers){
    let total =0;
    for(let number of numbers){
        total +=number
    }
    return total
}
*/
//callback a function passed as an argument to another function

sum(2,3,displayDOM);

function sum(x,y,callback){
    let result = x+y;
    callback(result);
}

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;
}

//array.forEach() = executes a provided callback function
//once for each array element

let students = ["spongebob","patrick","squidward"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element,index,array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
    console.log()
}

//array.map() = executes a provided callback function
//once for each array element
//AND creates a new array

let numbers2 = [1,2,3,4,5];
let squares = numbers2.map(square);
let cubes = numbers2.map(cube);

cubes.forEach(print);
squares.forEach(print);

function square(element){
    return Math.pow(element,2);
}

function cube(element){
    return Math.pow(element,3);
}

function print(element){
    console.log(element);
}

//array.filter() createsa new array with all elements
//that pass the test provided by a function

let ages = [18,16,21,17,19,90];
let adults =ages.filter(checkAge);

adults.forEach(print);

function checkAge(element){
    return element >=18;
}

function print(element){
    console.log(element);
}

//array.reduce() reduces an array to a single value

let prices2 =[5,10,20,50,100,200];
let total =prices2.reduce(checkOut);

console.log(`The total is: $${total}`);

function checkOut(total,element){
    return total +element;
}

//sort array of numbers
let grades = [100,50,90,60,70];

grades=grades.sort(descendingSort);
grades.forEach(print);

grades=grades.sort(ascendingSort);
grades.forEach(print);

function descendingSort(x,y){
    return y-x;
}

function ascendingSort(x,y){
    return x-y;
}

function print(element){
    console.log(element);
}

//function expressions 
//function without a name{anonymous function}
//avoid polluting the global scope with names
//write it,then forget about it

let count = 0;

document.getElementById("increaseButton").onclick =function(){
    count +=1;
    document.getElementById("myLabel2").innerHTML =count;
}
document.getElementById("decreaseButton").onclick =function(){
    count -=1;
    document.getElementById("myLabel2").innerHTML =count;
}

/*function increaseCount(){
    count +=1;
    document.getElementById("myLabel2").innerHTML =count;
}

function decreaseCount(){
    count -=1;
    document.getElementById("myLabel2").innerHTML =count;
}*/

//arrow function

const percent =  (x,y) => x/y*100;

console.log(`${percent(75,100)}%`)


//shuffle an array

let cards= ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

shuffle(cards);

console.log(cards);

function shuffle(array){
    let currentIndex = array.length;

    while (currentIndex !=0) {
        let randomIndex =Math.floor(Math.random() * array.length);
        currentIndex -=1;
        
        let temp =array[currentIndex];
        array[currentIndex] =array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}