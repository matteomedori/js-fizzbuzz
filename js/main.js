"use strict";

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    //numero multiplo di 3 e 5
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    //numero multiplo di 3
    console.log("Fizz");
  } else if (i % 5 === 0) {
    //numero multiplo di 5
    console.log("Buzz");
  } else {
    //numero né multiplo di 3 né di 5
    console.log(i);
  }
}
