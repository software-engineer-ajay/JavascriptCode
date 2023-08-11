/**
 * Algorithm 3: Find Roots of a Quadratic Equation ax2 + bx + c = 0
 * 
 * Step 1: Start
Step 2: Declare variables a, b, c, D, x1, x2, rp and ip;
Step 3: Calculate discriminant
         D ← b2-4ac
Step 4: If D ≥ 0
              r1 ← (-b+√D)/2a
              r2 ← (-b-√D)/2a 
              Display r1 and r2 as roots.
        Else     
              Calculate real part and imaginary part
              rp ← -b/2a
              ip ← √(-D)/2a
              Display rp+j(ip) and rp-j(ip) as roots
Step 5: Stop

https://i0.wp.com/technotip.com/wp-content/uploads/javascript/quadratic-equation.png?resize=273%2C77&ssl=1


Let,
a = 1
b = 4
c = 4
i.e., 1x2 + 4x + 4 =0
=> 1x2 + 2x + 2x + 4 = 0
=> x ( x + 2 ) + 2 ( x + 2 ) = 0
=> ( x + 2 ) + ( x + 2 ) = 0
=> x + 2 = 0 AND x + 2 = 0
=> x = -2 AND x = -2

 */


// let a=1, b=4, c=4, D, x1, x2, rp, ip;
// D = (b * 2) - (4 * a * c);
// if (D >= 0) {
//     let r1 = ((-b + Math.sqrt(D)) / (2 * a));
//     let r2 = ((-b - Math.sqrt(D)) / (2 * a));
//     console.log(`Roots ${r1}, ${r2}`);
// } else {
//     //Calculate real part and imaginary part
//     rp = -b / (2 * a);
//     ip = Math.sqrt(-D) / (2 * a);
//     console.log(`Roots1 ${rp+ip}, ${rp-ip}`);
// }


var a = 1
var b = -2
var c = -3
 
var root_part = Math.sqrt(b * b - 4 * a * c);
var denom = 2 * a;
 
var root1 = ( -b + root_part ) / denom;
var root2 = (-b - root_part) / denom;

console.log("Root1:" + root1);
console.log("Root2:" + root2);