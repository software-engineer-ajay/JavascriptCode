/**
 * Algorithm 4: Find the factorial of a number
Step 1: Start
Step 2: Declare variables n, factorial and i.
Step 3: Initialize variables
          factorial ← 1
          i ← 1
Step 4: Read value of n
Step 5: Repeat the steps until i = n
     5.1: factorial ← factorial*i
     5.2: i ← i+1
Step 6: Display factorial
Step 7: Stop
 */

let n = 6, factorial = 1, i = 1;
while (i <= n) {
    factorial = factorial * i;
    i++;
}
console.log("Factorial: " + factorial);

