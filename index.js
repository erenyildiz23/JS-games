/*variables
1.declaration(var,let,const)
2.assignment (*assignment operator) */

/*let firstName="Eren";
let age=24;
let student=true; //boolean

age=age+1;


console.log("hello",firstName);
console.log("You are",age,"years old");
console.log("Enrolled",student);

document.getElementById("p1").innerHTML ="Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " +student;

/*arithmetic expression 
operants(values,variables)+operators(+,-,*,/)
y=x+5;
*/

/*let students =20;

students = students * 2;

console.log(students);

/*user input*/

/*let username = window.prompt("Whats your name");
console.log(username);

/*type conversions*/
/*let age2 = window.prompt("how old are you?");
age2= Number(age2);
age2 += 1;

console.log("Happy Birthday! You are",age2,"years old");

let x;
let y;
let z;

x=Number("3.14");
y=String(3.14);
z=Boolean("pizza");

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);

//constants a variable that cannot be changed

/*const pi=3.14; //increases data security
let radius;
let circumference;

radius = window.prompt("Enter the radius of circle");
radius =Number(radius);

circumference = 2*pi *radius;

console.log("The circumference is: ",circumference);

//JS Math

/*let t=34.45;
let u=5;
let v=9;

let max;
let min;

//x=Math.round(t);
//x=Math.floor(t);
/*t =Math.PI;
t=Math.ceil(t)

max=Math.max(t,u,v);
min=Math.min(t,u,v);

console.log(t);

console.log(max);
console.log(min);

//triangle formula



/*a=window.prompt("Enter side A");
a =Number(a);

b=window.prompt("Enter side B");
b =Number(b);

c=Math.pow(a,2) + Math.pow(b,2);
c=Math.sqrt(c)

console.log("Side C:",c);*/

let a;
let b;
let c;

document.getElementById("submitButton").onclick =function(){
   a=document.getElementById("aTextBox").value;
   a =Number(a);

   b=document.getElementById("bTextBox").value;
   b =Number(b);

   c= Math.sqrt(Math.pow(a,2) +Math.pow(b,2));

    document.getElementById("cLabel").innerHTML ="Side C:" +c;

}

//counter program

let count=0;

document.getElementById("decreaseBtn").onclick =function(){
    count -=1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick =function(){
    count =0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increaseBtn").onclick =function(){
    count +=1;
    document.getElementById("countLabel").innerHTML = count;
}

//random no generator 

let x;
let y;
let z;


document.getElementById("rollButton").onclick = function(){
     x = Math.floor(Math.random() * 20) + 1;
     y = Math.floor(Math.random() * 8) + 1;
     z = Math.floor(Math.random() * 12) + 1;

     document.getElementById("xlabel").innerHTML=x;
     document.getElementById("ylabel").innerHTML=y;
     document.getElementById("zlabel").innerHTML=z;

}

//string methods

let userName= "Eren Yildiz";
let phoneNumber ="123-456-7890";

console.log(userName.length);

let firstLetter = userName.charAt(0);

console.log(firstLetter);

console.log(userName.indexOf("i"));
console.log(userName.lastIndexOf("i"));

phoneNumber=phoneNumber.replaceAll("-","/");
console.log(phoneNumber);

//slice() extracts a section of a string and returns as a new thing

let fullName = "Snoop Dogg"
let firstName;
let lastName;

//firstName=fullName.slice(0,4)
//lastName = fullName.slice(5);

firstName =fullName.slice(0,fullName.indexOf(" "));
lastName =fullName.slice(fullName.indexOf(" ") + 1);


console.log(lastName)
console.log(firstName)

//method cahining

let uname="Luffy";

let letter =uname.charAt(0).toUpperCase().trim();

console.log(letter);

//if statement

let age = 21;

if(age >= 18){
    console.log("You are at the legal age");
}
else if(age<0) {
    console.log("YOU HAVENT BEEN BORN YET");
}
else if(age >=65)
{
    console.log("You are a senior citizen")
}
else {
    console.log("you are a child");
}

//checked property

document.getElementById("myButton").onclick =function(){

    const myCheckBox =document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const masterCardBtn = document.getElementById("masterCardBtn");
    const PayPalBtn =document.getElementById("PayPalBtn");


    if(myCheckBox.checked){  
        console.log("You are subscribed");
    }
    else{
        console.log("you are not subscribed");
    }
    
    if(visaBtn.checked){
        console.log("you are paying with Visa");
    }
    else if (masterCardBtn.checked) {
        console.log("You are paying with a MasterCard");
        
    } else if (PayPalBtn.checked) {
        console.log("you are paying with paypal");
    } else {
        console.log("You must select a payment type");
    }
    
}


//and or

let temp =15;

if(temp > 0 && temp < 30){
    console.log("The weather is good");
}
else{
    console.log("The weather is bad");
}

//not

let temp2= 15;
let sunny=true;

if(!(temp2>0)){
    console.log("It's cold outside");
    
}
else{
    console.log("it is warm outside");
}

if(!sunny){
    console.log("It's sunny outside");
}
else{
    console.log("It's cloudy outside");
}

//nested loop

let symbol =window.prompt("Enter symbol to use");
let rows =window.prompt("Enter number of rows");
let columns =window.prompt("Enter number of columns");

for(let i=1; i<=rows; i+=1){
    for(let j=1; j<=columns; j+=1){
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}

//functions

startProgram();

function startProgram(){
    let bdayboy="Eren";
    let age3 = 25;

    happyBday(bdayboy,age3);//arguments
}


function happyBday(bdayboy,age3){//parameters
    console.log("happy bday to you");
    console.log("happy bday dear",bdayboy);
    console.log("happy bday to you");
    console.log("you are",age3,"years old");
}


//return 
let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width,height);

console.log("The area is:",area);

function getArea(width,height){
    let result = width * height;
    return result;
}

//let = variables are limited to block scope{}
//var = variables are limited to a function(){}

//format currency
//toLocaleeString() = returns string with a language 
//sensitive rep of this number

//number.toLocaleString(locale,{options});

//locale=specifies the language
//options=object with formatting options

let myNum = 123456.789;

myNum =myNum.toLocaleString("en-US",{style:"currency",currency: "USD"});

console.log(myNum);

//number guessing game

const answer = Math.floor(Math.random() * 10 + 1);

let guesses = 0;

document.getElementById("submitButton2").onclick = function(){
    
   let guess=document.getElementById("guessField").value
   guesses +=1;

   if(guess == answer){
    alert(`${answer} is the #.It took you ${guesses}`,guesses);
   }
   else if(guess < answer){
    alert("Too small");
   }
   else{
    alert("Too Large!");
   }
}