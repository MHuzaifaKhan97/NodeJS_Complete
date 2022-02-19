console.log("Program Start")

setTimeout(() => {
    console.log("Some Logical Work")
}, 3000);

console.log("Program End")

// Drawback

let a = 10;
let b = 0;


 setTimeout( async() => {
    b = 20;
}, 3000);

console.log(a+b);

// We can handle these type of problems with CallBacks, Promises or Async/Await