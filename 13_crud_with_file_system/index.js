// Make File
// Read File
// Update File
// Rename File
// Delete File

const fs = require('fs')
const path = require('path');

const dirPath = path.join(__dirname,"crud");
const filePath = `${dirPath}/text.txt`;

// fs.writeFileSync(filePath,"This is a simple text file");

// fs.readFile(filePath,'utf-8' ,(err,data) => {
//     console.log(data)
// })


// fs.appendFile(filePath," and file name is text.txt",(err)=>{
//     if(!err){
//         console.log("File is Updated")
//     }
// });

// fs.rename(filePath,`${dirPath}/newFile.txt`,(err)=>{
//     if(!err){
//         console.log("File name is updated")
//     }
// })

fs.unlinkSync(`${dirPath}/newFile.txt`)