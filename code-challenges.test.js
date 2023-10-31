// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]
const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Pseudo code: The Fibonacci sequence is the sum of each preceding ordered pair. Ex: Takes index 0 (value) + index 1(value) = fibTotal = 1. Then the fib total becomes the new starting index value and takes the fibTotal + 1 to become the new value 2 so, 1 + (1+1)= 2 and so on.. 


describe('fibonacciLengthValue', () => {  //Using the describe method we can create a function that takes in both a string and function.
  it(`Takes the value of two indexs starting from the ordered pair [1, 1] and returns the sum of the two values which becomes the new starting index`, () => { // it declares what the test is going to do
  expect(fibonacciValue(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8]) //calling our function in which our expected argument is to equalto/meet to pass
  expect(fibonacciValue(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})


// b) Create the function that makes the test pass.

const fibonacciLengthValue = (number) => {
  const startingFibPair = [1,1]   //fib sequence actually starts with the fib pair of [0,1] but since our expected starts at [1, 1] I set my current fib pair to [1, 1]
  for (let i = 2; i < number ; i++){  //created a for loop starting at index 2 which runs until you expected number is met
    startingFibPair[i] = startingFibPair[i - 1] + startingFibPair[i - 2]
  }
  return startingFibPair
}
   
// console.log(fibonacciLengthValue(fibonacciLength1))
// console.log(fibonacciLengthValue(fibonacciLength2))
    





// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe('leastToGreatest', () => { //Using the describe method we can create a function that takes in both a string and function.
  it('Returns an array with the days of the week in order from least to greatest minutes', () => { // it declares what the test is doing
    expect(leastToGreatest(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90]) //calling our function in which our expected argument is to equalto/meet to pass
    expect(leastToGreatest(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

const leastToGreatest = (array) => {  //created a function that takes in an array
   return Object.values(array).sort((a,b) => a - b);  //returns an array in a list then sorts them from lowest to highest
}
// console.log(leastToGreatest(studyMinutesWeek1))
// console.log(leastToGreatest(studyMinutesWeek2))




