var x = 20;
var y = 330;
var sum = x + y;
console.log(sum);

console.log(z);
var z = 80;
console.log(z);

const x1 = 90;
x1 = 10;
console.log(x1);

var s = "ghanendra";
console.log(s);
let s = "tyagi";
console.log(s);

var s = "ghanendra";
s = "tyagi";
console.log(s);

function sum(num1, num2){
    let sum = num1 + num2;
    return sum;
}
console.log(sum(15,25));

function sum(num1, num2){
    console.log(num1 + num2);
}
sum(100,400);

var mul = () =>{
    console.log(100 * 5);
}

mul();

// TO ANALYSE THE BEHAVIOR NAMED FUNCTION IN EXPRESSION;

var divide = function(num1, num2){
    console.log(num1 / num2);
}
divide(10,2);

//setTimeout
setTimeout(() =>{
    console.log("Hello Everyone it's a Set Timeout and I am Ayush Sahu!");
}, 4000);

//setInterval
setInterval(() =>{
    console.log("Hello Everyone it's a Set Interval and I am Ayush Sahu!");
},3000);

function a(){
    var x = 100;
    console.log(x);
    function b(){
        var y = 300;
        console.log(y);
        function c(){
            var z = 500;
            console.log(z);
        }
        c();
    }
    b();
}
a();

//Closures
function a(){
    let x = 100;
    let y = 300;
    function b(){
        console.log(x);
        console.log(y);
    }
    b();
}
a();

function a(){
    let x = 100;
    let y = 400;
    function b(){
        let x = 900;
        console.log(x);
        console.log(y);
    }
    b();
}
a();

function a(){
    let x = 500;
    let y = 200;
    function b(){
        let x = 900;
        const y = 700;
        console.log(x);
        console.log(y);
    }
    b();
}
a();

//For Loop
for(let i=0; i<10; i++){
    console.log(i+1);
}

//Event Listners
document.getElementById("functionCall").addEventListener("click",function abc(){
    console.log("EVENT HAPPENED!!")
});


