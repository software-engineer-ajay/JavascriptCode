/**
 * Algorithm 6: Find the Fibonacci series till the term less than 1000
Step 1: Start 
Step 2: Declare variables first_term,second_term and temp. 
Step 3: Initialize variables first_term ← 0 second_term ← 1 
Step 4: Display first_term and second_term 
Step 5: Repeat the steps until second_term ≤ 1000 
     5.1: temp ← second_term 
     5.2: second_term ← second_term + first_term 
     5.3: first_term ← temp 
     5.4: Display second_term 
Step 6: Stop
 */
function fib(n) {
  let a = 0,
    b = 1,
    c,
    i;
  if (n == 0) return a;
  for (i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

function fib_rec(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib_rec(n - 1) + fib_rec(n - 2);
  }
}

function fib_dp(n) {
  /* Declare an array to store Fibonacci numbers. */
  let f = new Array(n + 2); // 1 extra to handle case, n = 0
  let i;
  /* 0th and 1st number of the series are 0 and 1*/
  f[0] = 0;
  f[1] = 1;
  for (i = 2; i <= n; i++) {
    /* Add the previous 2 numbers in the series
            and store it */
    f[i] = f[i - 1] + f[i - 2];
  }
  console.log(f);
  return f[n];
}
// Driver code
let n = 9;

console.log("fib: " + fib(n));
console.log("fib_rec: " + fib_rec(n));
console.log("fib_dp: " + fib_dp(n));
