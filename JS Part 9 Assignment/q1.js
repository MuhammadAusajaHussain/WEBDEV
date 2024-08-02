let body = document.querySelector("body");

//Ans 1
let input = document.createElement("input");
let button = document.createElement("button");
button.innerHTML = "Click me";

body.append(input);
body.append(button);

//Ans 2
input.setAttribute("placeholder","username");
button.setAttribute("id","btn");

//Ans 3
let btn = document.getElementById("btn");
btn.classList.add("btnStyle");

//Ans 4
let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.classList.add("h1Style");
body.append(h1);

//Ans 5
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice"
body.append(p);