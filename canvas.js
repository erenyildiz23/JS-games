let canvas =document.getElementById("myCanvas");
let context =canvas.getContext("2d");

/*context.strokeStyle ="purple";
context.lineWidth=10;
context.beginPath();
context.moveTo(0,0);
context.lineTo(250,250);
context.lineTo(250,500);
context.moveTo(500,0);
context.lineTo(250,250);
context.stroke();*/

//Draw Triangle

/*context.strokeStyle = "yellow";
context.fillStyle = "purple";
context.lineWidth =10;
context.beginPath();
context.moveTo(250,0);
context.lineTo(0,250);
context.lineTo(500,250);
context.lineTo(250,0);
context.fill();
context.stroke();*/

//Draw Rectangle

context.fillStyle = "green";
context.fillRect(0,0,250,250)
context.strokeStyle = "red";
context.strokeRect(0,0,250,250);

context.fillStyle = "red";
context.fillRect(0,250,250,250)
context.strokeStyle = "green";
context.strokeRect(0,250,250,250);

context.fillStyle = "brown";
context.fillRect(250,0,250,250)
context.strokeStyle = "black";
context.strokeRect(250,0,250,250);

context.fillStyle ="purple";
context.lineWidth =10;
context.strokeStyle ="beige";
context.beginPath();
context.arc(250,250,100,0,2 *Math.PI);
context.stroke();
context.fill();

//Draw text

context.font = "50px MV Boli";
context.fillStyle ="yellow";
context.textAlign ="center";
context.fillText("You win",canvas.width/2,canvas.height/2);//centering


//window = interface use to talk to the web browser 
//the DOM is aproperty of the window 






