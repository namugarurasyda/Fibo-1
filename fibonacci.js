function fibonacci(n) {
// First test: base case for 0
  if (n === 0) return 0;       
// Second test: base case for 1
  if (n === 1) return 1;       

  //set initial variable values
  let prev = 0;
  let curr = 1;
  //loop through values to calculate next value until number n
  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;               // Update prev to curr
    curr = next;               // Update curr to next
  }
  return curr;                 // Return the nth Fibonacci number
}
