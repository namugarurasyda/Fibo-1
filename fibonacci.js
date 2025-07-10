//Conrad Waako and Syda Namugarura

export default function fibonacci(step) {
  if (Number.isInteger(step) === false) throw new Error("The input must be an integer");
  if (step < 0) throw new Error("Steps can not be negative");
// First test: base case for 0
  if (step === 0) return 0;       
// Second test: base case for 1
  if (step === 1) return 1;       

  //set initial variable values
  let prev = 0;
  let curr = 1;
  //loop through values to calculate next value until number n
  for (let i = 2; i <= step; i++) {
    let next = prev + curr;
    // Update prev to curr
    prev = curr;     
    // Update curr to next
    curr = next;               
  }
  // Return the Fibonacci number for the current step
  return curr;                 
}
