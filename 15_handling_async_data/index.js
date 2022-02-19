let a = 10;
let b = 0;


let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 2000);
});

waitingData.then((data) => {
    console.log(a + data);
})
console.log(a + b);