function factorial(n) {
  var fact = 1;
  for (let v = 1; v <= n; v++) {
    fact = fact * v;
  }
  return fact;
}

console.log(factorial(5));
