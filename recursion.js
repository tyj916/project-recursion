#!/usr/bin/env node

function fibs(num) {
  const array = [];

  let a = 0;
  let b = 1;

  for (let i = 0; i < num; i++) {
    array.push(a);
    let c = a + b;
    a = b;
    b = c;
  }

  return array;
}

function fib(num) {
  return (num <= 1) ? num : fib(num - 1) + fib(num - 2);
}

function fibsRec(num) {
  const array = [];
  for (let i = 0; i < num; i++) {
    array.push(fib(i));
  }
  return array;
}



console.log(fibs(8));
console.log(fibsRec(8));