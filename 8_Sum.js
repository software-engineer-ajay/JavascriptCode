function findSum() {
  let sum = 0;
  for (let v = 1; v <= 100000000000; v++) {
    sum += v;
  }
  return sum;
}

//console.log(findSum());

//it will take long time to run

//optimize version

function sumOpti() {
  var N = 100000000000;
  let Sum = (N * (N + 1)) / 2;
  return Sum;
}

console.log(sumOpti());
