"use strict";

//prendo l'elemento ul dell'html
const ul = document.querySelector("ul");

for (let i = 1; i <= 100; i++) {
  //creo un elemento li ad ogni iterazione
  const li = document.createElement("li");

  if (i % 3 === 0 && i % 5 === 0) {
    //numero multiplo di 3 e 5
    li.append("FizzBuzz");
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    //numero multiplo di 3
    li.append("Fizz");
    console.log("Fizz");
  } else if (i % 5 === 0) {
    //numero multiplo di 5
    li.append("Buzz");
    console.log("Buzz");
  } else {
    //numero né multiplo di 3 né di 5
    li.append(i);
    console.log(i);
  }

  //aggiungo ogni li alla lista ul
  ul.append(li);
}
