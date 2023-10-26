// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

const num1 = Math.floor(Math.random()*100)
const num2 = Math.floor(Math.random()*100)

const number_1 = document.getElementById("number1");
const number_2 = document.getElementById("number2");

number_1.innerText = Number(num1);
number_2.innerText = Number(num2);

// Iteration 3: Creating variables required to make the game functional

var addition = num1 + num2;
var substraction = num1 - num2
var multiplication = num1 * num2;
var division = Math.floor(num1/num2);
var modulus = num1% num2;


// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

const number_3 = document.getElementById("number3");


// Iteration 5: Creating a randomise function to make the game functional


const array = [division,addition,substraction,multiplication,modulus]; 
const random = array[Math.floor(Math.random()*5)];
number_3.innerText = Number(random)



// Iteration 6: Making the Operators (button) functional

var imgadd = document.getElementById("plus");
var imgsub = document.getElementById("minus");
var imgmult = document.getElementById("mul");
var imgdiv = document.getElementById("divide");
var imgmod = document.getElementById("modulus");

var buttons = document.querySelectorAll("#buttons")
var totscore = Number(sessionStorage.getItem('score')) || 0 ;


buttons.forEach((el)=>{
    el.addEventListener('click', (event) =>{
        if(num1 + num2 == Number(random) && event.target.id == "plus"){
            console.log("correct")
            totscore += 1;
            sessionStorage.setItem('score' , totscore);
            window.location.href = "game.html"
        }
        else if(num1 - num2 == Number(random) && event.target.id == "minus"){
            console.log("correct")
            totscore +=1 ;
            sessionStorage.setItem('score' , totscore);
            window.location.href = "game.html"
        }
        else if(num1*num2 == Number(random) && event.target.id == "mul"){
            console.log("correct")
            totscore += 1;
            sessionStorage.setItem('score' , totscore);
            window.location.href = "game.html"
        }
        else if(Math.floor(num1 / num2) == Number(random) && event.target.id == "divide"){
            console.log("correct")
            totscore += 1;
            sessionStorage.setItem('score' , totscore);
            window.location.href = "game.html"
        }
        else if(num1 % num2 == Number(random) && event.target.id == "modulus"){
            console.log("correct")
            totscore += 1;
            sessionStorage.setItem('score' , totscore);
            window.location.href = "game.html"
        }
        else{
            console.log("not correct")
            sessionStorage.setItem('score' , totscore);
            window.location.href = "gameover.html"
        }
})
    
})


// Iteration 7: Making Timer functional


const timer = document.getElementById("timer");
var counter = 20;
setInterval(()=> {
    timer.innerText = counter;
    counter = counter - 1;
    if(counter <0){
        window.location.href = "gameover.html"
    }
},1000);


