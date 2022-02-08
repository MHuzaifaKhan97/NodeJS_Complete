// Loops

// For
let arr = [1,2,3,4,5]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// While
let i= 0;
while( i < 3){
    console.log(arr[i])
    i++
}

// Do While
let x = 0;
do{
    console.log(arr[x])
    x++

}while(x == 0)

// For In Loop

const myArray = { firstName: "Huzaifa", lastName: "Khan", degrees: "BS-SE" }

for (i in myArray) {
    console.log(myArray[i])
}

// For Of Loop

const digits = ["a", "b", "c", "d", "e", "f", "g", "h"]
const myname = "huzaifa"

for (const index of digits) {
   console.log(index);
}
for (const index of myname) {
   console.log(index);
}
